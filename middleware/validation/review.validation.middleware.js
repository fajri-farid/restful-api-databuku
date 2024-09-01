const createReviewValidationSchema = {
  comment: {
    notEmpty: {
      errorMessage: "comment cannot be empty",
    },
    isString: {
      errorMessage: "comment must be a string",
    },
    isLength: {
      options: { max: 1000 },
      errorMessage: "comment must be at most 1000 characters",
    },
  },
  rating: {
    notEmpty: {
      errorMessage: "rating cannot be empty",
    },
    isInt: {
      options: { min: 1, max: 5 },
      errorMessage: "rating must be an integer between 1 and 5",
    },
  },
  user_id: {
    notEmpty: {
      errorMessage: "user_id cannot be empty",
    },
    isString: {
      errorMessage: "user_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "user_id at most 50  characters",
    },
  },
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
};

const putReviewValidationSchema = {
  comment: {
    notEmpty: {
      errorMessage: "comment cannot be empty",
    },
    isString: {
      errorMessage: "comment must be a string",
    },
    isLength: {
      options: { max: 1000 },
      errorMessage: "comment must be at most 1000 characters",
    },
  },
  rating: {
    notEmpty: {
      errorMessage: "rating cannot be empty",
    },
    isInt: {
      options: { min: 1, max: 5 },
      errorMessage: "rating must be an integer between 1 and 5",
    },
  },
  user_id: {
    notEmpty: {
      errorMessage: "user_id cannot be empty",
    },
    isString: {
      errorMessage: "user_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "user_id at most 50  characters",
    },
  },
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
};

module.exports = {
  createReviewValidationSchema,
  putReviewValidationSchema,
};
