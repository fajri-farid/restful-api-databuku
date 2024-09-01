const createCurrencyValidationSchema = {
  name: {
    notEmpty: {
      errorMessage: "name cannot be empty",
    },
    isString: {
      errorMessage: "name must be a string",
    },
    isLength: {
      options: { min: 1, max: 50 },
      errorMessage:
        "name must be at least 1 characters and at most 50 characters",
    },
  },
  code: {
    notEmpty: {
      errorMessage: "code cannot be empty",
    },
    isString: {
      errorMessage: "code must be a string",
    },
    isLength: {
      options: { min: 1, max: 5 },
      errorMessage:
        "code must be at least 1 characters and at most 5 characters",
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
      options: { min: 1, max: 10 },
      errorMessage:
        "symbol must be at least 1 characters and at most 10 characters",
    },
  },
};

const putCurrencyValidationSchema = {
  name: {
    notEmpty: {
      errorMessage: "name cannot be empty",
    },
    isString: {
      errorMessage: "name must be a string",
    },
    isLength: {
      options: { min: 1, max: 50 },
      errorMessage:
        "name must be at least 1 characters and at most 50 characters",
    },
  },
  code: {
    notEmpty: {
      errorMessage: "code cannot be empty",
    },
    isString: {
      errorMessage: "code must be a string",
    },
    isLength: {
      options: { min: 1, max: 5 },
      errorMessage:
        "code must be at least 1 characters and at most 5 characters",
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
      options: { min: 1, max: 10 },
      errorMessage:
        "symbol must be at least 1 characters and at most 10 characters",
    },
  },
};

module.exports = {
  createCurrencyValidationSchema,
  putCurrencyValidationSchema,
};
