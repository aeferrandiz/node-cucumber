/**
 * Class representing a salad
 */
class Salad {
    /**
     * Constructor for the Salad class
     * @param {Object} ingredients - Object with salad ingredients
     */
    constructor(ingredients = {}) {
      this.ingredients = ingredients;
    }
  
    /**
     * Gets the salad ingredients
     * @returns {Object} Salad ingredients
     */
    getIngredients() {
      return this.ingredients;
    }
  
    /**
     * Adds ingredients to the salad
     * @param {string} name - Ingredient name
     * @param {number} quantity - Ingredient quantity
     */
    addIngredient(name, quantity) {
      if (!this.ingredients[name]) {
        this.ingredients[name] = 0;
      }
      this.ingredients[name] += quantity;
    }
  
    /**
     * Gets the quantity of a specific ingredient
     * @param {string} name - Ingredient name
     * @returns {number} Ingredient quantity
     */
    getIngredientQuantity(name) {
      return this.ingredients[name] || 0;
    }
  
    /**
     * Method to represent the salad as a string
     * @returns {string} 
     */
    toString() {
      const ingredientsList = Object.entries(this.ingredients)
        .map(([name, quantity]) => `${quantity} ${name}`)
        .join(', ');
      return `Salad with ${ingredientsList}`;
    }
  }
  
  module.exports = Salad;