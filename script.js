const plans = [
    "🏖️ Visit famous places",
    "🍜 Try local food",
    "🛍️ Explore markets",
    "🏛️ Visit monuments",
    "🌄 Enjoy nature views",
    "🎭 Cultural activities"
];

function randomPlan() {
    return plans[Math.floor(Math.random() * plans.length)];
}

function generatePlan() {
    let destination = document.getElementById("destination").value;
    let days = document.getElementById("days").value;
    let budget = document.getElementById("budget").value;

    if (!destination || !days || !budget) {
        alert("Please fill all fields!");
        return;
    }

    let plan = `<div class="result-card">`;
    plan += `<h2>📍 ${destination}</h2>`;
    plan += `<p><b>Days:</b> ${days} | <b>Budget:</b> ₹${budget}</p><hr>`;

    for (let i = 1; i <= days; i++) {
        plan += `<h3>🗓️ Day ${i}</h3>`;
        plan += `<p>🌅 Morning: ${randomPlan()}</p>`;
        plan += `<p>☀️ Afternoon: ${randomPlan()}</p>`;
        plan += `<p>🌙 Evening: ${randomPlan()}</p>`;
    }

    plan += `<hr><h3>💰 Budget Breakdown</h3>`;
    plan += `<p>🏨 Hotel: ₹${Math.floor(budget * 0.4)}</p>`;
    plan += `<p>🍴 Food: ₹${Math.floor(budget * 0.3)}</p>`;
    plan += `<p>🚕 Travel: ₹${Math.floor(budget * 0.3)}</p>`;

    plan += `</div>`;

    document.getElementById("result").innerHTML = plan;

    saveTrip(destination, plan);
}

/* SAVE TRIP */
function saveTrip(destination, plan) {
    let trips = JSON.parse(localStorage.getItem("trips")) || [];
    trips.push({ destination, plan });
    localStorage.setItem("trips", JSON.stringify(trips));
}

/* SHOW SAVED TRIPS */
function showTrips() {
    let trips = JSON.parse(localStorage.getItem("trips")) || [];
    let output = "<h2 style='color:white'>Saved Trips</h2>";

    trips.forEach(trip => {
        output += trip.plan + "<hr>";
    });

    document.getElementById("result").innerHTML = output;
}
