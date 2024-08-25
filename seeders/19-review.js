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
      "Author_Books",
      [
        {
          id: "j22baqfqu14txg4g06iiu68a",
          comment: "keren banget",
          rating: 5,
          user_id: "h65jnrfnyquv74clfww3tpj1",
          book_id: "b2ztrq8h5e8w6p3wf24maxac",
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

    return queryInterface.bulkDelete("Author_Books", null, {});
  },
};
