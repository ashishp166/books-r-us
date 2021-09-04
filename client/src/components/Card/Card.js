import React from 'react'
import lion from "../../assets/image/lion2.jpg"
import "./Card.css"
import star from "../../assets/svg/star.svg"
import book from "../../assets/images"
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <Link to={`/product/${props.book.slug}`} className="Card">
            <img className="main-img" src={book[props.book.image]}/>
            <h4>
                {props.book.title}
            </h4>
            <div className="card-start">
                {props.book.rating}
                <img src={star}/>
            </div>
            <div className="card-price" >
                <p>$</p>
                <h4>{props.book.price}</h4>
            </div>
        </Link>
    )
}

export default Card
