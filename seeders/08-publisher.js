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
      "Publishers",
      [
        {
          id: "y63o9n6ql6zgdydrhaotogw0",
          name: "Publisher",
          contact_id: "uxh9lvqzhvnfg43o44bx49bt",
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

    return queryInterface.bulkDelete("Publishers", null, {});
  },
};
