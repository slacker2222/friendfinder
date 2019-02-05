// var path = require('path');

// =============================================================
//ROUTING
// =============================================================

const path = require("path");
module.exports = (() => {
    const htmlRoutes = require("express").Router();

    // MAIN PAGE
    htmlRoutes.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    // SURVEY PAGE
    htmlRoutes.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "/../", "public/survey.html"));
    });

    return htmlRoutes;
})();

// 	app.get('/', function(req, res){
// 		res.sendFile(path.join(__dirname, "..", "public", "home.html"));
// 	});

// 	app.get('/survey', function(req, res){
// 		res.sendFile(path.join(__dirname, '../public/survey.html'));
// 	});
// };