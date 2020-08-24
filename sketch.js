var bg,weather,a = 1,z=1,temp,c1,h1,input1,button,location,wind,humidity;
var div1,report,covidUrl;
var link = `https://coronavirus-19-api.herokuapp.com/countries/`
var nation = `india`
var api = `https://api.openweathermap.org/data/2.5/weather?q=`
var apiKey =`&appid=ca869b8d4f1a1a9fa1b200e5cef8d33a`;
var units = `&units=metric`
var r=255 , g = 50, b=0;

function preload(){
  s1 = loadImage("1.png")
}
function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  input1 = createInput(`Delhi`).attribute(`placeholder`,`Enter Your Location`);
  input1.position(width/4,height/1.1);
  input1.style(`font-size`,`17px`)

  input2 = createInput(`India`).attribute(`placeholder`,`Enter Your Location`);
  input2.position(width/2.64,-555);
  input2.style(`font-size`,`20px`)

  button = createButton(`🔎`)
  button.position(width/1.5,height/1.1)
  button.mousePressed(weatherAsk);
  button.style(`font-size`,`20px`)

  button1 = createButton(`Change Country`)
  button1.position(width/1.756,-555)
  button1.mousePressed(change);
  button1.style(`font-size`,`10px`)

  button2 = createButton(`🌏Search`)
  button2.position(width/1.756,-555)
  button2.mousePressed(doing);
  button2.style(`font-size`,`15px`)

  covidUrl = link+nation;
  loadJSON(covidUrl, gotCorona);


  }
  function weatherAsk(){
     city = input1.value();
    var url = api+city+apiKey+units;
    loadJSON(url, gotData);
    a = 3;
  }

  function gotData(data){
  weather = data
  }
  
  function gotCorona(info){
    report = info
  }
  function change(){
    input2.position(width/3,height/1.5);
    button2.position(width/1.35,height/1.5)
      button1.position(width/1.756,-555)


  }
  function doing(){
    nation = input2.value();
    covidUrl = link+nation;
  loadJSON(covidUrl, gotCorona);
  button2.position(width/1.756,-555)
  input2.position(width/2.59,-5555);
  button1.position(width/1.4,height/1.5)
    
  }

  function draw(){
    background(s1)
       if(keyDown("Space")){
        weatherAsk();
      }

         if(weather){
          z = 2;
          humidity = weather.main.humidity;
          temp = weather.main.temp;

          windSpeed = weather.wind.speed;
          windD = weather.wind.deg;

          name = weather.name;

          lat = weather.coord.lat;
          lon = weather.coord.lon;

          feel = weather.main.feels_like;
          preassure = weather.main.pressure;
          sea = weather.main.feels_like;
          country = weather.sys.country;
          a=2;
          console.log(nation)

        }
        if(report){
          country1 = report.country;
cases = report.cases;
recover = report.recovered;
deaths = report.deaths;
active = report.active;
critical = report.critical;
totalT = report.totalTests;
        }

drawSprites();
    if(a===1){
     let need = input1.value();
      textStyle("bold")
        fill("Red")
        textSize(20)
      text(need,width/2,height/6)
    }
   
      if(a===2){
        background("#37383b")
  button1.position(width/1.4,height/1.5)

        if(temp<20){
         //  background(c1)
        }
          if(temp>20){
           //  background(h1)
          }
          fill("#663399")
            rectMode(CENTER);
            rect(width/2,height/9,width,height/4)
            noStroke();
            rectMode(CORNER)
            fill("#ff3b5c")
            rect(width/28,height/4,width/2.1,height/2.6)
            fill("#ffffff")
            rect(width/28,height/1.55,width/1.08,height/3)
            fill("#0D98Ba")
            rect(width/1.9,height/4,width/2.3,height/5.1)
            fill("#ffb825")
            rect(width/1.9,height/2.2,width/2.3,height/5.5)
            fill("white");
            textSize(20)
            text("Country: "+country,width/10,height/2.6);
            text("Humidity: "+humidity+"%",width/10,height/2.3)
            text("Pressure: "+preassure+" Pa",width/10,height/2.08)
            text("Feels Like: "+Math.round(feel)+"°C",width/10,height/1.9)
//             //covid 19
            fill("black")
            text("Total Cases",width/2.32,height/1.36)
            text("Recoverd: "+recover,width/1.8,height/1.11);
            text("Deaths:    "+deaths,width/10,height/1.11)
            text("Critical:     "+critical,width/10,height/1.06)
            text("Active:    "+active,width/1.8,height/1.17)
             text("Country:  "+country1,width/10,height/1.17)
            text("Tests:    "+totalT,width/1.8,height/1.06)


            fill("#ffffff")
            textSize(30);
            textStyle("bold")
            text("Coordinates",width/1.8,height/3.2)
            text("Wind",width/1.5,height/1.99)
            text("Highlights",width/7.5,height/3.2)
            fill("#ff3b5c")
            text("Covid-19",width/2.5,height/1.43)
            fill("#ffffff")
            

            textStyle(NORMAL)
            textSize(20)
            text("°C",width/1.8,height/6.2)
            text("Latitude:",width/1.8,height/2.7)
            text("Longitude:",width/1.8,height/2.35)
            text("Speed:",width/1.8,height/1.8)
            text("Direction:",width/1.8,height/1.65)
            fill("black")
            
            fill("#ffffff")
            
            textSize(30)
            textStyle("normal")
            text(name,width/2.5,height/11)
            textSize(50);
            textFont(`Agency FB`)
            text(Math.round(temp),width/2.35,height/5.5)
            stroke("#ff3b5c");
            noFill();
            text(Math.round(cases),width/2.8,height/1.24)
            fill("#ffffff")
noStroke();
            textSize(20)
            text(Math.round(lat),width/1.15,height/2.7)
            text(Math.round(lon),width/1.15,height/2.35)
            text(Math.round(windSpeed)+` Kph`,width/1.2,height/1.8)
            text(Math.round(windD)+`°`,width/1.2,height/1.65)
        
            input1.position(width/1.65,height/30)
input1.style(`font-size`,`10px`)

            button.position(width/1.28,height/30)
            button.style(`font-size`,`11px`)
     }
       if(a ===3){
      input1.position(width / 4, -555);
        button.position(width / 1.5, -555)
        textStyle("bold");
        if (r > 150) {
            r = r - 1
        }
        if (r < 200) {
            //               r=201
            g = g + 1
        }
        if (g > 255) {
            b = b + 1

        }
        if (b > 300) {
            b = 301

            g = g - 2
        }
        if (g < -2) {
            r++
            g++
        }

        //           console.log("r: "+r)
        //            console.log("g: "+g)
        //            console.log("b: "+b)
        rectMode(CENTER)
        fill(rgb(r, g, b, 80))
        rect(window.innerWidth / 2, window.innerHeight / 2, width, height)

        textSize(40);
        fill("fffffff")
        text(`loading...`, width / 2.1, height / 1.5)

        textSize(20);
   }
}
 
