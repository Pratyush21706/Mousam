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
  sunny = loadImage("sunny.png")
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
        background(sunny)
//   button1.position(width/1.4,height/1.5)

        if(temp<20){
         //  background(c1)
        }
          if(temp>20){
           //  background(h1)
          }           
            fill("#ffffff")
            
             textSize(100)
             textStyle("normal")
                       text("°",width/1.3,height/3.3)
             textSize(10)
 text("lat: "+Math.round(lat)+"  lon: "+Math.round(lon),width/12,height/2.15)
//             text(,width/12,height/2.05)
                       textSize(20)

             text(name+", "+country,width/11,height/11)
            textSize(150);
            textFont(`Mangal`)
////          for(var i =0; i++ ; i=temp){
//              console.log(i)
//          }
            text(Math.round(temp),width/5,height/2.8)

             textSize(20)
          textStyle("bold")
            
                       text(humidity+"%",width/7,height/1.4)

             text(Math.round(windSpeed)+`K/PH`,width/1.9,height/1.26)
             text(Math.round(windD)+`°`,width/1.9,height/1.085)
                       text(+preassure+"Pa",width/10,height/1.08)

        
//             input1.position(width/1.65,height/30)
// input1.style(`font-size`,`10px`)

//             button.position(width/1.28,height/30)
//             button.style(`font-size`,`11px`)
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
 
