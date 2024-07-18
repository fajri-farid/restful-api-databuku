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
      "authors",
      [
        { name: "fajri farid", bio: "webdev", birthdate: "2000-01-01" },
        { name: "fajri", bio: "doctor", birthdate: "2000-02-01" },
        { name: "John Doe", bio: "writer", birthdate: "1985-05-15" },
        { name: "Jane Smith", bio: "artist", birthdate: "1990-08-20" },
        { name: "Michael Johnson", bio: "engineer", birthdate: "1980-03-10" },
        { name: "Emily Brown", bio: "scientist", birthdate: "1975-11-30" },
        { name: "David Wilson", bio: "musician", birthdate: "1988-07-25" },
        { name: "Sophia Clark", bio: "teacher", birthdate: "1995-04-05" },
        { name: "Ethan White", bio: "entrepreneur", birthdate: "1982-09-12" },
        { name: "Olivia Green", bio: "journalist", birthdate: "1998-06-18" },
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
    return queryInterface.bulkDelete("authors", null, {});
  },
};
