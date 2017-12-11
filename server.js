// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route redirection
app.use(express.static(path.join(__dirname, '/app/public')));

// Path files
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// app.all('*', function(request, response) {
//     console.log(request._parsedUrl.path);
//     switch (request._parsedUrl.path) {
//     default:
//     }

// });


// // HTML Routes:
// app.get('/survey', function(request, response) {
//     response.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });

// app.get('/', function(request, response) {
//     response.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

// // app.get('*', function(request, response) {
// //     response.redirect('/');
// // });

// // API Routes:
// app.get('/api/friends', function(request, response) {
//     response.json(friends);
// });

// app.post('/api/friends', function(request, response) {
//     var newFriend = request.body;
//     var lowestScore = Number.MAX_VALUE;
//     var bestMatch;

//     // Unnecessary, but let's make sure we're storing it with integer scores.
//     for (let i in newFriend.scores) {
//         newFriend.scores[i] = Number(newFriend.scores[i]);
//     }

//     // Sum the difference in score values, keeping the friend with the closest match.
//     for (let i in friends) {
//         var currentScore = 0;
//         for (let j in friends[i].scores) {
//             currentScore += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
//         }
//         if (currentScore < lowestScore) {
//             lowestScore = currentScore;
//             bestMatch = friends[i];
//         }
//     }
//     // Return the best match
//     response.json(bestMatch);

//     // Store the submission
//     friends.push(newFriend);
// });


// //catchall route
// app.all('*', function(request, response) {
//     response.redirect('/');
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
