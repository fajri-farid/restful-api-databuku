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
      "Tags",
      [
        {
          id: "aor2cf13vtq2glsz56b0hz8s",
          name: "Education",
        },
        {
          id: "egam3hkb2txgymt6guxb6ft0",
          name: "Romance",
        },
        {
          id: "kholn5kzomavuk4wpjdl7ay7",
          name: "Biography",
        },
        {
          id: "noj5eij2e076ndyiz2684yen",
          name: "Mystery",
        },
        {
          id: "unm3xnnn4myykku73t3e4ner",
          name: "History",
        },
        {
          id: "unn67tpytl4ujelxddkgtayz",
          name: "Finance",
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

    return queryInterface.bulkDelete("Tags", null, {});
  },
};
