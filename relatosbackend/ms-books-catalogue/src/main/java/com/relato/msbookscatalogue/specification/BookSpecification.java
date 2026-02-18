package com.relato.msbookscatalogue.specification;

import com.relato.msbookscatalogue.model.Book;
import org.springframework.data.jpa.domain.Specification;

import jakarta.persistence.criteria.Predicate;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class BookSpecification {

    public static Specification<Book> withFilters(
            String title,
            String author,
            String category,
            String isbn,
            Integer rating,
            Boolean visible,
            LocalDate publicationDate
    ) {
        return (root, query, cb) -> {

            List<Predicate> predicates = new ArrayList<>();

            predicates.add(cb.isFalse(root.get("deleted")));

            if (title != null && !title.isBlank()) {
                predicates.add(
                        cb.like(
                                cb.lower(root.get("title")),
                                "%" + title.toLowerCase() + "%"
                        )
                );
            }

            if (author != null && !author.isBlank()) {
                predicates.add(
                        cb.like(
                                cb.lower(root.get("author")),
                                "%" + author.toLowerCase() + "%"
                        )
                );
            }

            if (category != null && !category.isBlank()) {
                predicates.add(
                        cb.equal(
                                cb.lower(root.get("category")),
                                category.toLowerCase()
                        )
                );
            }

            if (isbn != null && !isbn.isBlank()) {
                predicates.add(
                        cb.equal(root.get("isbn"), isbn)
                );
            }

            if (rating != null) {
                predicates.add(
                        cb.equal(root.get("rating"), rating)
                );
            }

            if (visible != null) {
                predicates.add(
                        cb.equal(root.get("visible"), visible)
                );
            }

            if (publicationDate != null) {
                predicates.add(
                        cb.equal(
                                root.get("publicationDate"),
                                publicationDate
                        )
                );
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}
