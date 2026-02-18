package com.relato.msbookspayments.client;

import com.relato.msbookspayments.dto.BookResponseDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-books-catalogue")
public interface BooksCatalogueClient {

    @GetMapping("/books/{id}")
    BookResponseDTO getBookById(@PathVariable("id") Long id);
}
