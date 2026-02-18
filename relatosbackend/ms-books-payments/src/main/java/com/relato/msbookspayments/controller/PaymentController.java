package com.relato.msbookspayments.controller;

import com.relato.msbookspayments.model.Purchase;
import com.relato.msbookspayments.repository.PurchaseRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    private final PurchaseRepository purchaseRepository;

    public PaymentController(PurchaseRepository purchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }

    @GetMapping("/book/{bookId}/exists")
    public Boolean hasPayments(@PathVariable Long bookId) {
        return purchaseRepository.existsByBookId(bookId);
    }

    @PostMapping("/test/{bookId}")
    public String testInsert(@PathVariable Long bookId) {
        Purchase p = new Purchase();
        p.setBookId(bookId);
        purchaseRepository.save(p);
        return "OK";
    }
}
