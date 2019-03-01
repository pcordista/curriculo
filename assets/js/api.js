// loadJSON(function(response) {
//   var actual_JSON = JSON.parse(response);
//   for (let i = 0; i < actual_JSON.jobs.length; i++) {
//     var tblRow = 
//     "<div class='row'><div class='col s12 l3 center-align'><span>" + actual_JSON.jobs[i].getIn + "</span><BR><span>" + actual_JSON.jobs[i].getOut + "</span></div><div class='col s12 l9'><span class='fontBold'>" + actual_JSON.jobs[i].business + "</span><BR><span class='fontLight grey-text'>" + actual_JSON.jobs[i].job + "</span><BR>" + actual_JSON.jobs[i].activies + "</div></div></div>"
//     var output = document.getElementById("XPDATA");
//     output.innerHTML = tblRow + output.innerHTML;
//   }

// });

// function loadJSON(callback) {   

//   var xobj = new XMLHttpRequest();
//   xobj.overrideMimeType("application/json");
//   xobj.open('GET', '/Advise/assets/js/rest.js', true); 
//   xobj.onreadystatechange = function () {
//     if (xobj.readyState == 4 && xobj.status == "200") {
//       callback(xobj.responseText);
//     }
//   };
//   xobj.send(null);  
// }   



const urlXP = "https://demo3225912.mockable.io/";
  const urlHAB = "http://demo3225912.mockable.io/pc";
  
  function httpGetAsync(theUrl, callback)
  {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
  }
  

  
  httpGetAsync(urlXP,(resp)=>{
    var actual_JSON = JSON.parse(resp);
    for (let i = 0; i < actual_JSON.jobs.length; i++) {
    var tblRow = 
    "<div class='row'><div class='col l3 center-align'><span>" + actual_JSON.jobs[i].getIn + "</span><BR><span>" + actual_JSON.jobs[i].getOut + "</span></div><div class='col l9' style='margin-bottom: 1rem'><span class='fontBold'>" + actual_JSON.jobs[i].business + "</span><BR><span class='fontLight grey-text'>" + actual_JSON.jobs[i].job + "</span><BR>" + actual_JSON.jobs[i].activies + "</div></div></div>"
    var output = document.getElementById("XPDATA");
    output.innerHTML = tblRow + output.innerHTML;
  }
  });
  
  httpGetAsync(urlHAB,(resp)=>{
    var obj = JSON.parse(resp);
    var result = "";
    obj.hab.forEach(x => {
        result = result + "<div class='row'><div class='col l6 habcontrol'>" + x.info + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.diccao + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.html + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.calculos + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.css + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.mercado + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.js + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.proativo + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.jquery + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.equipe + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.seo + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.aprendizado + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.git + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.conhecimento + "</div>";
        result = result + "<div class='col l6 habcontrol'>" + x.materialize + "</div></div><BR><BR><BR>";
      });
    document.getElementById("HABDATA").innerHTML = result;
  });