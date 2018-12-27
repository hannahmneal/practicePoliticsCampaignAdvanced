     //  HN 12-22-18 20:40: BEGIN CHALLENGE PART II

//1. Write corresponding function for each object defined in the first section; each function's purpose is to change the state of the object. 
//2. Use your functions to modify the existing data

    // HN 12-22-18 20:23: platform pathway:
        // {district, issues: [], donation, calendar, volunteer: [{}], biography, images {}, registration}

        console.log("functions.js test");

//FUNCTION FOR MODIFYING OBJECTS 
function newPlatform(newObjects) {
    platform.district = "Pawnee";
    platform.donation = "https://www.givewell.org/"
    platform.images.headshot = document.getElementById("headshot-container").appendChild(document.createElement("img")).src = "images/leslieknope.jpg";
    // URL for leslieknope.jpg: "https://www.pride.com/sites/www.pride.com/files/styles/amp_metadata_content_image_min_696px_wide/public/2015/04/01/leslieknope.jpg?itok=guJ-c5aT"
    platform.images.family = document.getElementById("family-container").appendChild(document.createElement("img")).src = "images/family.jpg";
    // URL for family.jpg: "http://2.bp.blogspot.com/-AcXNu3hvc5M/TxB9BvpfRXI/AAAAAAAABKY/hVihXE7rmB4/s1600/PWYJudges-Parks-and-Rec-Ice-Rink-Knope-2012.jpeg"
    platform.images.constituents = document.getElementById("constituents-container").appendChild(document.createElement("img")).src = "images/constituents.png";
    // URL for constituents.jpg: "https://vignette.wikia.nocookie.net/parksandrecreation/images/d/d8/S04E13.png/revision/latest?cb=20160312064606"

    platform.calendar = "Lil' Sebastian Birthday Bash"
    platform.biography = "Policymaker state of play commitment best practices; change-makers, living a fully ethical life rubric revolutionary greenwashing. Academic and, blended value progress move the needle optimism circular. Grit impact policymaker framework outcomes. Progress families social impact, thought partnership rubric. Our work vibrant strengthening infrastructure; natural resources the resistance movements living a fully ethical life impact investing. Movements but accessibility her body her rights communities greenwashing. Indicators, gender rights; effective altruism impact investing collective impact strategize transparent."
    platform.registration = "See Tommy to Register to Vote and Win Great Swag."
}
newPlatform();
console.log(newPlatform);

//FUNCTION FOR MODIFYING ARRAYS:
function newPlatformArrays(newArrays) {
    platform.issues.push("Fill the Pit", "Be better than Eagleton", "Honor Lil' Sebastian")
    platform.volunteer.push({Name: "Chris Traeger", Address: "Pawnee, IN", Email: "superman@parksandrec.com", Phone: "999-9999", Availability: "Always",Preferences: "Whatever requires the most amount of energy for the longest amount of time."})
}
newPlatformArrays();
console.log(newPlatformArrays);
console.log(platform);


// BEGIN "SCRAP PAPER" CODE:

// HN 12-27-18 00:10: The code on lines 38-51 shows steps taken to use functions for appending images to the DOM. While the functions addImages and appendImages worked as written here, the process was abandoned in favor of the code written on lines 15-17. The latter is more straightforward than the functions below:

// HN 12-22-18 23:30: Use this function (addImages) to add images to the object list (replacing the "#" placeholder with an image in the images folder) and append those images to the DOM: 
// function addImages() {
//     let headshotContainer = document.getElementById("headshot-container");
//     let familyContainer = document.getElementById("family-container");
//     let constituentsContainer = document.getElementById("constituents-container");

//  HN 12-22-18 23:30: Checkpoint: if console.log(imageHeadshot); is here, and addImages() is called directly after the function, "#" is logged to the console. 

//     function appendImages() {
//        let imageAppend = headshotContainer.appendChild(document.createElement("img").src = "images/leslieknope.jpg"
//     }
//     appendImages();
// }
// addImages();

//                              END "SCRAP PAPER" CODE.

//                              POTENTIAL FEATURES AND IMPROVEMENTS:

// HN 12-22-18 23:05: POTENTIAL FEATURE: Modify these functions (newPlatform and newPlatformArrays) so they rest within an "input form". 
    // Define variables for userInput so each part of the object/array can be modified by a "site admin". userInput fields should use ${} .
    // Link userInput to a "formFill" text box and the text box to a "formButton". 
    // New information added to the form via formFill/formButton will appear in the object structure.

//HN 12-22-18 23:34: EFFICIENCY: you could use forEach to loop through the image variables if they were in an array instead of an object. 