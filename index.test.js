const { execSync } = require('child_process');

describe('motivate CLI', () => {
  it('should print a quote to the console', () => {
    let output;
    try {
      output = execSync('./index.js').toString().trim();
    } catch (error) {
      // If there's an error, fail the test
      throw new Error(`Execution failed: ${error.message}`);
    }
    expect(output).toBeTruthy(); // Ensure output is not empty
  });

  it('should print a quote from the quotes array', () => {
    const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "Strive not to be a success, but rather to be of value. - Albert Einstein",
      "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    ];
    
    let output;
    try {
      output = execSync('./index.js').toString().trim();
    } catch (error) {
      // If there's an error, fail the test
      throw new Error(`Execution failed: ${error.message}`);
    }
    
    expect(quotes).toContain(output); // Check if output is one of the quotes
  });
});

