
// Write your JavaScript code here!
window.addEventListener("load", function() {
  const form = document.querySelector("form");
  const faultyItems = document.querySelector("#faultyItems")
  let pilotName = document.querySelector("input[name=pilotName]");
  let copilotName = document.querySelector("input[name=copilotName]");
  let fuelLevel = document.querySelector("input[name=fuelLevel]");
  let cargoMass = document.querySelector("input[name=cargoMass]");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  /*
4.) Fetch some planetary JSON to update the mission destination with vital facts and figures about where the shuttle is headed.*/
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         const missionTarget = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*json.length);
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}"></img>`
      })
   })  
/*
1.) Validate the user responses with preventDefault() to ensure the following:
         A.)The user entered something for every field.
         B.)The user entered text for names and numbers for fuel and cargo levels.*/
 
         form.addEventListener("submit", function(event) {          
   if (pilotName.value === ""){
         alert("The 'Pilot Name' is Empty");
         event.preventDefault();
}
   if (copilotName.value === ""){
         alert("The 'Co-Pilot Name' is Empty");
         event.preventDefault();
}
   if (fuelLevel.value === ""){
         alert("The 'Fuel Level' is Empty");
         event.preventDefault();
}
   if (cargoMass.value === ""){
         alert("The 'Cargo Mass' is Empty");
         event.preventDefault();
}  
   if(isNaN(fuelLevel.value)){
         alert("The 'Fuel Level' only accepts numbers");
         event.preventDefault();
}
   if(isNaN(cargoMass.value)){
         alert("The 'Cargo Mass' only accepts numbers");
         event.preventDefault();
}
/*
2.) With validation, update a list of what is currently ready or not ready for the shuttle launch.
3.) Indicate what is good or bad about the shuttle and whether it is ready for launch by using the DOM to update the CSS.*/
 
if(fuelLevel.value >= 10000 && cargoMass.value <= 10000){
      faultyItems.style.visibility = "hidden";
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style.color = "green";
      event.preventDefault();
}
if(fuelLevel.value < 10000 && cargoMass.value > 10000){
      faultyItems.style.visibility = "visible";
      pilotStatus.innerHTML = 'Pilot '+pilotName.value+' is Ready.';
      copilotStatus.innerHTML = 'Co-Pilot '+ copilotName.value+' is Ready.';
      fuelStatus.innerHTML = 'Shuttle has an INSUFFICIENT ammount of fuel'
      cargoStatus.innerHTML = 'Shuttle Cargo exceeds weight limit'
      launchStatus.innerHTML = 'Shuttle is NOT ready for launch.'
      launchStatus.style.color = "red";
      event.preventDefault();
}

if(fuelLevel.value < 10000){
      faultyItems.style.visibility = "visible";
      pilotStatus.innerHTML = 'Pilot '+pilotName.value+' is Ready.';
      copilotStatus.innerHTML = 'Co-Pilot '+copilotName.value+' is Ready.';
      fuelStatus.innerHTML = 'Shuttle has an INSUFFICIENT ammount of fuel'
      cargoStatus.innerHTML = 'Shuttle Cargo meets safety standards'
      launchStatus.innerHTML = 'Shuttle is NOT ready for launch.'
      launchStatus.style.color = "red";
      event.preventDefault();
}

if(cargoMass.value > 10000){
      faultyItems.style.visibility = "visible";
      pilotStatus.innerHTML = 'Pilot '+pilotName.value+' is Ready.';
      copilotStatus.innerHTML = 'Co-Pilot '+copilotName.value+' is Ready.';
      fuelStatus.innerHTML = 'Shuttle has a sufficient ammount of fuel'
      cargoStatus.innerHTML = 'Shuttle Cargo exceeds weight limit'
      launchStatus.innerHTML = 'Shuttle is NOT ready for launch.'
      launchStatus.style.color = "red";
      event.preventDefault();
}
      });
});


