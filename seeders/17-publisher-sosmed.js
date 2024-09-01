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
      "Publisher_Sosmeds",
      [
        {
          id: "s931mttwsnznh4gb9a2p0hsp",
          username: "publiser_satu",
          publisher_id: "y63o9n6ql6zgdydrhaotogw0",
          sosial_media_id: "becjd1v6er72wnkssywyuqq8",
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

    return queryInterface.bulkDelete("Publisher_Sosmeds", null, {});
  },
};
