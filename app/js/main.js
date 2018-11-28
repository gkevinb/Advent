var calendarDB;
var modal;

// When the user clicks on <span> (x), close the modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

/*
18 -> dec18--date
*/
function constructDecDateString(date) {
    return "dec" + String(date) + "--date";
}
/*
18 -> dec18--content
*/
function constructDecContentString(date) {
    return "dec" + String(date) + "--content";
}
/*
18 -> img/dec18.jpg
*/
function constructImgSrc(date) {
    return "img/" + String(date);
}

/*
    Open date function simulates opening a date in the advent calendar.
    When date is opened, the date disappears, and the content is revealed
    behind it.
*/
function openDate(day) {
    var decDateString = constructDecDateString(day);
    var decContentString = constructDecContentString(day);

    document.getElementById(decDateString).style.visibility = "hidden";
    document.getElementById(decContentString).style.visibility = "visible";
}
/*
    Initializes calendar by opening those that are marked open in the
    calendar.json file. Meaning these days have been opened already.
*/
function initializeCalendar() {
    for (var i = 0; i < calendarDB.december.length; i++) {
        var date = calendarDB.december[i];
        if (date.opened) {
            openDate(date.day);
        }
    }
}

function dateClicked(day) {
    openDate(day);
    for (var i = 0; i < calendarDB.december.length; i++) {
        if (calendarDB.december[i].day == day) {
            calendarDB.december[i].opened = true;
            //var text = calendarDB.december[i].text;
            var date = calendarDB.december[i];
        }
    }
    localStorage.setItem('advent_calendar', JSON.stringify(calendarDB));

    var modal = document.getElementById('myModal');
    //console.log(modal);
    modal.style.display = "block";

    document.getElementById('modal-title').innerHTML = "December " + String(day);
    if(date.image != null){
        document.getElementById('modal-img').src = constructImgSrc(date.image);
    }
    document.getElementById('modal-text').innerHTML = date.text;

    // Reset date
    date = null;

}

/*
    Reset localStorage calendar item with calendar.json data.
*/
function resetCalendarLocalStorage(db) {
    localStorage.setItem('advent_calendar', JSON.stringify(db));
}


function init() {
    resetCalendarLocalStorage(calendarDB);
    /*
        If calendar exists in localStorage, get it from there if not, then
        from json file.
    */
    if (JSON.parse(localStorage.getItem('advent_calendar') != null)) {
        calendarDB = JSON.parse(localStorage.getItem('advent_calendar'));
    }
    initializeCalendar();
    //console.log(calendarDB.december);
    //console.log(localStorage);

    // Get the modal
    var modal = document.getElementById('myModal');
    //console.log(modal);

}


$.getJSON('calendar.json', function(data) {
    calendarDB = data;
    init();
});
