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
      "Stores",
      [
        {
          id: "bcag1x4nkvlnlxo1bf46wyow",
          name: "Periplus",
        },
        {
          id: "gidyif3rtuerd8r4vl9140kw",
          name: "Gramedia",
        },
        {
          id: "l12f0k4fsfggaof9ljg12hcp",
          name: "Shopee",
        },
        {
          id: "p1kg3anskmxamakapp9x27dq",
          name: "Tokopedia",
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

    return queryInterface.bulkDelete("Stores", null, {});
  },
};
