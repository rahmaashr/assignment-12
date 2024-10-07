window.onload = function () {
  countDownToTime("10 October 2024 09:56:00");

  function countDownToTime(targetDate) {
    let futureDate = new Date(targetDate);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    let timeDifference = (futureDate - now);

    if (timeDifference >= 0) {
      let days = Math.floor(timeDifference / (24 * 60 * 60));
      let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
      let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
      let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)));

      $(".days").html(`${days} D`);
      $(".hours").html(`${hours} h`);
      $(".minutes").html(`${mins} m`);
      $(".seconds").html(`${secs} s`);

      setTimeout(function () {
        countDownToTime(targetDate);
      }, 1000);
    } else {
      $(".days").html("0 D");
      $(".hours").html("0 h");
      $(".minutes").html("0 m");
      $(".seconds").html("0 s");
    }
  }
  
  $("#txtpostSearch").keyup(function () {
    var txtCharCountLength = $(this).val().length;
    if (txtCharCountLength <= 100) {
      var remainingChar = 100 - txtCharCountLength;
      $("#divChar").html(remainingChar);
    } else {
      $("#divChar").html("Your available characters finished");
    }
  });

  $(".openNav").click(function () {
    $("#leftMenu").animate({ width: "230px" }, 50);
    $("#home-content").animate({ marginLeft: "230px" }, 50);
    $("#toggleText").text("☰ open");
  });

  $(".closebtn").click(function () {
    $("#leftMenu").animate({ width: "0px" }, 50);
    $("#home-content").animate({ marginLeft: "0px" }, 50);
  });
};

