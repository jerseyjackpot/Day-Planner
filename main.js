$(window).on("load", function () {
  var currentDate;
  var currentTime;

  currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
  $("#currentDay").append(currentDate);
  currentTime = parseInt(moment().format("H"));

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

    for (var hour = 9; hour <= 17; hour++) {
      $("#" + hour)
        .children(".textarea")
        .val(localStorage.getItem(hour + ""));
      console.log(localStorage.getItem(hour + ""));
    }
  };
  displaySavedAppt();

  $(".saveIcon").click(function () {
    var text = $(this).siblings(".textarea").val();
    console.log(text);
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem(time, text);
  });
});
