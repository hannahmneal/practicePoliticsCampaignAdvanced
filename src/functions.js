     //  HN 12-22-18 20:40: BEGIN CHALLENGE PART II

//1. Write corresponding function for each object defined in the first section; each function's purpose is to change the state of the object. 
//2. Use your functions to modify the existing data

    // HN 12-22-18 20:23: platform pathway:
        // {district, issues: [], donation, calendar, volunteer: [{}], biography, images {}, registration}

        console.log("functions.js test");

function newPlatform(newObjects) {
    platform.district = "Pawnee";
    platform.donation = "https://www.givewell.org/"
    platform.images.headshot = 
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
