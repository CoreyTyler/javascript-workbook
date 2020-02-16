console.log("im here");

//function takes in the date and converts the the date to unix.

//write a function to take the unix and adds it to the last position of the url in the api to get
//the lunar information of that day bringing back the "phase" information specifically.

//write a function that takes the value associated to phase in the api's object and returns the picture
//and name assiciated with the value.

//display the picture and the name associated with the phase.

function getDate() {
  let userInput = document.getElementById("date").value;
  console.log(date);
  let dateObject = new Date(userInput);
  console.log(dateObject);
  let unix = dateObject.getTime() / 1000;
  console.log(unix);

  fetch("http://api.farmsense.net/v1/moonphases/?d=" + unix)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
      console.log(myJson[0]["Phase"]);
      console.log(myJson[0]["Illumination"]);
      let moon = myJson[0]["Phase"];
      let spanElement = document.getElementById("phase");
      spanElement.innerText = moon;
    });
}
