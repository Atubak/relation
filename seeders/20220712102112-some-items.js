"use strict";

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
    await queryInterface.bulkInsert("todoItems", [
      {
        task: "bananas",
        deadline: "tomorrow",
        createdAt: new Date(),
        updatedAt: new Date(),
        listId: 1,
      },
      {
        task: "apples",
        deadline: "tomorrow",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "book tickets",
        deadline: "august",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "bango",
        deadline: "every day",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
