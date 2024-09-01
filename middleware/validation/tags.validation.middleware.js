const createTagsValidationSchema = {
  name: {
    notEmpty: {
      errorMessage: "name cannot be empty",
    },
    isString: {
      errorMessage: "name must be a string",
    },
    isLength: {
      options: { max: 255 },
      errorMessage: "name must be at most 255 characters",
    },
  },
};

const putTagsValidationSchema = {
  name: {
    notEmpty: {
      errorMessage: "name cannot be empty",
    },
    isString: {
      errorMessage: "name must be a string",
    },
    isLength: {
      options: { max: 255 },
      errorMessage: "name must be at most 255 characters",
    },
  },
};

module.exports = {
  createTagsValidationSchema,
  putTagsValidationSchema,
};
