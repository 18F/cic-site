(function (document, window, $) {

  // Initialize sticky fill
  var stickyElements = document.getElementsByClassName('sticky');

  for (var i = stickyElements.length - 1; i >= 0; i--) {
    Stickyfill.add(stickyElements[i]);
  }

    // Trigger point at which to perform dynamic effects on the nav bar
    var triggerPoint = 60;

    var $navPrimary = document.getElementById("usa-nav-primary");

  // Shrink the nav bar upon page scroll.
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > triggerPoint) {
      $navPrimary.classList.add("scrolled");
    } else {
      $navPrimary.classList.remove("scrolled");
    }
  });

})(document, window, $);
