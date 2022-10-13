// setup
var contacts = [
    {
        "firstName":"Akira",
        "lastName":"Laine",
        "number":"00123478596",
        "likes":["Pizza","Coding","brownie Points"]
    },
    {
        "firstName":"Harry",
        "lastName":"Potter",
        "number":"45678912365",
        "likes":["Hogwarts","Magic","Hagrid"]
    },
    {
        "firstName":"Sherlock",
        "lastName":"Holmes",
        "number":"74125896321",
        "likes":["Interiguing Cases","Violin"]
    }
]

function lookUpProfile(name,prop){
    for(var item = 0; item < contacts.length; item++){
        if (contacts[item].firstName === name){
            return contacts[item][prop] || "No such Property";
        }
    }
    return "Not Found!"   
}

console.log(lookUpProfile("Sherlock","like"))