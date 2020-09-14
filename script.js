// Write your JavaScript code here!
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let pilotName = document.querySelector("input[name=pilotName]");
  let copilotName = document.querySelector("input[name=copilotName]");
  let fuelLevel = document.querySelector("input[name=fuelLevel]");
  let cargoMass = document.querySelector("input[name=cargoMass]");


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
      });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/