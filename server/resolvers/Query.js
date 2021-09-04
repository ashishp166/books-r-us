const Query = {
    mainCards: (parent, args, { mainCards }) => mainCards,
    books: (parent, args, { books }) => books,
    book: (parent, args, { books }) => {
        let book = books.find((book) => {
            return book.slug === args.slug
        })
        return book
    },
    categories: (parent, args, { categories }) => categories,
    category: (parent, args, { categories }) => {
      let category = categories.find((category) => {
        return category.slug === args.slug
      });
      return category;
    }
}

module.exports = Query
