const createAuthorValidationSchema = {
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
  bio: {
    notEmpty: {
      errorMessage: "bio cannot be empty",
    },
    isString: {
      errorMessage: "bio must be a string",
    },
    isLength: {
      options: { max: 2000 },
      errorMessage: "bio at most 2000 characters",
    },
  },
  birth_date: {
    optional: true,
    isDate: {
      errorMessage: "birth date must be a valid date (YYYY-MM-DD)",
    },
  },
  address: {
    optional: true,
    isString: {
      errorMessage: "address must be a string",
    },
    isLength: {
      options: { max: 255 },
      errorMessage: "address at most 255 characters",
    },
  },
  contact_id: {
    notEmpty: {
      errorMessage: "contact_id cannot be empty",
    },
    isString: {
      errorMessage: "contact_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "contact_id at most 50 characters",
    },
  },
};

const putAuthorValidationSchema = {
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
  bio: {
    notEmpty: {
      errorMessage: "bio cannot be empty",
    },
    isString: {
      errorMessage: "bio must be a string",
    },
    isLength: {
      options: { max: 2000 },
      errorMessage: "bio at most 2000 characters",
    },
  },
  birth_date: {
    optional: true,
    isDate: {
      errorMessage: "birth date must be a valid date (YYYY-MM-DD)",
    },
  },
  address: {
    optional: true,
    isString: {
      errorMessage: "address must be a string",
    },
    isLength: {
      options: { max: 255 },
      errorMessage: "address at most 255 characters",
    },
  },
  contact_id: {
    notEmpty: {
      errorMessage: "contact_id cannot be empty",
    },
    isString: {
      errorMessage: "contact_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "contact_id at most 50 characters",
    },
  },
};

module.exports = {
  createAuthorValidationSchema,
  putAuthorValidationSchema,
};
