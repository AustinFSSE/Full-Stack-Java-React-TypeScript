import React from 'react'

export const ReturnBook = () => {
    return (
        <div className={'col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'}>
            <div className={'text-center'}>
                <img
                    src={require('./../../../Images/BooksImages/book-luv2code-1000.png')}
                    height='233'
                    width='151'
                    alt='Book lu2 code'
                />
                <h6 className={'mt-2'}>Book</h6>
                <p>I love coding</p>
                <a href={'#'} className={'btn main-color text-white'}>Reserve</a>
            </div>
        </div>
    );
}