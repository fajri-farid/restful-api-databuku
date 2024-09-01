const createBookLanguageValidationSchema = {
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
  language_id: {
    notEmpty: {
      errorMessage: "language_id cannot be empty",
    },
    isString: {
      errorMessage: "language_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "language_id at most 50  characters",
    },
  },
};

const putBookLanguageValidationSchema = {
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
  language_id: {
    notEmpty: {
      errorMessage: "language_id cannot be empty",
    },
    isString: {
      errorMessage: "language_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "language_id at most 50  characters",
    },
  },
};

module.exports = {
  createBookLanguageValidationSchema,
  putBookLanguageValidationSchema,
};
