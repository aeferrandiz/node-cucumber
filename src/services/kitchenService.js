const Vegetable = require('../models/Vegetable');
const Salad = require('../models/Salad');

/**
 * Kitchen service for managing vegetables and preparing salads
 * Follows the OCP (Open/Closed Principle) by being extensible
 * and the DIP (Dependency Inversion Principle) by depending on abstractions
 */
class KitchenService {
  constructor() {
    this.vegetables = {};
    this.salads = [];
  }

  /**
   * Initializes or finds a vegetable in the inventory
   * @param {string} type - Vegetable type
   * @param {number} initialQuantity - Optional initial quantity
   * @returns {Vegetable} Vegetable instance
   */
  getOrCreateVegetable(type, initialQuantity = 0) {
    if (!this.vegetables[type]) {
      this.vegetables[type] = new Vegetable(type, initialQuantity);
    }
    return this.vegetables[type];
  }

  /**
   * Adds vegetables to the inventory
   * @param {string} type - Vegetable type
   * @param {number} quantity - Quantity to add
   * @returns {number} New quantity
   */
  addVegetables(type, quantity) {
    const vegetable = this.getOrCreateVegetable(type);
    return vegetable.add(quantity);
  }

  /**
   * Consumes (eats) vegetables from the inventory
   * @param {string} type - Vegetable type
   * @param {number} quantity - Quantity to consume
   * @returns {number} Remaining quantity
   */
  eatVegetables(type, quantity) {
    const vegetable = this.getOrCreateVegetable(type);
    return vegetable.consume(quantity);
  }

  /**
   * Prepares a salad with the specified ingredients
   * @param {Object} ingredients - Ingredients for the salad
   * @returns {Salad} The created salad
   */
  makeSalad(ingredients) {
    // Verify and consume ingredients
    for (const [type, quantity] of Object.entries(ingredients)) {
      const vegetable = this.getOrCreateVegetable(type);
      if (vegetable.getQuantity() < quantity) {
        throw new Error(`Not enough ${type} for the salad`);
      }
      vegetable.consume(quantity);
    }

    // Create and store the salad
    const salad = new Salad(ingredients);
    this.salads.push(salad);
    return salad;
  }

  /**
   * Gets the quantity of a vegetable type
   * @param {string} type - Vegetable type
   * @returns {number} Vegetable quantity
   */
  getVegetableQuantity(type) {
    return this.vegetables[type] ? this.vegetables[type].getQuantity() : 0;
  }

  /**
   * Gets the message associated with a vegetable type
   * @param {string} type - Vegetable type
   * @returns {string} Message
   */
  getVegetableMessage(type) {
    return this.vegetables[type] ? this.vegetables[type].getMessage() : '';
  }

  /**
   * Gets the number of salads
   * @returns {number} Number of salads
   */
  getSaladCount() {
    return this.salads.length;
  }
}

module.exports = KitchenService;