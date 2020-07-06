// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
$(window).on("load", function () {
  var currentDate;
  var currentTime;

  currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
  $("#currentDay").append(currentDate);
  currentTime = parseInt(moment().format("H"));
  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  var displaySavedAppt = function () {
    for (i = 9; i <= 17; i++) {
      $("#" + i).removeClass();
      if (currentTime === i) {
        $("#" + i).addClass("row present");
      } else if (currentTime > i) {
        $("#" + i).addClass("row past");
      } else {
        $("#" + i).addClass("row future");
      }
    }
    // THEN the text for that event is saved in local storage
    // WHEN I refresh the page
    // THEN the saved events persist
    for (var hour = 9; hour <= 17; hour++) {
      $("#" + hour)
        .children(".textarea")
        .val(localStorage.getItem(hour + ""));
      console.log(localStorage.getItem(hour + ""));
    }
  };
  displaySavedAppt();
  // WHEN I click into a timeblock
  // THEN I can enter an event
  // WHEN I click the save button for that timeblock
  $(".saveIcon").click(function () {
    var text = $(this).siblings(".textarea").val();
    console.log(text);
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem(time, text);
  });
});
