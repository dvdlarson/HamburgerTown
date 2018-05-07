// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function () {

  //add a burger
  $(".add-burger").on("submit", function (event) {
      event.preventDefault();
      var newBurger = {
      name: $("#newBurger").val().trim()
      };
      console.log("attempting to add: "+newBurger.name);

      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(function () {
          console.log("Added new burger: " + newBurger.name);
          location.reload();
      });
  });


  //eat a burger
  $(".eatIt").click(function (event) {
      event.preventDefault();
      var id = $(this).data("id");
      console.log("munched ID# " + id );
      var eaten = {
          devoured: 1
              };

      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: eaten
      }).then(function () {
          location.reload();
      });
  });
});
  