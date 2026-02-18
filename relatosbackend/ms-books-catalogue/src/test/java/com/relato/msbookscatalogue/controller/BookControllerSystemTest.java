package com.relato.msbookscatalogue.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(properties = "eureka.client.enabled=false")
@AutoConfigureMockMvc
class BookControllerSystemTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void shouldExecuteCrudFlowForBookEntity() throws Exception {
        String createBody = """
                {
                  "title": "Libro QA Inicial",
                  "author": "Equipo QA",
                  "category": "Pruebas",
                  "isbn": "QA-ISBN-001",
                  "rating": 4,
                  "publicationDate": "2024-10-20",
                  "visible": true
                }
                """;

        MvcResult createResult = mockMvc.perform(post("/books")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(createBody))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.title").value("Libro QA Inicial"))
                .andReturn();

        JsonNode createResponse = objectMapper.readTree(createResult.getResponse().getContentAsString());
        Long createdId = createResponse.get("id").asLong();
        assertThat(createdId).isPositive();

        mockMvc.perform(get("/books/{id}", createdId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(createdId))
                .andExpect(jsonPath("$.title").value("Libro QA Inicial"));

        String updateBody = """
                {
                  "title": "Libro QA Editado",
                  "author": "Equipo QA",
                  "category": "Pruebas",
                  "isbn": "QA-ISBN-001",
                  "rating": 5,
                  "publicationDate": "2024-10-20",
                  "visible": true
                }
                """;

        mockMvc.perform(put("/books/{id}", createdId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(updateBody))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Libro QA Editado"))
                .andExpect(jsonPath("$.rating").value(5));

        mockMvc.perform(get("/books/{id}", createdId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Libro QA Editado"));

        mockMvc.perform(delete("/books/{id}", createdId))
                .andExpect(status().isNoContent());

        mockMvc.perform(get("/books/{id}", createdId))
                .andExpect(status().isNotFound());
    }
}
