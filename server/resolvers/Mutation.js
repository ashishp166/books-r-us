const { v4 } = require("uuid")

const Mutation = {
    addBook: (parent, {image, title, rating, price, description, quote, slug, stock, onSale, category}, {books}) => {
        let newBook = {
            id: v4(),
            image,
            title,
            rating,
            price,
            description,
            quote,
            slug,
            stock,
            onSale,
            category,
        }

        books.push(newBook)
        
        return newBook
    },

    removeBook: (parent, { id }, { books }) => {
        let index = books.findIndex((book) => {
            return book.id === id
        });

        books.splice(index, 1);

        return true
    }
}

module.exports = Mutation

// type Book {
//     id: ID!
//     image: String!
//     title: String!
//     rating: Float
//     price: String!
//     description: [String!]!
//     slug: String!
//     stock: Int!
//     onSale: Boolean
//     category: Category
// }