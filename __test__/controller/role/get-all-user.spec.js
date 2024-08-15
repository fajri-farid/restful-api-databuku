const {
  getAllRoleController,
} = require("../../../controllers/role.controllers");
const roleService = require("../../../services/role.service");

// Membuat objek mock untuk request dan response
const mockRequest = {};
const mockResponse = {
  status: jest.fn().mockReturnThis(),
  send: jest.fn(),
};

// Mock method roleService.getAll
roleService.getAll = jest.fn();

describe("get all roles", () => {
  it("should get all roles successfully", async () => {
    // Mock nilai yang dikembalikan oleh roleService.getAll
    const mockRoles = [
      {
        id: "cybyqqzobgiueym5vmbng2w2",
        role_name: "guest",
        createdAt: "2024-08-15T07:35:23.000Z",
        updatedAt: "2024-08-15T07:35:23.000Z",
      },
      {
        id: "hzxord9rxewld4ys3oihbnm8",
        role_name: "admin",
        createdAt: "2024-08-15T07:35:23.000Z",
        updatedAt: "2024-08-15T07:35:23.000Z",
      },
    ];
    roleService.getAll.mockResolvedValue(mockRoles);

    // Memanggil fungsi controller
    await getAllRoleController(mockRequest, mockResponse);

    // Memastikan bahwa roleService.getAll dipanggil
    expect(roleService.getAll).toHaveBeenCalled();

    // Memastikan bahwa status tidak dipanggil (default adalah 200)
    expect(mockResponse.status).not.toHaveBeenCalled();

    // Memastikan bahwa send dipanggil dengan response yang benar
    expect(mockResponse.send).toHaveBeenCalledWith({
      status: "success",
      message: "Role berhasil diambil!",
      data: {
        role: mockRoles,
      },
    });

    // Memastikan bahwa send dipanggil tepat satu kali
    expect(mockResponse.send).toHaveBeenCalledTimes(1);
  });

  it("should handle errors", async () => {
    // Mock error yang dilempar oleh roleService.getAll
    const mockError = new Error("Database error");
    roleService.getAll.mockRejectedValue(mockError);

    // Memanggil fungsi controller
    await getAllRoleController(mockRequest, mockResponse);

    // Memastikan bahwa status dipanggil dengan 500
    expect(mockResponse.status).toHaveBeenCalledWith(500);

    // Memastikan bahwa send dipanggil dengan pesan error yang benar
    expect(mockResponse.send).toHaveBeenCalledWith({
      status: "error",
      message: mockError.message,
    });

    // Memastikan bahwa send dipanggil tepat satu kali
    expect(mockResponse.send).toHaveBeenCalledTimes(1);
  });
});
