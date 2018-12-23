     //  HN 12-22-18 20:40: BEGIN CHALLENGE PART II

//1. Write corresponding function for each object defined in the first section; each function's purpose is to change the state of the object. 
//2. Use your functions to modify the existing data

    // HN 12-22-18 20:23: platform pathway:
        // {district, issues: [], donation, calendar, volunteer: [{}], biography, images {}, registration}

        console.log("functions.js test");

function newPlatform(newObjects) {
    platform.district = "Pawnee";
    platform.donation = "https://www.givewell.org/"
    // platform.images.headshot =
    platform.calendar = "Lil' Sebastian Birthday Bash"
    platform.biography = "Policymaker state of play commitment best practices; change-makers, living a fully ethical life rubric revolutionary greenwashing. Academic and, blended value progress move the needle optimism circular. Grit impact policymaker framework outcomes. Progress families social impact, thought partnership rubric. Our work vibrant strengthening infrastructure; natural resources the resistance movements living a fully ethical life impact investing. Movements but accessibility her body her rights communities greenwashing. Indicators, gender rights; effective altruism impact investing collective impact strategize transparent."
    platform.registration = "See Tommy to Register to Vote and Win Great Swag."
}
newPlatform();
console.log(newPlatform);

function newPlatformArrays(newArrays) {
    platform.issues.push("Fill the Pit", "Be better than Eagleton", "Honor Lil' Sebastian")
    platform.volunteer.push({Name: "Chris Traeger", Address: "Pawnee, IN", Email: "superman@parksandrec.com", Phone: "999-9999", Availability: "Always",Preferences: "Whatever requires the most amount of energy for the longest amount of time."})
}
newPlatformArrays();
console.log(newPlatformArrays);
console.log(platform);

// HN 12-22-18 23:30: Use this function (addImages) to add images to the object list (replacing the "#" placeholder with an image in the images folder) and append those images to the DOM: 
function addImages() {
    let leslieHeadshot = document.getElementById("image-container");
    let imageHeadshot = platform.images.headshot;
    let imageFamily = platform.images.family;
    let imageConstituents = platform.images.constituents;
//  HN 12-22-18 23:30: Checkpoint: if console.log(imageHeadshot); is here, and addImages() is called directly after the function, "#" is logged to the console. 
    
}

// HN 12-22-18 23:05: POTENTIAL FEATURE: Modify these functions (newPlatform and newPlatformArrays) so they rest within an "input form". 
    // Define variables for userInput so each part of the object/array can be modified by a "site admin". userInput fields should use ${} .
    // Link userInput to a "formFill" text box and the text box to a "formButton". 
    // New information added to the form via formFill/formButton will appear in the object structure.

//HN 12-22-18 23:34: EFFICIENCY: you could use forEach to loop through the image variables if they were in an array instead of an object. 