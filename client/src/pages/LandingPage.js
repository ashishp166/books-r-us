import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import { useQuery, useMutation, gql } from "@apollo/client"

const BOOK_QUERY = gql`
{
  books {
    image
    id
    title
    price
    slug
    image
    review
    rating
  }
}
`

const ADD_BOOK_MUTATION = gql`
mutation(
  $image: String!,
  $category: String!,
  $title: String!,
  $stock: Int!,
  $price: Float!,
  $rating: Float!,
  $slug: String!,
  $description: String!,
  $review: String!,
  $pages: String!
) {
  addBook(
    image: $image,
    category: $category,
    title: $title,
    stock: $stock,
    price: $price,
    description: $description,
    rating: $rating,
    slug: $slug,
    pages: $pages,
    review: $review
  ) {
    id
  }
}
`

function LandingPage() {

    const { loading, error, data } = useQuery(BOOK_QUERY);
    const [addBook] = useMutation(ADD_BOOK_MUTATION)

    if(loading) return <div>Loading...</div>;

    if(error) return <div>Error....</div>

    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay books={data.books}/>
        </div>
    )
}

export default LandingPage
