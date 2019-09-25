$(document).ready(function() {
  /*Responsive Navigation*/
  $("#nav-mobile").html($("#nav-main").html());
  $("#nav-trigger span").on("click", function() {
    if ($("nav#nav-mobile ul").hasClass("expanded")) {
      $("nav#nav-mobile ul.expanded")
        .removeClass("expanded")
        .slideUp(250);
      $(this).removeClass("open");
      $("#nav-trigger span i").removeClass("fa-times");
    } else {
      $("nav#nav-mobile ul")
        .addClass("expanded")
        .slideDown(250);
      $(this).addClass("open");
      $("#nav-trigger span i").addClass("fa-times");
    }
  });

  $("#nav-mobile").html($("#nav-main").html());
  $("#nav-mobile ul a").on("click", function() {
    if ($("nav#nav-mobile ul").hasClass("expanded")) {
      $("nav#nav-mobile ul.expanded")
        .removeClass("expanded")
        .slideUp(250);
      $("#nav-trigger span").removeClass("open");
    }
  });

  /* Sticky Navigation */
  if (!!$.prototype.stickyNavbar) {
    $("#header").stickyNavbar();
  }

  $("#content").waypoint(function(direction) {
    if (direction === "down") {
      $("#header").addClass("nav-solid fadeInDown");
    } else {
      $("#header").removeClass("nav-solid fadeInDown");
    }
  });
});
