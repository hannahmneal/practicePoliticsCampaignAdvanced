                //  HN 12-22-18 20:40: BEGIN CHALLENGE PART I:

const platform = { 
    district: "TN-05",
    issues: [
        "Taxes", "Jobs", "Infrastructure", "Health care", "Crime and enforcement"
        ],
    donation: "#",  // HN 12-22-18 19:55: URL for donation page goes here; use "givewell" URL.
    calender: "calendar",   // HN 12-22-18 19:55: Calendar goes here; how about using a public calendar API?
    volunteer: [    // HN 12-22-18 19:55: Updated volunteer array so each item in the array is an object with their own property values
        {
            Name: "Ben Wyatt", 
            Address: "Washington, D.C.",
            Email: "ben.wyatt@parksandrec.com",
            Phone: "123-4567",
            Availability: "Always",
            Preferences: "Campaign Manager"
        },
        {
            Name: "Donna Meagle",
            Address: "Pawnee, IN",
            Email: "treatyoself@parcsandrec.com",
            Phone: "111-1111",
            Availability: "Whenever something interesting is happening",
            Preferences: "Marketing"
        },
        {
            Name: "Jerry Gergich",
            Address: "Pawnee, IN",
            Email: "awgeez@parcsandrec.com",
            Phone: "765-4321",
            Availability: "Always",
            Preferences: "Stuffing envelopes"
        },
        {
            Name: "Andy Dwyer",
            Address: "Pawnee, IN",
            Email: "johnnykarate@parcsandrec.com",
            Phone: "777-7777",
            Availability: "Always",
            Preferences: [
                {
                    Performing: [
                        "MouseRat", "Johnny Karate's Super Awesome Musical Explosion Show"
                    ]
                },
                {
                    Security: "Burt Macklin, FBI"
                },
                {
                    Other: "Roleplaying with April"
                }
            ]
        }
    ],
    biography: "test biography",  // HN 12-22-18 19:55: Add an ipsum biography here     
    images:
        {
            headshot: "#",  // HN 12-22-18 20:25: Insert image URL here
            family: "#",    // HN 12-22-18 20:25: Insert image URL here
            constituents: "#"   // HN 12-22-18 20:25: Insert image URL here
        }, 
    registration: "#"  //HN 12-22-18 20:25: URL for voter registration here
}

console.log(platform);



