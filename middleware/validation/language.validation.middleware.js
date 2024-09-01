const createLanguageValidationSchema = {
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
  symbol: {
    notEmpty: {
      errorMessage: "symbol cannot be empty",
    },
    isString: {
      errorMessage: "symbol must be a string",
    },
    isLength: {
      options: { max: 5 },
      errorMessage: "symbol must be at most 5 characters",
    },
  },
};

const putLanguageValidationSchema = {
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
  symbol: {
    notEmpty: {
      errorMessage: "symbol cannot be empty",
    },
    isString: {
      errorMessage: "symbol must be a string",
    },
    isLength: {
      options: { max: 5 },
      errorMessage: "symbol must be at most 5 characters",
    },
  },
};

module.exports = {
  createLanguageValidationSchema,
  putLanguageValidationSchema,
};
