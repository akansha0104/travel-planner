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
        alert("Fill all fields!");
        return;
    }

    let plan = `<div class="result-card">`;
    plan += `<h2>📍 ${destination}</h2>`;
    plan += `<p>Days: ${days} | Budget: ₹${budget}</p><hr>`;

    for (let i = 1; i <= days; i++) {
        plan += `<h3>🗓️ Day ${i}</h3>`;
        plan += `<p>🌅 Morning: ${randomPlan()}</p>`;
        plan += `<p>☀️ Afternoon: ${randomPlan()}</p>`;
        plan += `<p>🌙 Evening: ${randomPlan()}</p>`;
    }

    plan += `<hr><h3>💰 Budget</h3>`;
    plan += `<p>🏨 Hotel: ₹${budget * 0.4}</p>`;
    plan += `<p>🍴 Food: ₹${budget * 0.3}</p>`;
    plan += `<p>🚕 Travel: ₹${budget * 0.3}</p>`;

    plan += `</div>`;

    document.getElementById("result").innerHTML = plan;

    saveTrip(destination, plan);
}
