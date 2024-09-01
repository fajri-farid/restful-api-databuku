const createPriceValidationSchema = {
  price: {
    notEmpty: {
      errorMessage: "price cannot be empty",
    },
    isInt: {
      errorMessage: "price must be an integer",
    },
  },
  currency_id: {
    notEmpty: {
      errorMessage: "price cannot be empty",
    },
    isString: {
      errorMessage: "currency_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "currency_id at most 50  characters",
    },
  },
};

const putPriceValidationSchema = {
  price: {
    notEmpty: {
      errorMessage: "price cannot be empty",
    },
    isInt: {
      errorMessage: "price must be an integer",
    },
  },
  currency_id: {
    notEmpty: {
      errorMessage: "price cannot be empty",
    },
    isString: {
      errorMessage: "currency_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "currency_id at most 50  characters",
    },
  },
};

module.exports = {
  createPriceValidationSchema,
  putPriceValidationSchema,
};
