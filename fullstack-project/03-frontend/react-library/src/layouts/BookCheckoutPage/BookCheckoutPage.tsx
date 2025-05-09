import {useEffect, useState} from "react";
import BookModel from "../../models/BookModel";
import {SpinnerLoading} from "../utils/SpinnerLoading";
import {StarsReview} from "../utils/StarsReview";
import {CheckoutAndReviewBox} from "./CheckoutAndReviewBox";
import ReviewModel from "../../models/ReviewModel";
import {LatestReviews} from "./LatestReviews";

export const BookCheckoutPage = () => {

    const [book, setBook] = useState<BookModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    /// review state
    const [reviews, setReviews] = useState<ReviewModel[]>([]);
    const [totalStars, setTotalStars] = useState(0);
    const [isLoadingReviews, setIsLoadingReviews] = useState(true);

    const bookId = (window.location.pathname).split('/')[2];

    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl: string = `http://localhost:8080/api/books/${bookId}`;

            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error("Failed to fetch books.");
            }

            const responseJson = await response.json();

            const loadedBook: BookModel = {
                id: responseJson.id,
                title: responseJson.title,
                author: responseJson.author,
                description: responseJson.description,
                copies: responseJson.copies,
                copiesAvailable: responseJson.copiesAvailable,
                category: responseJson.category,
                img: responseJson.img
            };
            setBook(loadedBook);
            setIsLoading(false);
        };
        fetchBooks().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, [bookId]);

    useEffect(() => {
        const fetchBookReviews = async () => {
            const reviewUrl: string = `http://localhost:8080/api/reviews/search/findByBookId?bookId=${bookId}`;
            const responseReviews = await fetch(reviewUrl);

            if (!responseReviews.ok) {
                throw new Error("Failed to fetch reviews.");
            }
            const responseJsonReviews = await responseReviews.json();

            const responseData = responseJsonReviews._embedded.reviews;

            const loadedReviews: ReviewModel[] = [];

            let weightedStarReviews: number = 0;

            for (const key in responseData) {
                loadedReviews.push({
                    id: responseData[key].id,
                    userEmail: responseData[key].userEmail,
                    date: responseData[key].date,
                    rating: responseData[key].rating,
                    book_id: responseData[key].book_id,
                    reviewDescription: responseData[key].reviewDescription
                });
                weightedStarReviews = weightedStarReviews + responseData[key].rating;
            }

            if (loadedReviews) {
                const round = (Math.round((weightedStarReviews / loadedReviews.length) * 2) / 2).toFixed(2);
                setTotalStars(Number(round));
            }

            setReviews(loadedReviews);
            setIsLoadingReviews(false);
        }

        fetchBookReviews().catch((error: any)=> {
            setIsLoadingReviews(false);
            setHttpError(error.message);
        })
    }, [bookId]);

    if (isLoading || isLoadingReviews) {
        return(
            <SpinnerLoading/>
        )
    }
    if (httpError) {
        return(
            <div className={'container m-5'}>
                <p>{httpError}</p>
            </div>
        )
    }

    return (
      <div>
        <div className={'container d-none d-lg-block'}>
            <div className={'row mt-5'}>
                <div className={'col-sm-2 col-md-2'}>
                    {book?.img ?
                    <img src={book?.img} width={'226'} height={'349'} alt={'book'}/>
                    :
                    <img src={require('../../Images/BooksImages/book-luv2code-1000.png')} width={'226'} height={'349'} alt={'book'}/>
                    }
                </div>
                <div className={'col-4 col--md-4 container'}>
                    <div className={'ml-2'}>
                        <h2>{book?.title}</h2>
                        <h5 className={'text-primary'}>{book?.author}</h5>
                        <p className={'lead'}> {book?.description}</p>
                        <StarsReview Rating={totalStars} size={32}/>
                    </div>
                </div>
                <CheckoutAndReviewBox book={book} mobile={false}/>
                <hr/>
                <LatestReviews reviews={reviews} bookId={book?.id} mobile={false}/>
            </div>
            <hr/>
        </div>
          <div className={'container d-lg-none mt-5'}>
            <div className={'d-flex justify-content-center align-items-center'}>
                {book?.img ?
                    <img src={book?.img} width={'226'} height={'349'} alt={'book'}/>
                    :
                    <img src={require('../../Images/BooksImages/book-luv2code-1000.png')} width={'226'} height={'349'} alt={'book'}/>
                }
            </div>
              <div className={'mt-4'}>
                  <div className={'ml-2'}>
                      <h2>{book?.title}</h2>
                      <h5 className={'text-primary'}>{book?.author}</h5>
                      <p className={'lead'}> {book?.description}</p>
                      <StarsReview Rating={totalStars} size={32}/>
                  </div>
              </div>
              <CheckoutAndReviewBox book={book} mobile={true}/>
              <hr/>
              <LatestReviews reviews={reviews} bookId={book?.id} mobile={false}/>
          </div>
      </div>
    );
}