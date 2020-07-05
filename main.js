// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var timeDisplay = moment().format("MMMM Do YYYY");

var timeDiv = $("#currentDay");
timeDiv.append(timeDisplay);
var hourBlock = $("#container");
var newDiv = $("<div>");
var newRow = $("#row");
var rowInput = $("#input");
var saveButton = $("<button>");
var test = false;

newDiv.append(hourBlock);
newRow.append(newDiv);
newDiv.addClass(newRow);
newRow.addClass(rowInput);
rowInput.addClass("form-control form-control-lg");

// renderCells - onLoad functions? or when the page is ready, we need to "render" any saved cells
function renderAppointments() {
  storedAppointments = JSON.parse(localStorage.getItem("appointments"));
  if (storedAppointments !== null) {
    for (i = 0; i < storedAppointments.length; i++) {
      returnedAppointments = storedAppointments[i];
      details = returnedAppointments.details;
      timeIndex = returnedAppointments.time;
      timeIndex = timeIndex.replace(":00", "");
      if (details !== null) {
        $("#container")
          .children("<div>")
          .children("#row")
          .children("#input")
          .val(details);
      }
    }
  }
}

renderAppointments();

// WHEN I scroll down
// build calendar by row
// THEN I am presented with timeblocks for standard business hours
// add divs for hour blocks

// newDiv.addAttr('hour-index');
// class="btn btn-primary"></button>
function hourBlock() {
  for (var i = 1; i < 9; i++);
  hourBlock.length[i];
  console.log("condition hit!");
}
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// red for past, yellow for present, green for future

// set row color based on time
// updateRowColor(newDiv, hour);

// // function to update row color
// function updateRowColor(hourBlock, hour) {
//   if (test) {
//     console.log("newDivColor ", nowHour24, hour);
//   }

//   if (hour < nowHour24) {
//     // $hourRow.css('')
//     if (test) {
//       console.log("lessThan");
//     }
//     newRow.css("background-color", "tomato");
//   } else if (hour > nowHour24) {
//     if (test) {
//       console.log("greaterthan");
//     }
//     newRow.css("background-color", "lightgreen");
//   } else {
//     if (test) {
//       console.log("eqaul");
//     }
//     newRow.css("background-color", "yellow");
//   }
// }

// WHEN I click into a timeblock
// click event
// THEN I can enter an event
// some kind of input

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// create buttons for saving data into the inputs

// WHEN I refresh the page
// THEN the saved events persist
// JSON parse the data on the client server

// saveHandler - we need a function to handle click and save

// renderColorCode - use moment.js (or alternatives in webapi) to get the current time "color code" (class and background-color)
