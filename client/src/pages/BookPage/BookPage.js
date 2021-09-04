import React from 'react'
import { Container } from 'react-bootstrap'
import books from "../../assets/images"
import star from "../../assets/svg/star.svg"
import "./BookPage.css"
import { useParams } from "react-router-dom"
import { useQuery, gql } from "@apollo/client"

const BOOK_QUERY = gql`
query($slug: String!){
  book(slug: $slug) {
    title
    image
    stock
    description
    price
    rating
    review
  }
}
`

function BookPage() {

    const { slug } = useParams();

    const { data, loading, error } = useQuery(BOOK_QUERY, {
        variables: {
            slug
        }
    })

    if(loading) return <div>loading...</div>

    if(error) return <div>error...</div>
    console.log(data)

    return (
        <div className="py-5">
            <Container>
                <div className="d-flex">
                    <img src={books[data.book.image]} className="product-img"  style={{marginRight: "1rem"}}/>
                <div className="text-container">
                        <h1>{data.book.title}</h1>
                        <div className="star-container">
                            <p>{data.book.rating} </p>
                            <img src={star}/>
                            <div className="rating-stock-container">
                                <p>{data.book.review} rating</p>
                                <p>{data.book.stock} in stock</p>
                            </div>
                            
                        </div>
                        <div className="about-container">
                            <h4>About this Book</h4>
                            <li>{data.book.description}</li>
                        </div>
                    </div>
                    <div className="cart-container border">
                        <p className="price"><span>$ {data.book.price}</span></p>
                        <p className="delivery-time" >FREE delivery: Thursday, Feb 25 Details
                            <button className="buy-now-btn" style={{marginTop: "2rem"}}>
                                Add to Cart
                            </button>
                            <button>
                                Buy Now
                            </button>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BookPage
