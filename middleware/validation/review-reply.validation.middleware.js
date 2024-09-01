const createReviewReplyValidationSchema = {
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

const putReviewReplyValidationSchema = {
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
  createReviewReplyValidationSchema,
  putReviewReplyValidationSchema,
};
