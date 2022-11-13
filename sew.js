
          clickon = function() {
              alert("Hello!");
          }

savetime = function() {
    contents = document.createTextNode(Date())
     t = document.querySelector("#timetable")
     trow = document.createElement("tr")
     td = document.createElement("td")
     td.appendChild(contents)
     trow.appendChild(td)
     t.appendChild(trow)
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "© 1996-2022 Web Dev Rosslyn Academy. All Rights Reserved") {
    x.innerHTML = "© 2023 AP Comp Sci Rosslyn Academy. All Rights Reserved.";
  }
}