package com.relato.msbookspayments.service;

import com.relato.msbookspayments.client.BooksCatalogueClient;
import com.relato.msbookspayments.dto.BookResponseDTO;
import com.relato.msbookspayments.exception.ResourceNotFoundException;
import com.relato.msbookspayments.model.Purchase;
import com.relato.msbookspayments.model.PurchaseStatus;
import com.relato.msbookspayments.repository.PurchaseRepository;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    private final PurchaseRepository repository;
    private final BooksCatalogueClient booksCatalogueClient;

    public PaymentService(PurchaseRepository repository,
                          BooksCatalogueClient booksCatalogueClient) {
        this.repository = repository;
        this.booksCatalogueClient = booksCatalogueClient;
    }

    public Purchase createPurchase(Long bookId) {

        BookResponseDTO book = booksCatalogueClient.getBookById(bookId);

        if (book == null || Boolean.FALSE.equals(book.getVisible())) {
            throw new ResourceNotFoundException(
                    "El libro no existe o no está disponible"
            );
        }

        Purchase purchase = new Purchase();
        purchase.setBookId(bookId);
        purchase.setStatus(PurchaseStatus.COMPLETED);

        return repository.save(purchase);
    }
}
