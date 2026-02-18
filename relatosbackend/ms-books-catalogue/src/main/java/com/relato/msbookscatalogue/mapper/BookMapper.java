package com.relato.msbookscatalogue.mapper;

import com.relato.msbookscatalogue.dto.BookRequestDTO;
import com.relato.msbookscatalogue.dto.BookResponseDTO;
import com.relato.msbookscatalogue.model.Book;

public final class BookMapper {

    private BookMapper() {
    }

    public static Book toEntity(BookRequestDTO dto) {
        if (dto == null) {
            return null;
        }

        Book book = new Book();
        book.setTitle(dto.getTitle());
        book.setAuthor(dto.getAuthor());
        book.setCategory(dto.getCategory());
        book.setIsbn(dto.getIsbn());
        book.setRating(dto.getRating());
        book.setPublicationDate(dto.getPublicationDate());
        book.setVisible(dto.getVisible() != null ? dto.getVisible() : true);
        book.setDeleted(false); // 👈 CLAVE

        return book;
    }

    public static BookResponseDTO toResponse(Book book) {
        if (book == null) {
            return null;
        }

        return new BookResponseDTO(
                book.getId(),
                book.getTitle(),
                book.getAuthor(),
                book.getCategory(),
                book.getIsbn(),
                book.getRating(),
                book.getVisible()
        );
    }
}
