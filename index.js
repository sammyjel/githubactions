#!/usr/bin/env node

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(randomQuote);
