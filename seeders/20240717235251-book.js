"use strict";

const { createId } = require("@paralleldrive/cuid2"); // Impor createId dari cuid2

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
          id: "fmlbo03f17nqey92z17e4yvw",
          title: "Cara ngoding",
          releaseYear: 2023,
          synopsis: "Sinopsis buku ini adalah kita belajar coding",
          authorId: "cpd50nf3q1zyw3am1tdld2tf",
        },
        {
          id: "gsmldjgo254hoxb261aqcftg",
          title: "Introduction to Medicine",
          releaseYear: 2022,
          synopsis: "A comprehensive guide to medicine and healthcare.",
          authorId: "d95hu0n8b6cqyu2zsgmkgcdu",
        },
        {
          id: "nzlmlt9y08ooxq1sc3odt3w3",
          title: "The Art of Writing",
          releaseYear: 2024,
          synopsis: "Explore the creative process of writing.",
          authorId: "iclt0jmzpgywyn8s8lj9n5mr",
        },
        {
          id: "o50f864w8gyvm8syynkcxkhd",
          title: "Engineering Principles",
          releaseYear: 2021,
          synopsis: "Fundamentals of engineering concepts and applications.",
          authorId: "kwqb43z48k2fqxsnj1rigk7u",
        },
        {
          id: "q7m4jm5ed2qlfmkkbw4pqg6i",
          title: "Scientific Discoveries",
          releaseYear: 2023,
          synopsis: "Key scientific breakthroughs that shaped our world.",
          authorId: "m6giwidpai2o1tsmc6ven6gy",
        },
        {
          id: "qe0dfhgn4p3efog2f9uvgykk",
          title: "Music Theory Essentials",
          releaseYear: 2020,
          synopsis: "Essential knowledge for understanding music theory.",
          authorId: "rc2hkhefs13cpq3aakaj9i5c",
        },
        {
          id: "s5szp01x63uqhok02wm4cqm4",
          title: "Effective Teaching Methods",
          releaseYear: 2022,
          synopsis: "Proven methods for effective teaching in classrooms.",
          authorId: "u5oxnbc08pr3n1g4f8gwosrv",
        },
        {
          id: "sk3kty3jt7fhjhw0utf5w6t6",
          title: "Business Strategies",
          releaseYear: 2023,
          synopsis:
            "Strategies for building and growing successful businesses.",
          authorId: "uevfji5tirygbktfj2bmvfua",
        },
        {
          id: "vyk8ip8w4l7fufm5icadpt9e",
          title: "Journalism Today",
          releaseYear: 2021,
          synopsis: "Insights into the world of modern journalism.",
          authorId: "wy2is9gviwfy66uh17f87xx2",
        },
        {
          id: "xq5d2a9hkychyebigvry91ad",
          title: "Artificial Intelligence in Practice",
          releaseYear: 2024,
          synopsis: "Applications and impact of AI in various industries.",
          authorId: "x792hugkv4simrt2f83e9ztp",
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

    return queryInterface.bulkDelete("books", null, {});
  },
};
