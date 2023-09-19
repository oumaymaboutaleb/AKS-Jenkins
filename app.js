const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const https = require("https");
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");
})


app.post("/", function (req, res) {
const query =  req.body.city;
const apikeyy = "351619a15aa27ab41a99f4b398d92ad5";
const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikeyy+"&units=metric"; 
 https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            //to get a specific value from the json 
            const weatherData=JSON.parse(data);
            const temp = weatherData.main.temp;
            const icon = weatherData.weather[0].icon;
            const imgurl= "https://openweathermap.org/img/wn/"+icon+"@2x.png";

            const description = weatherData.weather[0].description;
            console.log(temp);
            console.log(description);
  // sending multiple lines in html 
        res.write("<P>the weather in "+query+ " is currently "+ description +"</P>");    
        res.write("<h1>the temperature is " + temp+ " celsus</h1>");
        res.write("<img src =" + imgurl+ ">");
        res.send();

           

           
        })
    })
})



app.listen(3000, function () {
    console.log("server is starting");
});

