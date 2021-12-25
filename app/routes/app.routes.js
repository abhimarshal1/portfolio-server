module.exports = (app) => {
    const App = require("../controllers/app.controller.js");
  
    app.get("/portfolio", App.findAll);
  
    app.get("/portfolio/:name", App.findOne);
  };