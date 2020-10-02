$(document).ready(function () {
  var currentDayId = $("#currentDay");
  // console.log("currentDayID");
  var date = "2020-09-30T00:00:00-12:48";
  var format = "LLLL";
  var result = moment(date).format(format);
  var divContainer = $(".container");
  currentDayId.text(result);

  //Save day to local storage
  function saveDate() {
    localStorage.getItem(currentDayId), JSON.stringify(workday);
  }

  function clickSave() {
    var saveBtn = $(".saveBtn");
    console.log(saveBtn);
  }




// // timeblocks for business hours

var workDay = [
  "9 AM",
  "10 AM",
  "11 AM",
  "Noon",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
];
console.log(workDay);

for (i = 0; i < workDay.length; i++) {}
