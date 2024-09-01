const { validationResult } = require("express-validator");

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Mengelompokkan error berdasarkan field (param atau path)
    const groupedErrors = errors.array().reduce((acc, error) => {
      const field = error.param || error.path || "unknown"; // Gunakan 'param' atau 'path' sebagai key
      if (!acc[field]) {
        acc[field] = []; // Buat array baru jika key belum ada
      }
      acc[field].push({
        type: error.type || "field", // Menyimpan tipe error, default 'field'
        msg: error.msg, // Pesan error yang diterima
        path: field, // Path atau param dari field yang error
        location: error.location, // Lokasi error di body, params, query, etc.
      });
      return acc;
    }, {});

    // Mengirim response dengan groupedErrors dalam JSON
    return res.status(400).json({
      status: "error",
      message: "Validation failed",
      errors: groupedErrors, // Menyimpan semua error yang sudah dikelompokkan
    });
  }
  next(); // Lanjutkan ke middleware berikutnya jika tidak ada error
};

module.exports = handleValidationErrors;
