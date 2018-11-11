var calendarDB;


/*
18 -> dec18--date
*/
function constructDecDateString(date){
    return "dec" + String(date) + "--date";
}
/*
18 -> dec18--content
*/
function constructDecContentString(date){
    return "dec" + String(date) + "--content";
}


function openDate(date){

}




function init(){
    console.log(constructDecDateString(1));
    console.log(constructDecContentString(18));
}

$.getJSON('calendar.json', function(data){
    calendarDB = data;
    init();
});
