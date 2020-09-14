// Write your JavaScript code here!
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let pilotName = document.querySelector("input[name=pilotName]");
  let copilotName = document.querySelector("input[name=copilotName]");
  let fuelLevel = document.querySelector("input[name=fuelLevel]");
  let cargoMass = document.querySelector("input[name=cargoMass]");


 form.addEventListener("submit", function(event) {          
   if (pilotName.value === ""){
         alert("The 'Pilot Name' Box is Empty");
         event.preventDefault();
}
   if (copilotName.value === ""){
         alert("The 'Co-Pilot Name' Box is Empty");
         event.preventDefault();
}
   if (fuelLevel.value === ""){
         alert("The 'Fuel Level' Box is Empty");
         event.preventDefault();
}
   if (cargoMass.value === ""){
         alert("The 'Cargo Mass' Box is Empty")
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