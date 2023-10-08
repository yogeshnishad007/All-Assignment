import data from "./data.json" assert { type: 'json' };; 


console.log(data)

// Task 1: Print respective name, username, email for even IDs
data.forEach(el => {
    if (el.id % 2 === 0) {
        console.log(`Name: ${el.name}, Username: ${el.username}, Email: ${el.email}`);
    } else {
        console.log("I'm Odd");
    }
});

// Task 2: Print address keys and values for all IDs
data.forEach(el => {
    console.log(`Address for ID ${el.id}:`);
    for (const key in el.address) {
        console.log(`${key}: ${el.address[key]}`);
    }
});

// Task 3: Print name and email for emails ending with ".biz"
data.forEach(el => {
    if (el.email.endsWith(".biz")) {
        console.log(`Name: ${el.name}, Email: ${el.email}`);
    }
});


// Task 4: Print details for specific cities
const targetCities = ["Aliyaview", "Howemouth", "Gwenborough"];
data.forEach(el => {
    if (targetCities.includes(el.address.city)) {
        const { city, zipcode, geo } = el.address;
        console.log(`The Zipcode and Geo of cityname ${city} is: ${zipcode} and lat: ${geo.lat}, lng: ${geo.lng}`);
    }
});

// Task 5: Print CatchPhrase with max 15 letters
data.forEach(el => {
    const catchPhrase = el.company.catchPhrase.slice(0, 15); // Take first 15 characters
    console.log(`CatchPhrase: ${catchPhrase}`);
});
