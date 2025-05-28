# Cucumber Mathematics

Automated tests using Node.js and Cucumber.js for BDD (Behavior-Driven Development) scenarios related to basic mathematical operations with vegetables.

## Project Structure

```
cucumber-mathematics/
├── features/                     # Directory for Cucumber features and scenarios
│   ├── step_definitions/         # Test step implementations
│   │   └── vegetable_steps.js    # Step definitions for vegetables
│   ├── support/                  # Support files for Cucumber
│   │   ├── world.js              # Test context configuration
│   │   └── hooks.js              # Before/after scenario hooks
│   └── cucumber_mathematics.feature  # Gherkin feature file
├── src/                          # Application source code
│   ├── models/                   # Data models
│   │   ├── Vegetable.js          # Vegetable class
│   │   └── Salad.js              # Salad class
│   ├── pages/                    # Page objects (POM)
│   │   └── VegetablePage.js      # Page that encapsulates vegetable operations
│   └── services/                 # Services for business logic
│       └── KitchenService.js     # Service to manage vegetables and create salads
├── .gitignore                    # Git exclusion file
├── cucumber.js                   # Cucumber configuration
├── package.json                  # Dependencies and scripts definition
└── README.md                     # Project documentation
```

## Prerequisites

- Node.js (version 14 or higher)
- NPM (version 6 or higher)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/aeferrandiz/node-cucumber.git
   cd node-cucumber
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

To run the tests use:

```bash
npm test
```

To generate a report in JSON format:

```bash
npm run test:report
```

## Implemented Scenarios

1. **Let's eat cucumbers!** - Tests the functionality of consuming cucumbers.
2. **Let's eat carrots!** - Tests what happens when we try to consume more carrots than we have.
3. **Let's make a salad!** - Tests the creation of a salad with cucumbers and carrots.

## Notes and Assumptions

- It is assumed that vegetables cannot have negative quantities.
- When we try to consume more vegetables than available, the quantity is set to 0 and a message is generated.
- A modular and extensible architecture was chosen, thinking about future system expansions.

## Possible Future Improvements

- Implement more complete data validation.
- Add more types of vegetables and recipes.
- Integrate with a database for persistence.
- Add a real user interface.
- Implement additional unit tests.

## Design Patterns Used

### Page Object Model (POM)
The Page Object Model pattern is implemented through the `VegetablePage` class, which:
- Encapsulates all interactions with the underlying business logic
- Provides a clean, reusable API for test scenarios
- Separates test logic from implementation details
- Makes tests more maintainable and readable

### Service Layer Pattern
The `KitchenService` acts as a service layer that:
- Handles business logic for vegetable management
- Provides a clean interface between the domain models and the page objects
- Ensures separation of concerns

### Dependency Injection
The project uses dependency injection principles:
- `VegetablePage` depends on `KitchenService` abstraction
- `KitchenService` depends on `Vegetable` and `Salad` model abstractions
- This makes the code more testable and flexible

## Test Architecture

The test architecture follows these principles:

1. **Separation of Concerns**: Each layer has a specific responsibility
2. **Reusability**: Page objects can be reused across different test scenarios
3. **Maintainability**: Changes in business logic only require updates in service classes
4. **Readability**: Gherkin scenarios are easily understood by non-technical stakeholders