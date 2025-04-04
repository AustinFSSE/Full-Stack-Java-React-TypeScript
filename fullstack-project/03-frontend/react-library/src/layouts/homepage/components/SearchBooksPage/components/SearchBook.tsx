import BookModel from "../../../../../models/BookModel";
import React from "react";

export const SearchBook: React.FC<{ Book: BookModel }> = (props) => {
    return (
        <div className={'card mt-3 shadow p-3 mb-3 bg-body rounded'}>
            <div className={'row g-0 '}>
                <div className={'col-md-2'}>
                    <div className={'d-none d-lg-block'}>
                        {props.Book.img ?
                            <img src={props.Book.img}
                             width={'123'}
                             height={'196'}
                             alt={'book image'}
                            />
                            :
                            <img src={require('../../../../../Images/BooksImages/book-luv2code-1000.png')}
                                 width={'123'}
                                 height={'196'}
                                 alt={'book image'}
                            />
                        }
                    </div>
                    <div className={'d-lg-none d-flex justify-content-center align-items-center'}>
                        {props.Book.img ?
                            <img src={props.Book.img}
                                 width={'123'}
                                 height={'196'}
                                 alt={'book image'}
                            />
                            :
                            <img src={require('../../../../../Images/BooksImages/book-luv2code-1000.png')}
                                 width={'123'}
                                 height={'196'}
                                 alt={'book image'}
                            />
                        }
                    </div>
                </div>
                <div className={'col-md-6'}>
                    <div className={'card-body'}>
                        <h5 className={'card-title'}>
                            {props.Book.author}
                        </h5>
                        <h4>
                            {props.Book.title}
                        </h4>
                        <p className={'card-text'}>
                            {props.Book.description}
                        </p>
                    </div>
                </div>
                <div className={'col-md-4 d-flex justify-content-center align-items-center'}>
                    <a className={'btn btn-md main-color text-white'} href={'#'}>
                        View Details
                    </a>
                </div>
            </div>
        </div>
    );
}