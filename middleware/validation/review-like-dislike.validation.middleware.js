const createReviewReplyLikeDislikeValidationSchema = {
  is_like: {
    notEmpty: {
      errorMessage: "is_like cannot be empty",
    },
    isBoolean: {
      errorMessage: "is_like must be a boolean (true or false / 1 or 0)",
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
  review_id: {
    notEmpty: {
      errorMessage: "review_id cannot be empty",
    },
    isString: {
      errorMessage: "review_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "review_id at most 50  characters",
    },
  },
};

const putReviewReplyLikeDislikeValidationSchema = {
  is_like: {
    notEmpty: {
      errorMessage: "is_like cannot be empty",
    },
    isBoolean: {
      errorMessage: "is_like must be a boolean (true or false / 1 or 0)",
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
  review_id: {
    notEmpty: {
      errorMessage: "review_id cannot be empty",
    },
    isString: {
      errorMessage: "review_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "review_id at most 50  characters",
    },
  },
};

module.exports = {
  createReviewReplyLikeDislikeValidationSchema,
  putReviewReplyLikeDislikeValidationSchema,
};
