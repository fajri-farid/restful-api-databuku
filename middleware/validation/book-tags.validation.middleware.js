const createBookTagsValidationSchema = {
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
  tag_id: {
    notEmpty: {
      errorMessage: "tag_id cannot be empty",
    },
    isString: {
      errorMessage: "tag_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "tag_id at most 50  characters",
    },
  },
};

const putBookTagsValidationSchema = {
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
  tag_id: {
    notEmpty: {
      errorMessage: "tag_id cannot be empty",
    },
    isString: {
      errorMessage: "tag_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "tag_id at most 50  characters",
    },
  },
};

module.exports = {
  createBookTagsValidationSchema,
  putBookTagsValidationSchema,
};
