$(document).ready(function () {
  var currentDayId = $("#currentDay");
  var date = "2020-09-30T00:00:00-12:48";
  var format = "LLLL";
  var result = moment(date).format(format);
  currentDayId.text(result);
});

// timeblocks for business hours
var divContainer = $(".container");
console.log(divContainer);

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

for (i = 0; i < workDay.length; i++) {
  divContainer.append(
    "<div>",
    "<div>" + workDay[i] + "</div>",
    "<textarea class=description>",
    "<div><i>"
  );
}
