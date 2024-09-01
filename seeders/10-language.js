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
      "Languages",
      [
        {
          id: "el4iyf4qnqam4afmi9i43p5y",
          name: "Amerika Serikat",
          symbol: "US",
        },
        {
          id: "fuzrd1civ55654lji0cu5hyv",
          name: "Jepang",
          symbol: "JP",
        },
        {
          id: "o2x1bsoyju22uhsdtpf2lf34",
          name: "Indonesia",
          symbol: "ID",
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

    return queryInterface.bulkDelete("Languages", null, {});
  },
};
