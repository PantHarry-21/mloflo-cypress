// Import custom commands
import './commands';

// Example of global configuration
Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing tests on uncaught exceptions
  return false;
});
