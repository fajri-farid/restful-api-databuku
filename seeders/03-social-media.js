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
      "Social_Media",
      [
        {
          id: "atj6ixmf2vnddgphx4s2xen3",
          name: "Youtube",
          createdAt: "2024-08-15T09:59:02.000Z",
          updatedAt: "2024-08-15T09:59:02.000Z",
        },
        {
          id: "becjd1v6er72wnkssywyuqq8",
          name: "instagram",
          createdAt: "2024-08-15T09:19:40.000Z",
          updatedAt: "2024-08-15T09:19:40.000Z",
        },
        {
          id: "ffh3dzsa0u9pfdd9xoye8h50",
          name: "X",
          createdAt: "2024-08-15T09:57:45.000Z",
          updatedAt: "2024-08-15T09:57:45.000Z",
        },
        {
          id: "l6n4csrcwhs1rlldavgo6w1y",
          name: "Facebook",
          createdAt: "2024-08-15T09:57:38.000Z",
          updatedAt: "2024-08-15T09:57:38.000Z",
        },
        {
          id: "t17tumwau44khhs80kek9ogg",
          name: "Tiktok",
          createdAt: "2024-08-15T09:57:51.000Z",
          updatedAt: "2024-08-15T09:57:51.000Z",
        },
        {
          id: "xjjhmg2oncuxqjvb5j7vir1c",
          name: "Linkedin",
          createdAt: "2024-08-15T09:59:22.000Z",
          updatedAt: "2024-08-15T09:59:22.000Z",
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

    return queryInterface.bulkDelete("Social_Media", null, {});
  },
};
