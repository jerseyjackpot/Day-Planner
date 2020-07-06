var appointText = "";
var appointTime = "";
var currentDate;
var currentTime;
var currentContainer;
var tempArray = [];
var storedAppointments;
var returnedAppointments;
var planDiv = $('#planContainer');
var hour;

$(window).on("load", function () {
  currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
  $("#currentDay").append(currentDate);
  currentTime = moment().format("H");

  function renderAppointments() {
      storedAppointments = JSON.parse(localStorage.getItem("appointments"));
      if (storedAppointments !== null) {
          for (i = 0; i < storedAppointments.length; i++) {
              returnedAppointments = storedAppointments[i];
              details = returnedAppointments.details;
              timeIndex = returnedAppointments.time;
              timeIndex = timeIndex.replace(":00", '');
              if (details !== null) {
                  $("#" + timeIndex).children('div').children('div').children('textarea').val(details);
              }
          }
      }
  }

  renderAppointments();
  
  // build calendar by row for fix set of hours
  for(var hour = 9; hour <= 17; hour++) {
    // index for array use offset from hour
    var index = hour - 9;
    
    // build row components
    var $rowDiv = $('<div>');
    $rowDiv.addClass('.row');
    $rowDiv.attr('hour-index',hour);
  
    // Start building Time box portion of row
    var $colTimeDiv = $('<div>');
    $colTimeDiv.addClass('col-md-2');
  
    // create timeBox element (contains time)
    var $timeBox = $('<span>');
    $timeBox.addClass(".hourSpan");
    // can use this to get value
    $timeBox.attr('class','timeBox');
    
    // format hours for display
    var displayHour = 0;
    var ampm = "";
    if (hour > 12) { 
      displayHour = hour - 12;
      ampm = "pm";
    } else {
      displayHour = hour;
      ampm = "am";
    }
    
    // populate timeBox with time
    $timeBox.text(`${displayHour} ${ampm}`);

    // insert into col inset into timebox
    $rowDiv.append($colTimeDiv);
    $colTimeDiv.append($timeBox)
    // STOP building Time box portion of row

    // START building input portion of row
    // build row components
    var $dailyPlanSpn = $('<input>');

    $dailyPlanSpn.attr('type','text');
    $dailyPlanSpn.attr('class','dailyPlan');

    // access index from data array for hour 
    $dailyPlanSpn.val( tempArray[index] );
    
    // create col to control width
    var $inputDiv = $('<div>');
    $inputDiv.addClass('col-md-9');
    $inputDiv.addClass("textarea");

    // add col width and row component to row
    $rowDiv.append($inputDiv);
    $inputDiv.append($dailyPlanSpn);
    // STOP building Time box portion of row

    // START building save portion of row
    var $saveDiv = $('<div>');
    $saveDiv.addClass('col-md-1');

    var $saveBtn = $('<button>');
    $saveBtn.addClass(".saveBtn")
    $saveBtn.attr('save-id',storedAppointments);
    $saveBtn.attr('class',"far fa-save saveIcon");
    
    
    // add col width and row component to row
    $rowDiv.append($saveDiv);
    $saveDiv.append($saveBtn);
    // STOP building save portion of row
    
    // add row to planner container
    planDiv.append($rowDiv);
    }
  })

  for (i = 9; i <= 17; i++) {
    CurrentContainer = i;
  if (currentTime === i) {
    $('#' + currentContainer).addClass("present");
    $('#' + currentContainer).children('div').children('div').children("textarea").addClass("present");
    }
  else if (hour > i) {
    $('#' + currentContainer).addClass("past");
    $('#' + currentContainer).children('div').children('div').children("textarea").addClass("past");
    }
  else {
    $('#' + currentContainer).addClass("future");
    $('#' + currentContainer).children('div').children('div').children("textarea").addClass("future");
    }

}
$(".saveBtn").click(function () {
  appointText = $(this).parent('div').children('div').children('textarea').val();
  appointTime = $(this).parent('div').parent().attr("id");
  appointment = {
      time: appointTime,
      details: appointText
  }
  tempArray = JSON.parse(localStorage.getItem("appointments"));
  if (tempArray === null) {
      localStorage.setItem('appointments', JSON.stringify([{ time: appointTime, details: appointText }]));
  }
  else {
      tempArray.push(appointment);
      localStorage.setItem("appointments", JSON.stringify(tempArray));

  }
  $(this).parent('div').children('div').children('textarea').replaceWith($('<textarea>' + appointText.addClass("textarea") + '</textarea>'));
})