const Sentiment = require('sentiment');
const sentiment = new Sentiment();

async function chatWithAI(userInput) {
  const result = sentiment.analyze(userInput);
  // Placeholder for AI response generation
  let response = "AI response based on user input.";
  if (result.score < 0) response = "I'm sensing some frustration. How can I help?";
  // Task automation example: schedule a reminder
  if (userInput.includes("remind me")) {
    // Integrate with calendar API here
    response += " Reminder set!";
  }
  return response;
}

module.exports = { chatWithAI };
