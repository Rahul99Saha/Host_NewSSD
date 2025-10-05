function startTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeString;
  setTimeout(startTime, 1000);
}

$(document).ready(function(){
  // Smooth scroll
  $("nav a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 600);
    }
  });
});
