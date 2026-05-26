// ======================================================
// 1. JavaScript Basics & Setup
// ======================================================

console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Page Fully Loaded");
};

// ======================================================
// 2. Syntax, Data Types, Operators
// ======================================================

const portalName = "Community Event Portal";
const portalDate = "2026-05-26";

let totalSeats = 50;

console.log(`${portalName} started on ${portalDate}`);

totalSeats++;
totalSeats--;

console.log("Available Seats:", totalSeats);

// ======================================================
// 5. Objects and Prototypes
// ======================================================

class Event {

    constructor(name, category, date, seats, location) {

        this.name = name;
        this.category = category;
        this.date = date;
        this.seats = seats;
        this.location = location;
    }
}

// Prototype Method
Event.prototype.checkAvailability = function () {

    return this.seats > 0;
};

// ======================================================
// 6. Arrays and Methods
// ======================================================

const events = [];

events.push(
    new Event(
        "Music Night",
        "Music",
        "2026-06-10",
        10,
        "Madurai"
    )
);

events.push(
    new Event(
        "Baking Workshop",
        "Workshop",
        "2026-06-15",
        5,
        "Chennai"
    )
);

events.push(
    new Event(
        "Football Match",
        "Sports",
        "2025-01-01",
        0,
        "Coimbatore"
    )
);

// filter()
const musicEvents = events.filter(
    event => event.category === "Music"
);

console.log("Music Events:", musicEvents);

// map()
const eventTitles = events.map(
    event => `Workshop on ${event.name}`
);

console.log(eventTitles);

// Object.entries()
events.forEach(event => {

    console.log(Object.entries(event));

});

// ======================================================
// 4. Functions, Scope, Closures, Higher Order Functions
// ======================================================

function addEvent(event) {

    events.push(event);
}

function registerUser(eventName) {

    try {

        const event = events.find(
            e => e.name === eventName
        );

        if (!event) {

            throw new Error("Event not found");
        }

        if (event.seats <= 0) {

            throw new Error("No seats available");
        }

        event.seats--;

        renderEvents();

        alert(`Registered for ${event.name}`);

    }
    catch (error) {

        console.error(error.message);
    }
}

// Higher Order Function
function filterEventsByCategory(category, callback) {

    const filtered = events.filter(
        event => event.category === category
    );

    callback(filtered);
}

// Closure Example
function registrationTracker() {

    let count = 0;

    return function () {

        count++;

        console.log("Total Registrations:", count);
    };
}

const trackMusicRegistration =
    registrationTracker();

// ======================================================
// 3. Conditionals, Loops, Error Handling
// ======================================================

function getValidEvents() {

    const today = new Date();

    return events.filter(event => {

        const eventDate = new Date(event.date);

        if (
            eventDate > today &&
            event.seats > 0
        ) {
            return true;
        }
        else {
            return false;
        }
    });
}

// ======================================================
// 7. DOM Manipulation
// ======================================================

const container =
    document.querySelector("#eventContainer");

function renderEvents(eventList = getValidEvents()) {

    container.innerHTML = "";

    eventList.forEach(event => {

        const card =
            document.createElement("div");

        card.classList.add("event-card");

        card.innerHTML = `
            <h3>${event.name}</h3>

            <p>Category:
            ${event.category}</p>

            <p>Date:
            ${event.date}</p>

            <p>Seats:
            ${event.seats}</p>

            <p>Location:
            ${event.location}</p>

            <button onclick=
            "registerUser('${event.name}')">
            Register
            </button>

            <button onclick=
            "cancelRegistration('${event.name}')">
            Cancel
            </button>
        `;

        container.appendChild(card);
    });
}

renderEvents();

// Cancel Registration
function cancelRegistration(eventName) {

    const event = events.find(
        e => e.name === eventName
    );

    if (event) {

        event.seats++;

        renderEvents();

        alert("Registration Cancelled");
    }
}

// ======================================================
// 8. Event Handling
// ======================================================

// onchange
document
    .querySelector("#categoryFilter")
    .onchange = function () {

        const category = this.value;

        if (category === "all") {

            renderEvents();
        }
        else {

            filterEventsByCategory(
                category,
                function (filtered) {

                    renderEvents(filtered);
                }
            );
        }
    };

// keydown
document
    .querySelector("#searchBox")
    .addEventListener(
        "keydown",
        function () {

            const value =
                this.value.toLowerCase();

            const filtered =
                events.filter(event =>
                    event.name
                    .toLowerCase()
                    .includes(value)
                );

            renderEvents(filtered);
        }
    );

// ======================================================
// 9. Async JS, Promises, Async/Await
// ======================================================

// Mock API
const mockAPI =
    "https://jsonplaceholder.typicode.com/posts";

// then() and catch()
fetch(mockAPI)
    .then(response => response.json())
    .then(data => {

        console.log("Fetched Data:", data);

    })
    .catch(error => {

        console.log(error);
    });

// async await
async function fetchEvents() {

    try {

        document
            .querySelector("#loading")
            .style.display = "block";

        const response =
            await fetch(mockAPI);

        const data =
            await response.json();

        console.log(data);

        document
            .querySelector("#loading")
            .style.display = "none";
    }
    catch (error) {

        console.log(error);
    }
}

fetchEvents();

// ======================================================
// 10. Modern JavaScript Features
// ======================================================

function greetUser(
    username = "Guest"
) {

    console.log(`Hello ${username}`);
}

greetUser();

// destructuring
const firstEvent = events[0];

const {
    name,
    category,
    seats
} = firstEvent;

console.log(name, category, seats);

// spread operator
const clonedEvents = [...events];

console.log(clonedEvents);

// ======================================================
// 11. Working with Forms
// ======================================================

const form =
    document.querySelector("#registerForm");

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const username =
            form.elements["username"].value;

        const email =
            form.elements["email"].value;

        const eventName =
            form.elements["eventName"].value;

        // clear errors
        document.querySelector(
            "#nameError"
        ).innerHTML = "";

        document.querySelector(
            "#emailError"
        ).innerHTML = "";

        document.querySelector(
            "#eventError"
        ).innerHTML = "";

        let valid = true;

        if (username === "") {

            document.querySelector(
                "#nameError"
            ).innerHTML =
                "Name required";

            valid = false;
        }

        if (email === "") {

            document.querySelector(
                "#emailError"
            ).innerHTML =
                "Email required";

            valid = false;
        }

        if (eventName === "") {

            document.querySelector(
                "#eventError"
            ).innerHTML =
                "Select event";

            valid = false;
        }

        if (valid) {

            submitRegistration({
                username,
                email,
                eventName
            });
        }
    }
);

// ======================================================
// 12. AJAX & Fetch API
// ======================================================

function submitRegistration(userData) {

    console.log("Submitting Form");

    console.log(userData);

    setTimeout(() => {

        fetch(mockAPI, {

            method: "POST",

            headers: {
                "Content-Type":
                "application/json"
            },

            body: JSON.stringify(userData)

        })
        .then(response =>
            response.json()
        )
        .then(data => {

            document.querySelector(
                "#message"
            ).innerHTML =
                "Registration Successful";

            console.log(data);
        })
        .catch(error => {

            document.querySelector(
                "#message"
            ).innerHTML =
                "Registration Failed";

            console.log(error);
        });

    }, 2000);
}

// ======================================================
// 13. Debugging and Testing
// ======================================================

// Debug Tips:
//
// 1. Open Chrome Dev Tools
// 2. Use Console tab
// 3. Use Network tab
// 4. Add breakpoints
// 5. Inspect fetch payload
//

console.log("Debugging Started");

// ======================================================
// 14. jQuery and Frameworks
// ======================================================

// click()
$("#registerBtn").click(function () {

    console.log("jQuery Click Event");
});

// fadeIn and fadeOut
$(".event-card").fadeOut(1000).fadeIn(1000);

// Framework Benefit:
//
// React or Vue helps build
// reusable UI components
// and better state management.