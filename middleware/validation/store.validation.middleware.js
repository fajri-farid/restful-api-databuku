const createStoreValidationSchema = {
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

const putStoreValidationSchema = {
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
  createStoreValidationSchema,
  putStoreValidationSchema,
};
