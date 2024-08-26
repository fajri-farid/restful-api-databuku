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
      "Review_Like_Dislikes",
      [
        {
          id: "bddv0j0643vhx212ya08llox",
          is_like: true,
          user_id: "h65jnrfnyquv74clfww3tpj1",
          review_id: "j22baqfqu14txg4g06iiu68a",
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

    return queryInterface.bulkDelete("Review_Like_Dislikes", null, {});
  },
};
