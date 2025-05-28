const { setWorldConstructor } = require('@cucumber/cucumber');
const VegetablePage = require('../../src/pages/vegetablePage');

/**
 * Class to share information between step definitions
 */
class CustomWorld {
  constructor() {
    // Page instance
    this.vegetablePage = new VegetablePage();
  }
}

setWorldConstructor(CustomWorld);