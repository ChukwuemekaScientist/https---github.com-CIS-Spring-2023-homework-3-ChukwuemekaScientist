// load the things we need
var express = require('express');
var app = express();
const bodyParser  = require('body-parser');

// required module to make calls to a REST API
const axios = require('axios');

app.use(bodyParser.urlencoded());

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    //res.render("pages/index.ejs", {});
    res.render("pages/users.ejs", {});
});


app.post('/process_form', function(req, res){
    var url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url)
        .then((response)=>{
            let myUserArray = response.data;

            // Get random users
            let item1 = Math.floor(Math.random() * 3);
            let item2 = Math.floor(Math.random() * 3)+3;
            let item3 = Math.floor(Math.random() * 6)+3;

            // get user details
            let user1 = myUserArray[item1];
            let name1 = user1.name;
            let city1 = user1.address.city;
            let companyname1 = user1.company.name

            let user2 = myUserArray[item2];
            let name2 = user2.name;
            let city2 = user2.address.city;
            let companyname2 = user2.company.name

            let user3 = myUserArray[item3];
            let name3 = user3.name;
            let city3 = user3.address.city;
            let companyname3 = user3.company.name
            
            //render user details
            res.render('pages/Homework3thanks.ejs', {
                name1: name1,
                city1: city1,
                companyname1: companyname1,

                name2: name2,
                city2: city2,
                companyname2: companyname2,

                name3: name3,
                city3: city3,
                companyname3: companyname3,

            });
        });
  
  })


app.listen(8080);
console.log('8080 is the magic port');
