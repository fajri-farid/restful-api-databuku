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
      "Roles",
      [
        {
          id: "bi964sqjxk0ug6zbzy1r9zx5",
          name: "Indonesian Rupiah",
          code: "IDR",
          symbol: "Rp",
        },
        {
          id: "d4p77ftwmc1d0vuhwsqi14wm",
          name: "South Korean Won",
          code: "KRW",
          symbol: "₩",
        },
        {
          id: "gbqqkxyfthu0vczqzo9ff22s",
          name: "Euro",
          code: "EUR",
          symbol: "€",
        },
        {
          id: "jfy7xaley830enybvrggpz6j",
          name: "Japanese Yen",
          code: "JPY",
          symbol: "¥",
        },
        {
          id: "kfgrjshbczslz2bamxiz8avq",
          name: "United States Dollar",
          code: "USD",
          symbol: "$",
        },
        {
          id: "kq2g3xq8bke0kehz32enmsfr",
          name: "Indian Rupee",
          code: "INR",
          symbol: "₹",
        },
        {
          id: "rdz17lmkt4m04iidv8sjpcy2",
          name: "Thai Baht",
          code: "THB",
          symbol: "฿",
        },
        {
          id: "u2ypgtbw67u4jcv537176xnd",
          name: "Chinese Yuan",
          code: "CNY",
          symbol: "¥",
        },
        {
          id: "yme0no34r4dacjtqeu5dwga8",
          name: "Malaysian Ringgit",
          code: "MYR",
          symbol: "RM",
        },
        {
          id: "zpzu13krwtqegja63fr5mvub",
          name: "Singapore Dollar",
          code: "SGD",
          symbol: "S$",
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

    return queryInterface.bulkDelete("Roles", null, {});
  },
};
