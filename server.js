// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Internal Dependencies
// =============================================================
var friends = require("./app/data/friends.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// HTML Routes:
app.get('/survey', function(request, response) {
    response.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, "/app/public/home.html"));
});

// app.get('*', function(request, response) {
//     response.redirect('/');
// });

// API Routes:
app.get('/api/friends', function(request, response) {
    response.json( /*TODO JSON of all friends from ./app/data/friends.js */ );
});

app.post('/api/friends', function(request, response) {
    var newFriend = request.body;
    console.log(newFriend);
    console.log("Old Friends =");
    console.log(friends);
    //TODO compare newFriend's scores to others
    //TODO Show modal of closest match
});


//catchall route

app.all('*', function(request, response) {
    response.redirect('/');
});

// Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(request, response) {
//   var chosen = request.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return response.json(characters[i]);
//       }
//     }
//     return response.json(false);
//   }
//   return response.json(characters);
// });

// Create New Characters - takes in JSON input
// app.post("/api/new", function(request, response) {
//   // request.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newcharacter = request.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   response.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);

});

console.log("Old Friends =");
console.log(friends);
