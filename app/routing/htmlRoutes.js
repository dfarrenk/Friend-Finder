// 3. Your `htmlRoutes.js` file should include two routes:
//   * A GET Route to `/survey` which should display the survey page.
//   * A default, catch-all route that leads to `home.html` which displays the home page.

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Get all characters
app.get("/all", function(req, res) {
  res.json(characters);
});
