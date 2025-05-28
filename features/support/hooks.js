const { Before, After } = require('@cucumber/cucumber');

/**
 * Hook that executes before each scenario
 */
Before(function() {
  console.log('Starting scenario...');
});

/**
 * Hook that executes after each scenario
 */
After(function() {
  console.log('Scenario completed!');
});