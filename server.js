const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})


app.get("/BMI", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/BMI", (req, res) => {
    console.log(req.body);
    let height = Number(req.body.height);
    let weight = Number(req.body.weight);

    let BMI = weight / (height * height);


    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BMI Calculator</title>
    
    </head>
    
    <style>
        .main-container{
            width: 40vw;
            margin: auto;
            background-color: black;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .form-input{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .form-input input, button{
            padding: 5px;
            margin: 5px 0px;
            width: 400px;
            outline: none;
            border: none;
            border-radius: 4px  ;
        }
    
    </style>
    
    <body>
        <div class="main-container">
            <h2>Calculate Your BMI</h2>
            <form action="/BMI" method="post" class="form-input">
                <input type="text" placeholder="Enter your height(in m)" name="height">
                <input type="text" placeholder="Enter your weight(in kg)" name="weight">
                <button type="submit" name="submit">Calculate BMI</button>
            </form>
        </div>
    
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <script>
            $(".main-container").text("Your BMI is: "+${BMI});
        </script>
    </body>
    </html>`)
})





app.listen(2000, () => {
    console.log("The server is started now!!");
})