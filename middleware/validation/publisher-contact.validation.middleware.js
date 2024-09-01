const createPublisherContactValidationSchema = {
  phone_number: {
    optional: true,
    isString: {
      errorMessage: "phone number must be a string",
    },
    isLength: {
      options: { min: 10, max: 15 },
      errorMessage:
        "phone number must be at least 5 characters and at most 32 characters",
    },
  },
  email: {
    optional: true,
    isString: {
      errorMessage: "email must be a string",
    },
    isLength: {
      options: { max: 256 },
      errorMessage: "email must be at most 254 characters long",
    },
  },
  address: {
    optional: true,
    isString: {
      errorMessage: "address must be a string",
    },
    isLength: {
      options: { min: 10, max: 256 },
      errorMessage: "address must be at most 254 characters long",
    },
  },
};

const putPublisherContactValidationSchema = {
  phone_number: {
    optional: true,
    isString: {
      errorMessage: "phone number must be a string",
    },
    isLength: {
      options: { min: 10, max: 15 },
      errorMessage:
        "phone number must be at least 5 characters and at most 32 characters",
    },
  },
  email: {
    optional: true,
    isEmail: {
      errorMessage: "Invalid email format",
    },
    isLength: {
      options: { max: 256 },
      errorMessage: "email must be at most 256 characters long",
    },
  },
  address: {
    optional: true,
    isEmail: {
      errorMessage: "Invalid email format",
    },
    isLength: {
      options: { min: 10, max: 256 },
      errorMessage: "address must be at most 256 characters long",
    },
  },
};

module.exports = {
  createPublisherContactValidationSchema,
  putPublisherContactValidationSchema,
};
