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
      "books",
      [
        {
          title: "Cara ngoding",
          releaseYear: 2023,
          synopsis: "Sinopsis buku ini adalah kita belajar coding",
          authorId: 1,
        },
        {
          title: "Introduction to Medicine",
          releaseYear: 2022,
          synopsis: "A comprehensive guide to medicine and healthcare.",
          authorId: 2,
        },
        {
          title: "The Art of Writing",
          releaseYear: 2024,
          synopsis: "Explore the creative process of writing.",
          authorId: 3,
        },
        {
          title: "Engineering Principles",
          releaseYear: 2021,
          synopsis: "Fundamentals of engineering concepts and applications.",
          authorId: 4,
        },
        {
          title: "Scientific Discoveries",
          releaseYear: 2023,
          synopsis: "Key scientific breakthroughs that shaped our world.",
          authorId: 5,
        },
        {
          title: "Music Theory Essentials",
          releaseYear: 2020,
          synopsis: "Essential knowledge for understanding music theory.",
          authorId: 6,
        },
        {
          title: "Effective Teaching Methods",
          releaseYear: 2022,
          synopsis: "Proven methods for effective teaching in classrooms.",
          authorId: 7,
        },
        {
          title: "Business Strategies",
          releaseYear: 2023,
          synopsis:
            "Strategies for building and growing successful businesses.",
          authorId: 8,
        },
        {
          title: "Journalism Today",
          releaseYear: 2021,
          synopsis: "Insights into the world of modern journalism.",
          authorId: 9,
        },
        {
          title: "Artificial Intelligence in Practice",
          releaseYear: 2024,
          synopsis: "Applications and impact of AI in various industries.",
          authorId: 10,
        },
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

    return queryInterface.bulkDelete("books", null, {});
  },
};
