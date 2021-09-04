
const Category = {
    books: (parent, args, { books }) => {
        return books.filter(book => {
            return book.category === parent.id
        })
    }
}

module.exports = Category