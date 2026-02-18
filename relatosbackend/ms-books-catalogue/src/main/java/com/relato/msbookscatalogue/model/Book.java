package com.relato.msbookscatalogue.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "books")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String title;

    @NotBlank
    @Column(nullable = false)
    private String author;

    private String category;

    @NotBlank
    @Column(unique = true, nullable = false)
    private String isbn;

    private LocalDate publicationDate;

    @Min(1)
    @Max(5)
    private Integer rating;

    private Boolean visible = true;

    @Column(nullable = false)
    private Boolean deleted = false;

    @PrePersist
    public void prePersist() {
        if (deleted == null) deleted = false;
        if (visible == null) visible = true;
    }
}
