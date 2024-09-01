const { options } = require("../../routes/role.routes");

const createUserValidationSchema = {
  first_name: {
    notEmpty: {
      errorMessage: "first name cannot be empty",
    },
    isString: {
      errorMessage: "first name must be a string",
    },
    isLength: {
      options: { min: 5, max: 50 },
      errorMessage:
        "first name must be at least 5 characters and at most 50 characters",
    },
  },
  last_name: {
    notEmpty: {
      errorMessage: "last name cannot be empty",
    },
    isString: {
      errorMessage: "last name must be a string",
    },
    isLength: {
      options: { min: 5, max: 50 },
      errorMessage:
        "last name must be at least 5 characters and at most 50 characters",
    },
  },
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
  email: {
    notEmpty: {
      errorMessage: "email cannot be empty",
    },
    isEmail: {
      errorMessage: "Invalid email format",
    },
    isLength: {
      options: { max: 255 },
      errorMessage: "Email must be at most 255 characters long",
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
  profile_pic: {
    optional: true,
    isURL: {
      errorMessage: "Invalid URL format for profile picture",
    },
    isLength: {
      options: { max: 2048 },
      errorMessage: "profile pic at most 2048  characters",
    },
  },
  password: {
    optional: true,
    isString: {
      errorMessage: "Invalid URL format for profile picture",
    },
    isLength: {
      options: { max: 2048 },
      errorMessage: "profile pic at most 2048  characters",
    },
  },
  role_id: {
    optional: true,
    isString: {
      errorMessage: "Invalid URL format for profile picture",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "profile pic at most 50  characters",
    },
  },
};

const putUserValidationSchema = {
  first_name: {
    notEmpty: {
      errorMessage: "first name cannot be empty",
    },
    isString: {
      errorMessage: "first name must be a string",
    },
    isLength: {
      options: { min: 5, max: 50 },
      errorMessage:
        "first name must be at least 5 characters and at most 50 characters",
    },
  },
  last_name: {
    notEmpty: {
      errorMessage: "last name cannot be empty",
    },
    isString: {
      errorMessage: "last name must be a string",
    },
    isLength: {
      options: { min: 5, max: 50 },
      errorMessage:
        "last name must be at least 5 characters and at most 50 characters",
    },
  },
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
  email: {
    notEmpty: {
      errorMessage: "email cannot be empty",
    },
    isEmail: {
      errorMessage: "Invalid email format",
    },
    isLength: {
      options: { max: 255 },
      errorMessage: "Email must be at most 255 characters long",
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
  profile_pic: {
    optional: true,
    isURL: {
      errorMessage: "Invalid URL format for profile picture",
    },
    isLength: {
      options: { max: 2048 },
      errorMessage: "profile pic at most 2048  characters",
    },
  },
  password: {
    optional: true,
    isString: {
      errorMessage: "Invalid URL format for profile picture",
    },
    isLength: {
      options: { max: 2048 },
      errorMessage: "profile pic at most 2048  characters",
    },
  },
  role_id: {
    optional: true,
    isString: {
      errorMessage: "Invalid URL format for profile picture",
    },
    isLength: {
      options: { max: 50 },
      errorMessage: "profile pic at most 50  characters",
    },
  },
};

module.exports = {
  createUserValidationSchema,
  putUserValidationSchema,
};
