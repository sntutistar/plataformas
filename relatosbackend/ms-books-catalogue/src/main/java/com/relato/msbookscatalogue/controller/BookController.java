package com.relato.msbookscatalogue.controller;

import com.relato.msbookscatalogue.dto.BookRequestDTO;
import com.relato.msbookscatalogue.dto.BookResponseDTO;
import com.relato.msbookscatalogue.exception.ResourceNotFoundException;
import com.relato.msbookscatalogue.mapper.BookMapper;
import com.relato.msbookscatalogue.model.Book;
import com.relato.msbookscatalogue.repository.BookRepository;
import com.relato.msbookscatalogue.specification.BookSpecification;
import jakarta.validation.Valid;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookRepository repository;

    public BookController(BookRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public BookResponseDTO create(@Valid @RequestBody BookRequestDTO dto) {
        Book book = BookMapper.toEntity(dto);
        return BookMapper.toResponse(repository.save(book));
    }

    @GetMapping("/{id}")
    public BookResponseDTO getById(@PathVariable Long id) {
        Book book = repository.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new ResourceNotFoundException("Libro no encontrado"));
        return BookMapper.toResponse(book);
    }

    @PutMapping("/{id}")
    public BookResponseDTO update(@PathVariable Long id, @Valid @RequestBody BookRequestDTO dto) {
        Book book = repository.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new ResourceNotFoundException("Libro no encontrado"));

        book.setTitle(dto.getTitle());
        book.setAuthor(dto.getAuthor());
        book.setCategory(dto.getCategory());
        book.setIsbn(dto.getIsbn());
        book.setRating(dto.getRating());
        book.setPublicationDate(dto.getPublicationDate());
        book.setVisible(dto.getVisible() != null ? dto.getVisible() : true);

        return BookMapper.toResponse(repository.save(book));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        Book book = repository.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new ResourceNotFoundException("Libro no encontrado"));

        book.setDeleted(true);
        repository.save(book);
    }

    @GetMapping("/search")
    public List<BookResponseDTO> search(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String author,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String isbn,
            @RequestParam(required = false) Integer rating,
            @RequestParam(required = false) Boolean visible,
            @RequestParam(required = false) LocalDate publicationDate
    ) {
        Specification<Book> spec = BookSpecification.withFilters(
                title, author, category, isbn, rating, visible, publicationDate
        );

        return repository.findAll(spec)
                .stream()
                .map(BookMapper::toResponse)
                .toList();
    }
}
