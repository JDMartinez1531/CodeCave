const router = require("express").Router();
const axios = require("axios")
require ("dotenv").config()


router.get("/search", (req, res) => {
	const queryTitle = req.query.title;
	const queryLocation = req.query.location;
	console.log(`title: ${queryTitle}, location: ${queryLocation}`);

	var resultsData = [];

	var config1 = {
		method: "get",
		url: `https://indeed-com.p.rapidapi.com/salary/insights?title=${queryTitle}&location=${queryLocation}`,
		headers: {
			"x-rapidapi-host": "indeed-com.p.rapidapi.com",
			"x-rapidapi-key": process.env.API_KEY,
		},
    };
    
    var config2 = {
		method: "get",
		url: `https://indeed-com.p.rapidapi.com/search/jobs?query=${queryTitle}&location=${queryLocation}`,
		headers: {
			"x-rapidapi-host": "indeed-com.p.rapidapi.com",
			"x-rapidapi-key": process.env.API_KEY,
		},
    };
    
	return axios(config1)
		.then(function (response) {
			const jobData = response.data.averageSalary.toFixed(2)
			resultsData.push(jobData);
		})
		.catch(function (error) {
			console.log(error);
		})
		
});

module.exports = router;

// https://cors-anywhere.herokuapp.com/