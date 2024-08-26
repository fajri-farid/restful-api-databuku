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
      "Review_Replies",
      [
        {
          id: "ztntxdzejg8oz88az21syliq",
          comment:
            "sepertinya nggk bagus amat juga dehh, soalnya ada beberapa bab yang menurut saya agak kurang untuk dibaca orang awam",
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

    return queryInterface.bulkDelete("Review_Replies", null, {});
  },
};
