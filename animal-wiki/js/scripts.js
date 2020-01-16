$(document).ready(function() { 
  $("form").submit(function(event) {
    event.preventDefault();
    var choice = $("input:radio[name=animals]:checked", "#myForm").val(); 
    
    ///front///

    if (choice === "snake") {
      $("#snake-info").show();
      } else if (choice === "shark") {
        $("#shark-info").show();
      } else if (choice === "giraffe") {
        $("#giraffe-info").show();
      }
  });
});