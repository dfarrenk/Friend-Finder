// 4. Your `apiRoutes.js` file should contain two routes:
//   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Dependencies
// =============================================================
var friends = require("../data/friends.js");

// API Routes:
module.exports = function(app) {
  app.get('/api/friends', function(request, response) {
    response.json(friends);
  });

  app.post('/api/friends', function(request, response) {
    var newFriend = request.body;
    var lowestScore = Number.MAX_VALUE;
    var bestMatch;

    // Unnecessary, but let's make sure we're storing it with integer scores.
    for (let i in newFriend.scores) {
      newFriend.scores[i] = Number(newFriend.scores[i]);
    }

    // Sum the difference in score values, keeping the friend with the closest match.
    for (let i in friends) {
      var currentScore = 0;
      for (let j in friends[i].scores) {
        currentScore += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
      }
      if (currentScore < lowestScore) {
        lowestScore = currentScore;
        bestMatch = friends[i];
      }
    }
    // Return the best match
    response.json(bestMatch);

    // Store the submission
    friends.push(newFriend);
  });
};
