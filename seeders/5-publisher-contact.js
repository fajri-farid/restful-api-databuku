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
      "publisherContacts",
      [
        {
          id: "uxh9lvqzhvnfg43o44bx49bt",
          phone_number: "+6281998232532",
          email: "author@gmail.com",
          address: "Jakarta",
          createdAt: "2024-08-16T02:16:23.000Z",
          updatedAt: "2024-08-16T02:16:23.000Z",
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

    return queryInterface.bulkDelete("publisherContacts", null, {});
  },
};
