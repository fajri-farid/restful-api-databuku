"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "h65jnrfnyquv74clfww3tpj1",
          first_name: "john",
          last_name: "doe",
          username: "john_doe",
          email: "johndoe@gmail.com",
          bio: null,
          birth_date: null,
          address: null,
          profile_pic: null,
          password: "password123",
          role_id: "cybyqqzobgiueym5vmbng2w2",
        },
        // klw mau tambah seeder dengan cuid2 sebagai id
        // {
        //   id: createId(),
        // },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete("Users", null, {});
  },
};
