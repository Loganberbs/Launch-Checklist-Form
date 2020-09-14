// Write your JavaScript code here!
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]")
        let cargoMass = document.querySelector("input[name=cargoMass]")
          
        
   if (cargoMass.value === ""|| fuelLevel.value === ""|| copilotName.value === ""|| pilotName.value === ""){
         alert("All Fields Required!");
         event.preventDefault();
   }
   else (pilotName.value !== String || copilotName.value !== String);
         alert("Enter a name without numbers for both pilot names");
         event.preventDefault();
   if (fuelLevel.value !== Number || cargoMass.value !== Number)
         alert("Enter a number for Fuel Level & Cargo Mass");	
         event.preventDefault();
      
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