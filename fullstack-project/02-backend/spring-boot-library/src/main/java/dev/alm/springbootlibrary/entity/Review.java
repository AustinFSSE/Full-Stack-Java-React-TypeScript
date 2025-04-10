package dev.alm.springbootlibrary.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name= "review")
@Data
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_email")
    private String user_email;

    @Column(name = "date")
    private String date;

    @Column(name = "rating")
    private Double rating;

    @Column(name= "book_id")
    private Long bookId;

    @Column(name = "review_description")
    private String reviewDescription;
}
