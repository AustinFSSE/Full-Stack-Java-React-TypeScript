import React from 'react'
import BookModel from "../../../models/BookModel";
import {Link} from "react-router-dom";

export const ReturnBook: React.FC<{book: BookModel}> = (props) => {
    return (
        <div className={'col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'}>
            <div className={'text-center'}>
                {props.book.img ?
                    <img
                        src={props.book.img}
                        height='233'
                        width='151'
                        alt='Book lu2 code'
                    />
                    :
                    <img
                        src={require('./../../../Images/BooksImages/book-luv2code-1000.png')}
                        height='233'
                        width='151'
                        alt='Book lu2 code'
                    />
                }
                <h6 className={'mt-2'}>{props.book.title}</h6>
                <p>{props.book.author}</p>
                <Link to={`checkout/${props.book.id}`} className={'btn main-color text-white'}>Reserve</Link>
            </div>
        </div>
    );
}