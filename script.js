document.querySelector("#fetchDataButton").addEventListener('click', fetchAPI, animateAPI, backgroundColour);

function fetchAPI(){
    fetch('https://picsum.photos/400/300?random=${Math.random()}')
    .then(response => response.json())
    .then(data => {
      document.getElementById("dataContainer").textContent = JSON.stringify(data);
    })
    .catch(error => console.error("Error fetching data:", error));
}

function animateAPI() {
    var img = document.getElementById("dataContainer"); 
    var position = 0;
    var interval = setInterval(frame, 5);
  
    function frame() {
      if (position == 350) { 
        clearInterval(interval); 
      } else {
        position++; 
        img.style.left = position + 'px'; 
      }
    }
  }

function backgroundColour(){
    document.getElementsByClassName('.data-box').style.backgroundColor='blue';
}