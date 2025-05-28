/**
 * Class representing a generic vegetable
 * Follows the SRP (Single Responsibility Principle)
 */
class Vegetable {
 
     /**
     * @param {string} type
     * @param {number} quantity
     */

    constructor(type, quantity = 0) {
      this.type = type;
      this.quantity = quantity;
      this.message = '';
    }
  
    /**
     * @param {number} amount - Amount to add
     * @returns {number} The new quantity
     */
    add(amount) {
      if (amount < 0) {
        throw new Error('No se puede agregar una cantidad negativa');
      }
      this.quantity += amount;
      return this.quantity;
    }
  
    /**
     * Consumes (reduces) the quantity of vegetables
     * @param {number} amount - Amount to consume
     * @returns {number} The new quantity
     */
    consume(amount) {
      if (amount < 0) {
        throw new Error('No se puede consumir una cantidad negativa');
      }
      
      if (amount > this.quantity) {
        this.message = `You ate more ${this.type}s than you had!`;
        this.quantity = 0;
      } else {
        this.quantity -= amount;
      }
      
      return this.quantity;
    }
  
    /**
     * Gets the current quantity of vegetables
     * @returns {number} Current quantity
     */
    getQuantity() {
      return this.quantity;
    }
  
    /**
     * Gets the type of vegetable
     * @returns {string} Type of vegetable
     */
    getType() {
      return this.type;
    }
  
    /**
     * Gets the message associated with the last operation
     * @returns {string} Message
     */
    getMessage() {
      return this.message;
    }
  }
  
  module.exports = Vegetable;