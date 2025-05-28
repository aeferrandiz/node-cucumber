const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');


// Initialize the number of cucumbers
Given('I have {int} cucumbers', function(count) {
  this.vegetablePage.setVegetables(count, 'cucumber');
});

// Initialize the number of carrots
Given('I have {int} carrots', function(count) {
  this.vegetablePage.setVegetables(count, 'carrot');
});

// Consume cucumbers
When('I eat {int} cucumbers', function(count) {
  this.vegetablePage.eatVegetables(count, 'cucumber');
});

// Consume carrots
When('I eat {int} carrots', function(count) {
  this.vegetablePage.eatVegetables(count, 'carrot');
});

// Make a salad
When('I make a salad with {int} cucumbers and {int} carrots', function(cucumberCount, carrotCount) {
  const ingredients = {
    cucumber: cucumberCount,
    carrot: carrotCount
  };
  this.vegetablePage.makeSalad(ingredients);
});

// Number of cucumbers
Then('I have {int} cucumbers', function(expectedCount) {
  const actualCount = this.vegetablePage.getVegetableCount('cucumber');
  expect(actualCount).to.equal(expectedCount, 
    `Expected to have ${expectedCount} cucumbers, but got ${actualCount}`);
});

// Number of carrots
Then('I have {int} carrots', function(expectedCount) {
  const actualCount = this.vegetablePage.getVegetableCount('carrot');
  expect(actualCount).to.equal(expectedCount, 
    `Expected to have ${expectedCount} carrots, but got ${actualCount}`);
});

// Number of salads
Then('I have {int} salads', function(expectedCount) {
  const actualCount = this.vegetablePage.getSaladCount();
  expect(actualCount).to.equal(expectedCount, 
    `Expected to have ${expectedCount} salads, but got ${actualCount}`);
});

// Verification of messages
Then('I should see the message {string}', function(expectedMessage) {
  // Determine which type of vegetable is involved in the current scenario
  let vegetableType;
  
  // Check types of vegetables for the message
  const cucumberMessage = this.vegetablePage.getVegetableMessage('cucumber');
  const carrotMessage = this.vegetablePage.getVegetableMessage('carrot');
  
  if (cucumberMessage === expectedMessage) {
    vegetableType = 'cucumber';
  } else if (carrotMessage === expectedMessage) {
    vegetableType = 'carrot';
  } else {
    throw new Error(`Message "${expectedMessage}" not found for any vegetable`);
  }
  
  expect(this.vegetablePage.hasMessage(expectedMessage, vegetableType)).to.be.true;
});