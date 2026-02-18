package com.relato.msbookscatalogue.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class BookRequestDTO {

    @NotBlank(message = "El título es obligatorio")
    private String title;

    @NotBlank(message = "El autor es obligatorio")
    private String author;

    @NotBlank(message = "La categoría es obligatoria")
    private String category;

    @NotBlank(message = "El ISBN es obligatorio")
    private String isbn;

    @NotNull(message = "La valoración es obligatoria")
    @Min(value = 1, message = "La valoración mínima es 1")
    @Max(value = 5, message = "La valoración máxima es 5")
    private Integer rating;

    private LocalDate publicationDate;

    private Boolean visible = true;
}
