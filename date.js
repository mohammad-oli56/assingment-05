function updateLiveDate() {
    const dayElement = document.getElementById("day");
    const datesElement = document.getElementById("dates");

    const currentDate = new Date();
    
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    const monthsOfYear = [
        "Jan", "Feb", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthsOfYear[currentDate.getMonth()];

    const dayOfMonth = currentDate.getDate();
    const year = currentDate.getFullYear();

    dayElement.textContent = `${dayOfWeek},`;
    datesElement.innerHTML = `${monthName} ${dayOfMonth} ${year}`;
}

window.onload = updateLiveDate;
