var z = setTimeout(() =>{
  var h4A = document.getElementById("h4A");
  var h4B = document.getElementById("h4B");
  var h4C = document.getElementById("h4C");

  var a = document.getElementById("a");
  var b = document.getElementById("b");
  var c = document.getElementById("c");

  h4A.addEventListener("click", function(){
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    location.href = "index.html";
  });
  h4B.addEventListener("click", function(){
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    location.href = "page.html";
  });
  h4C.addEventListener("click", function(){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
  });
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
}, 1);

// // Current year
// var cuDate = new Date();
// var cuYear = cuDate.getFullYear();
// console.log("Current Year:", cuYear);

// // Current time
// var justNowStart = new Date().getTime();

// // Date between New Year and Skitrip
// var date1 = new Date("Jan 1, " + (cuYear + 1) + " 00:00:00").getTime();
// var date2 = new Date("Jan 28, " + (cuYear + 1) + " 04:59:59").getTime();
// var timeBetweenJanuary = date2 - date1;

// if (timeBetweenJanuary >= (date2 - justNowStart)){
//   console.log("Inbetween Jan 1 (00:00:00) and Jan 28 (04:59:59)");
//   localStorage.date = new Date("Jan 28, " + (cuYear) + " 05:00:00").getTime();
// }
// else{
//   console.log("Not inbetween Jan 1 (00:00:00) and Jan 28 (04:59:59)");
//   localStorage.date = new Date("Jan 28, " + (cuYear + 1) + " 05:00:00").getTime();
// }

localStorage.date = new Date("Jan 28, 2023 05:00:00").getTime();


setInterval( function(){ 
  var month = new Date().getMonth();
  var date = new Date().getDate();
  var hour = new Date().getHours();
  if (month == 1 && date == 28 && hour >= 5){
    console.log("worked");
  }
} , 1000);

setInterval( function(){ 
  var year = new Date().getFullYear();
  var month = new Date().getMonth();
  var date = new Date().getDate();
  var hour = new Date().getHours();
  var minute = new Date().getMinutes();
  // month == 1 && date == 28 && hour >= 5 && hour <= 6
  if (hour >= 12 && hour <= 23){
    var status = document.getElementById("status");
    status.textContent = /*"Hopfully left 05:00 from Gothenburg"*/"Gustav = sämst";
    status.style.color = "#48fb47";
  }
  else{
    var status = document.getElementById("status");
    status.textContent = /*"Hopfully left 05:00 from Gothenburg"*/"Gustav = bäst";
    status.style.color = "#48fb47";
  }
  // var hour = new Date().getHours();
  // if (hour >= 9 && hour < 18) {
  //     do_this(); 
  // }
} , 1000);

function countDown(){
    // Get time
    var justNow = new Date().getTime();
    var timeBetween = localStorage.date - justNow;
  
    // Define day, hour, minute, second
    var days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);
  
    document.getElementById("clack").textContent = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    if (timeBetween < 0) {
      clearInterval(x);
      document.getElementById("clack").textContent = "Empty";
    }
}

var x = setInterval(() => {
  countDown();
}, 1000);

// var f = setInterval(() =>{
//   var justNowStart2 = new Date().getTime();
//   var date5 = new Date("Dec 26, " + (cuYear) + " 21:25:00").getTime();
//   var date6 = new Date("Dec 26, " + (cuYear) + " 21:30:00").getTime();
//   var timeBetweenJanuary2 = date6 - date5;

//   var y = setTimeout(() => {
//     if (timeBetweenJanuary2 <= (date6 - justNowStart2)){
//       console.log("Not inbetween 19.40 - 00.00");
//       var status = document.getElementById("status");
//       status.textContent = "";
//     }
//     else{
//       console.log("Inbetween 19.40 - 00.00");
      // var status = document.getElementById("status");
      // status.textContent = /*"Hopfully left 05:00 from Gothenburg"*/"Gustav = sämst";
      // status.style.color = "#48fb47";
//       clearInterval(f);
//     }
// }, 1000);
// }, 1000);

// var f = setInterval(() =>{
//   var y = setTimeout(() => {
// }, 1000);
// }, 1000);
