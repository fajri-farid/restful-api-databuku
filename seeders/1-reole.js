"use strict";

const { createId } = require("@paralleldrive/cuid2"); // Impor createId dari cuid2

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
      "Roles",
      [
        {
          id: "cybyqqzobgiueym5vmbng2w2",
          role_name: "guest",
        },
        {
          id: "hzxord9rxewld4ys3oihbnm8",
          role_name: "admin",
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

    return queryInterface.bulkDelete("Roles", null, {});
  },
};
