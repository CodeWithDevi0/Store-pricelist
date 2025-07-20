function getCurrentDate() {
    const now = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    return `${month} ${day}, ${year}`;
}

// Wait for DOM to be ready before updating the date
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = getCurrentDate();
    }
});
