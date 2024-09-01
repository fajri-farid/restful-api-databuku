const createBookValidationSchema = {
  title: {
    notEmpty: {
      errorMessage: "title cannot be empty",
    },
    isString: {
      errorMessage: "title must be a string",
    },
    isLength: {
      options: { max: 255 },
      errorMessage: "title must be at most 255 characters",
    },
  },
  releaseYear: {
    notEmpty: {
      errorMessage: "release year cannot be empty",
    },
    isInt: {
      errorMessage: "release year must be a integer",
    },
    isLength: {
      options: { max: 4 },
      errorMessage: "release year must be at most 4 characters",
    },
  },
  synopsis: {
    optional: true,
    isString: {
      errorMessage: "synopsis must be a string",
    },
    isLength: {
      options: { max: 2000 },
      errorMessage: "synopsis at most 2000 characters",
    },
  },
  publisher_id: {
    notEmpty: {
      errorMessage: "publisher_id cannot be empty",
    },
    isString: {
      errorMessage: "publisher_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "publisher_id at most 50  characters",
    },
  },
  price_id: {
    notEmpty: {
      errorMessage: "price_id cannot be empty",
    },
    isString: {
      errorMessage: "price_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "price_id at most 50  characters",
    },
  },
};

const putBookValidationSchema = {
  title: {
    notEmpty: {
      errorMessage: "title cannot be empty",
    },
    isString: {
      errorMessage: "title must be a string",
    },
    isLength: {
      options: { max: 255 },
      errorMessage: "title must be at most 255 characters",
    },
  },
  releaseYear: {
    notEmpty: {
      errorMessage: "release year cannot be empty",
    },
    isInt: {
      errorMessage: "release year must be a integer",
    },
    isLength: {
      options: { max: 4 },
      errorMessage: "release year must be at most 4 characters",
    },
  },
  synopsis: {
    optional: true,
    isString: {
      errorMessage: "synopsis must be a string",
    },
    isLength: {
      options: { max: 2000 },
      errorMessage: "synopsis at most 2000 characters",
    },
  },
  publisher_id: {
    notEmpty: {
      errorMessage: "publisher_id cannot be empty",
    },
    isString: {
      errorMessage: "publisher_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "publisher_id at most 50  characters",
    },
  },
  price_id: {
    notEmpty: {
      errorMessage: "price_id cannot be empty",
    },
    isString: {
      errorMessage: "price_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "price_id at most 50  characters",
    },
  },
};

module.exports = {
  createBookValidationSchema,
  putBookValidationSchema,
};
