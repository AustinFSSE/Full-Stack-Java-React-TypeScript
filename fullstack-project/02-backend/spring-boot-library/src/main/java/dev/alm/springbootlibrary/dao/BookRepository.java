package dev.alm.springbootlibrary.dao;

import dev.alm.springbootlibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;



public interface BookRepository extends JpaRepository <Book, Long> {
}
