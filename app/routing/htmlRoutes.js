// Dependencies
// =============================================================
var path = require("path");

// 3. Your `htmlRoutes.js` file should include two routes:
//   * A GET Route to `/survey` which should display the survey page.
//   * A default, catch-all route that leads to `home.html` which displays the home page.

// HTML Routes:
module.exports = function(app) {
  app.get('/survey', function(request, response) {
    response.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Catch-all
  app.all('*', function(request, response) {
    response.redirect('/');
  });
};
