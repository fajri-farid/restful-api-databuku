const createSocialMediaValidationSchema = {
  name: {
    notEmpty: {
      errorMessage: "social-media cannot be empty",
    },
    isString: {
      errorMessage: "social-media must be a string",
    },
    isLength: {
      options: { min: 1, max: 50 },
      errorMessage:
        "social-media must be at least 1 characters and at most 50 characters",
    },
  },
};

const putSocialMediaValidationSchema = {
  name: {
    notEmpty: {
      errorMessage: "social-media cannot be empty",
    },
    isString: {
      errorMessage: "social-media must be a string",
    },
    isLength: {
      options: { min: 1, max: 50 },
      errorMessage:
        "social-media must be at least 5 characters and at most 32 characters",
    },
  },
};

module.exports = {
  createSocialMediaValidationSchema,
  putSocialMediaValidationSchema,
};
