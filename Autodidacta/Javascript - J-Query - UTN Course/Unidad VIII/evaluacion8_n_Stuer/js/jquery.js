$(document).ready(function () {
  $("#btn").click(function () {
    let btn = $("#btn");
    let box = $('.contenedor');

    for (let i = 0; i < 4; i++) {
      btn.animate({ top: "+=100px" }, "");
      btn.animate({ left: "+=100px" }, "");
      btn.animate({ top: "+=-100px" }, "");
      btn.animate({ left: "+=-100px" }, "");

      btn.removeClass("btn-danger");
      btn.addClass("bg-primary");

      setTimeout(function () {
        btn.removeClass("bg-primary");
        btn.addClass("bg-success");
        box.addClass('bg-primary')
    }, 1500);
    
    setTimeout(function () {
        btn.removeClass("bg-success");
        btn.addClass("bg-warning");
        box.removeClass('bg-primary')
        box.addClass('bg-success')
    }, 3000);
    
    setTimeout(function () {
        btn.removeClass("bg-warning");
        btn.addClass("bg-dark");
        box.removeClass('bg-success')
        box.addClass('bg-warning')
      }, 4500);

      setTimeout(function () {
        btn.css("display", "none");
        box.css("display", "none");

      }, 6500);
    }
  });
});
