loadJSON(function(response) {
        var actual_JSON = JSON.parse(response);
        for (let i = 0; i < actual_JSON.jobs.length; i++) {
          var id = actual_JSON.jobs[i].id;
          var tblRow = 
          "<div class='row'><div class='col s12 l3 center-align'><span>" + actual_JSON.jobs[i].getIn + "</span><BR><span>" + actual_JSON.jobs[i].getOut + "</span></div><div class='col s12 l9'><span class='fontBold'>" + actual_JSON.jobs[i].business + "</span><BR><span class='fontLight grey-text'>" + actual_JSON.jobs[i].job + "</span><BR>" + actual_JSON.jobs[i].activies + "</div></div></div>"
          var output = document.getElementById("XPDATA");
          output.innerHTML = tblRow + output.innerHTML;
        }
      });

      function loadJSON(callback) {   

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', '/Advise/assets/js/rest.js', true); 
        xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
        };
        xobj.send(null);  
      }   