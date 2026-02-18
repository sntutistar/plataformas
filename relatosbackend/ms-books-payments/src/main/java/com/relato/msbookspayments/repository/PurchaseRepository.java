package com.relato.msbookspayments.repository;

import com.relato.msbookspayments.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {

    boolean existsByBookId(Long bookId);

}
