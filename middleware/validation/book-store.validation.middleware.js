const createBookStoreValidationSchema = {
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
  store_id: {
    notEmpty: {
      errorMessage: "store_id cannot be empty",
    },
    isString: {
      errorMessage: "store_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "store_id at most 50  characters",
    },
  },
};

const putBookStoreValidationSchema = {
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
  store_id: {
    notEmpty: {
      errorMessage: "store_id cannot be empty",
    },
    isString: {
      errorMessage: "store_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "store_id at most 50  characters",
    },
  },
};

module.exports = {
  createBookStoreValidationSchema,
  putBookStoreValidationSchema,
};
