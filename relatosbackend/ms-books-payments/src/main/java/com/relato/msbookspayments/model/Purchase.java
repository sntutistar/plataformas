package com.relato.msbookspayments.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "purchases")
@Getter
@Setter
@NoArgsConstructor
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private Long bookId;

    @Column(nullable = false)
    private LocalDateTime purchaseDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PurchaseStatus status;

    @PrePersist
    public void prePersist() {
        if (purchaseDate == null) {
            purchaseDate = LocalDateTime.now();
        }
        if (status == null) {
            status = PurchaseStatus.COMPLETED;
        }
    }
}
