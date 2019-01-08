/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

// '1600 Amphitheatre Parkway, Mountain View, CA'

const {googleMapsClient} = require("./google_api.js");
// const location = prompt("What is the location that you want to querry?");

// googleMapsClient.geocode({
//     address: process.argv[3]
//   }, function(err, response) {
//     if (!err) {
//       console.log(response.json.results);
//     }
// });

const address = {
    input: process.argv[2],
    inputtype: "textquery"
}

// using callbacks 
// googleMapsClient.findPlace(address, function(err, response) {
//     if(err) {
//         console.log("an error occurred")
//     } else if (response.json.status != 'OK') {
//         console.log("can't find the location")
//     } else {
//         const {candidates} = response.json;
//         const place_id = candidates[0].place_id;
//         googleMapsClient.place({placeid: place_id}, function(err, response) {
//             if(!err) {
//                 const {geometry: {location}, formatted_address} = response.json.result;
//                 console.log(`${address.input} is located at coordinates (${location.lat}, ${location.lng}), at the address ${formatted_address}.`)
//             }
//         });
//     }
// });

// using promises 

googleMapsClient.findPlace(address).asPromise()
    .then((response) => {
        if (response.json.status != 'OK') {
            console.log("can't find the location")
        } else {
            const {candidates} = response.json;
            const place_id = candidates[0].place_id;
            googleMapsClient.place({placeid: place_id}).asPromise() 
            .then((response) => {
                const {geometry: {location}, formatted_address} = response.json.result;
                console.log(`${address.input} is located at coordinates (${location.lat}, ${location.lng}), at the address ${formatted_address}.`);
            });
        }
    })
    .catch((err) => {console.log(err);
    });