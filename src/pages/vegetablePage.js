const KitchenService = require('../services/kitchenService');

/**
 * Page Object class that encapsulates interactions with the KitchenService
 * Follows the Page Object Model pattern to separate interaction logic
 * from test logic
 */
class VegetablePage {
  constructor() {
    this.kitchenService = new KitchenService();
  }

  /**
   * Sets a quantity of vegetables
   * @param {number} quantity - Quantity to set
   * @param {string} vegetableType - Vegetable type
   * @returns {VegetablePage} - Instance for method chaining
   */
  setVegetables(quantity, vegetableType) {
    this.kitchenService.addVegetables(vegetableType, quantity);
    return this;
  }

  /**
   * Consumes (eats) vegetables
   * @param {number} quantity - Quantity to consume
   * @param {string} vegetableType - Vegetable type
   * @returns {VegetablePage} - Instance for method chaining
   */
  eatVegetables(quantity, vegetableType) {
    this.kitchenService.eatVegetables(vegetableType, quantity);
    return this;
  }

  /**
   * Creates a salad with specified ingredients
   * @param {Object} ingredients - Ingredients for the salad
   * @returns {VegetablePage} - Instance for method chaining
   */
  makeSalad(ingredients) {
    this.kitchenService.makeSalad(ingredients);
    return this;
  }

  /**
   * Gets the quantity of a vegetable type
   * @param {string} vegetableType - Vegetable type
   * @returns {number} Vegetable quantity
   */
  getVegetableCount(vegetableType) {
    return this.kitchenService.getVegetableQuantity(vegetableType);
  }

  /**
   * Gets the message associated with a vegetable type
   * @param {string} vegetableType - Vegetable type
   * @returns {string} Message
   */
  getVegetableMessage(vegetableType) {
    return this.kitchenService.getVegetableMessage(vegetableType);
  }

  /**
   * Gets the number of salads
   * @returns {number} Number of salads
   */
  getSaladCount() {
    return this.kitchenService.getSaladCount();
  }

  /**
   * Checks if a specific message exists for a vegetable
   * @param {string} message - Message to verify
   * @param {string} vegetableType - Vegetable type
   * @returns {boolean} - True if the message matches
   */
  hasMessage(message, vegetableType) {
    return this.getVegetableMessage(vegetableType) === message;
  }
}

module.exports = VegetablePage;