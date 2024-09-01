const createPublisherValidationSchema = {
  name: {
    notEmpty: {
      errorMessage: "name cannot be empty",
    },
    isString: {
      errorMessage: "name must be a string",
    },
    isLength: {
      options: { min: 5, max: 32 },
      errorMessage:
        "name must be at least 5 characters and at most 32 characters",
    },
  },
  bio: {
    optional: true,
    isString: {
      errorMessage: "bio must be a string",
    },
    isLength: {
      options: { max: 2000 },
      errorMessage: "bio at most 2000 characters",
    },
  },
  contact_id: {
    notEmpty: {
      errorMessage: "name cannot be empty",
    },
    isString: {
      errorMessage: "contact_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "contact_id must be at most 50  characters",
    },
  },
};

const putPublisherValidationSchema = {
  name: {
    notEmpty: {
      errorMessage: "name cannot be empty",
    },
    isString: {
      errorMessage: "name must be a string",
    },
    isLength: {
      options: { min: 5, max: 32 },
      errorMessage:
        "name must be at least 5 characters and at most 32 characters",
    },
  },
  bio: {
    optional: true,
    isString: {
      errorMessage: "bio must be a string",
    },
    isLength: {
      options: { max: 2000 },
      errorMessage: "bio at most 2000 characters",
    },
  },
  contact_id: {
    notEmpty: {
      errorMessage: "name cannot be empty",
    },
    isString: {
      errorMessage: "contact_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "contact_id must be at most 50  characters",
    },
  },
};

module.exports = {
  createPublisherValidationSchema,
  putPublisherValidationSchema,
};
