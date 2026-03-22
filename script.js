const plans = [
    "🏖️ Visit famous tourist attractions",
    "🏛️ Explore historical monuments",
    "🍜 Try local food & cafes",
    "🛍️ Go shopping in local markets",
    "🚗 Take a road trip nearby",
    "🌄 Enjoy sunrise/sunset views",
    "🎡 Visit amusement or theme parks",
    "🏞️ Explore nature & parks",
    "🎭 Experience local culture & shows",
    "🧘 Relax at hotel / spa day"
];

function generatePlan() {
    let destination = document.getElementById("destination").value;
    let days = document.getElementById("days").value;
    let budget = document.getElementById("budget").value;

    if (!destination || !days || !budget) {
        alert("Please fill all fields!");
        return;
    }

    let plan = `<h2>📍 ${destination} Trip</h2>`;
    plan += `<p><b>Days:</b> ${days} | <b>Budget:</b> ₹${budget}</p><hr>`;

    // Shuffle plans for randomness
    let shuffled = plans.sort(() => 0.5 - Math.random());

    for (let i = 1; i <= days; i++) {
        plan += `<h3>🗓️ Day ${i}</h3>`;
        plan += `<p>${shuffled[i % plans.length]}</p>`;
    }

    plan += `<hr><h3>💰 Budget</h3>`;
    plan += `<p>🏨 Hotel: ₹${Math.floor(budget * 0.4)}</p>`;
    plan += `<p>🍴 Food: ₹${Math.floor(budget * 0.3)}</p>`;
    plan += `<p>🚕 Travel: ₹${Math.floor(budget * 0.3)}</p>`;

    document.getElementById("result").innerHTML = plan;
}