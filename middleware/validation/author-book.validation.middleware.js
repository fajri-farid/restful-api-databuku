const createAuthorBookValidationSchema = {
  book_id: {
    notEmpty: {
      errorMessage: "book_id cannot be empty",
    },
    isString: {
      errorMessage: "book_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "book_id at most 50  characters",
    },
  },
  author_id: {
    notEmpty: {
      errorMessage: "author_id cannot be empty",
    },
    isString: {
      errorMessage: "author_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "author_id at most 50  characters",
    },
  },
};

const putAuthorBookValidationSchema = {
  book_id: {
    notEmpty: {
      errorMessage: "book_id cannot be empty",
    },
    isString: {
      errorMessage: "book_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "book_id at most 50  characters",
    },
  },
  author_id: {
    notEmpty: {
      errorMessage: "author_id cannot be empty",
    },
    isString: {
      errorMessage: "author_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "author_id at most 50  characters",
    },
  },
};

module.exports = {
  createAuthorBookValidationSchema,
  putAuthorBookValidationSchema,
};
