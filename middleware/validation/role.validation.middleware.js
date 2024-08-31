const createRoleValidationSchema = {
  role_name: {
    notEmpty: {
      errorMessage: "role_name cannot be empty",
    },
    isString: {
      errorMessage: "role_name must be a string",
    },
    isLength: {
      options: { min: 5, max: 32 },
      errorMessage:
        "role_name must be at least 5 characters and at most 32 characters",
    },
  },
};

const putRoleValidationSchema = {
  role_name: {
    notEmpty: {
      errorMessage: "role_name cannot be empty",
    },
    isString: {
      errorMessage: "role_name must be a string",
    },
    isLength: {
      options: { min: 5, max: 32 },
      errorMessage:
        "role_name must be at least 5 characters and at most 32 characters",
    },
  },
};

module.exports = {
  createRoleValidationSchema,
  putRoleValidationSchema,
};
