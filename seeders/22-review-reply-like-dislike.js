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
      "Review_Reply_Like_Dislikes",
      [
        {
          id: "t2105ay8orcow2r3ehud02sk",
          is_like: true,
          user_id: "h65jnrfnyquv74clfww3tpj1",
          review_reply_id: "ztntxdzejg8oz88az21syliq",
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

    return queryInterface.bulkDelete("Review_Reply_Like_Dislikes", null, {});
  },
};
