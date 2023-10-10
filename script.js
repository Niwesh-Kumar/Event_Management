const content = document.getElementById("content");
const logoutButton = document.getElementById("logout");


function loadLoginPage() {
    content.innerHTML = `
        <h2>Login</h2>
        <form id="login-form">
            <label for="username">Username:</label>
            <input type="text" id="username" required><br>
            <label for="password">Password:</label>
            <input type="password" id="password" required><br>
            <button type="submit">Log In</button>
        </form>
    `;

    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        
        loadDashboard();
    });
}


function loadDashboard() {
    content.innerHTML = `
        <h2>Dashboard</h2>
        <ul>
            <li><a href="#" id="create-event-link">Create An Event</a></li>
            <li><a href="#" id="view-events-link">View Events</a></li>
            <li><a href="#" id="book-ticket-link">Book Ticket</a></li>
            <li><a href="#" id="view-ticket-link">View Ticket</a></li>
            <li><a href="#" id="check-condition-link">Check Conditions</a></li>
            <li><a href="#" id="event-summary-link">Event Summary</a></li>
        </ul>
    `;

    
    document.getElementById("create-event-link").addEventListener("click", loadCreateEvent);
    document.getElementById("view-events-link").addEventListener("click", loadViewEvents);
    document.getElementById("book-ticket-link").addEventListener("click", loadBookTicket);
    document.getElementById("view-ticket-link").addEventListener("click", loadViewTicket);
    document.getElementById("check-condition-link").addEventListener("click", loadCheckCondition);
    document.getElementById("event-summary").addEventListener("click", loadEventSummary);
}


function loadCreateEvent() {
    content.innerHTML = `<h2>Create An Event</h2><p>Create event form will go here.</p>`;
}


function loadViewEvents() {
    content.innerHTML = `<h2>View Events</h2><p>List of events will go here.</p>`;
}


function loadBookTicket() {
    content.innerHTML = `<h2>Book Ticket</h2><p>Book ticket form will go here.</p>`;
}


function loadViewTicket() {
    content.innerHTML = `<h2>View Ticket</h2><p>View ticket details will go here.</p>`;
}


function loadCheckCondition() {
    content.innerHTML = `<h2>Check Conditions</h2><p>Conditions will be checked here.</p>`;
}


function loadEventSummary() {
    content.innerHTML = `<h2>Event Summary</h2><p>Event summary will be displayed here.</p>`;
}


logoutButton.addEventListener("click", () => {
    
    alert("Logged out!");
    loadLoginPage(); 
});


loadLoginPage();



