import React from 'react'
import Card from '../Card/Card'
import {Container} from "react-bootstrap"

function CardDisplay({books}) {

    return (
        <div className="card-display">
            <Container className="card-display-container">
                {books.map(book => {
                    return <Card book={book} />
                })}
            </Container>
        </div>
    )
}

export default CardDisplay
