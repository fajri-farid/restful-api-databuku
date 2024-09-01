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
      "Books",
      [
        {
          id: "b2ztrq8h5e8w6p3wf24maxac",
          title: "Judul Buku id 411",
          releaseYear: 2023,
          synopsis: "Sinopsis buku ini adalah...",
          publisher_id: "y63o9n6ql6zgdydrhaotogw0",
          price_id: "j5cbhismgqdn3dtw89c228lg",
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

    return queryInterface.bulkDelete("Books", null, {});
  },
};
