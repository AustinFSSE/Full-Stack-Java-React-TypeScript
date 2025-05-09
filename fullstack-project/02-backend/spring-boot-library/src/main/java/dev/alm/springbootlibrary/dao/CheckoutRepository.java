package dev.alm.springbootlibrary.dao;

import dev.alm.springbootlibrary.entity.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckoutRepository extends JpaRepository <Checkout, Long> {
    Checkout findByUserEmailAndBookId(String userEmail, Long bookId);
}
