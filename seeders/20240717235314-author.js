// "use strict";
// const { createId } = require("@paralleldrive/cuid2"); // Impor createId dari cuid2

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//      */

//     return queryInterface.bulkInsert(
//       "authors",
//       [
//         {
//           id: "cpd50nf3q1zyw3am1tdld2tf",
//           name: "fajri farid",
//           bio: "webdev",
//           birthdate: "2000-01-01",
//         },
//         {
//           id: "d95hu0n8b6cqyu2zsgmkgcdu",
//           name: "fajri",
//           bio: "doctor",
//           birthdate: "2000-02-01",
//         },
//         {
//           id: "iclt0jmzpgywyn8s8lj9n5mr",
//           name: "John Doe",
//           bio: "writer",
//           birthdate: "1985-05-15",
//         },
//         {
//           id: "kwqb43z48k2fqxsnj1rigk7u",
//           name: "Jane Smith",
//           bio: "artist",
//           birthdate: "1990-08-20",
//         },
//         {
//           id: "m6giwidpai2o1tsmc6ven6gy",
//           name: "Michael Johnson",
//           bio: "engineer",
//           birthdate: "1980-03-10",
//         },
//         {
//           id: "rc2hkhefs13cpq3aakaj9i5c",
//           name: "Emily Brown",
//           bio: "scientist",
//           birthdate: "1975-11-30",
//         },
//         {
//           id: "u5oxnbc08pr3n1g4f8gwosrv",
//           name: "David Wilson",
//           bio: "musician",
//           birthdate: "1988-07-25",
//         },
//         {
//           id: "uevfji5tirygbktfj2bmvfua",
//           name: "Sophia Clark",
//           bio: "teacher",
//           birthdate: "1995-04-05",
//         },
//         {
//           id: "wy2is9gviwfy66uh17f87xx2",
//           name: "Ethan White",
//           bio: "entrepreneur",
//           birthdate: "1982-09-12",
//         },
//         {
//           id: "x792hugkv4simrt2f83e9ztp",
//           name: "Olivia Green",
//           bio: "journalist",
//           birthdate: "1998-06-18",
//         },

//         // klw mau tambah seeder dengan cuid2 sebagai id
//         // {
//         //   id: createId(),
//         // },
//       ],
//       {}
//     );
//   },

//   async down(queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//     return queryInterface.bulkDelete("authors", null, {});
//   },
// };
