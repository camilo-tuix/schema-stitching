const resolvers = {
  Query: {
    reviews(_, __, { dataSources }) {
      return dataSources.reviewsAPI.getAllReviews();
    },
    reviewsForBook(_, { isbn }, { dataSources }) {
      const reviews = dataSources.reviewsAPI.getReviewsForBook(isbn);
      return { isbn, reviews };
    },
  },
  Review: {
    book: (review) => {
      return { isbn: review.bookIsbn };
    },
  },
  Book: {
    authorFullName: (book) => {
      console.log('My book', book)
      return `${book.authorFirstName} ${book.lastFirstName}`
    }
  }
};

module.exports = resolvers;
