let d = new Date();
let time = d.toLocaleTimeString();

function updateDate() {
  console.log(time);   
}

setInterval(updateDate, 1000);
