const createPublisherSosmedValidationSchema = {
  username: {
    notEmpty: {
      errorMessage: "username cannot be empty",
    },
    isString: {
      errorMessage: "username must be a string",
    },
    isLength: {
      options: { min: 5, max: 50 },
      errorMessage:
        "username must be at least 5 characters and at most 50 characters",
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
  sosial_media_id: {
    notEmpty: {
      errorMessage: "sosial_media_id cannot be empty",
    },
    isString: {
      errorMessage: "sosial_media_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "sosial_media_id at most 50  characters",
    },
  },
};

const putPublisherSosmedValidationSchema = {
  username: {
    notEmpty: {
      errorMessage: "username cannot be empty",
    },
    isString: {
      errorMessage: "username must be a string",
    },
    isLength: {
      options: { min: 5, max: 50 },
      errorMessage:
        "username must be at least 5 characters and at most 50 characters",
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
  sosial_media_id: {
    notEmpty: {
      errorMessage: "sosial_media_id cannot be empty",
    },
    isString: {
      errorMessage: "sosial_media_id must be a string",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "sosial_media_id at most 50  characters",
    },
  },
};

module.exports = {
  createPublisherSosmedValidationSchema,
  putPublisherSosmedValidationSchema,
};
