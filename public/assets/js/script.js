$(document).ready(() => {

   
    $("#add-burger").on("submit", function(event) {
      event.preventDefault();
  
      const aBurger= {
        burgerName: $("#burger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: aBurger
      }).then(
        function(res) {
          $("#burger").val("");
          console.log("Added a burger");
          location.reload();
        }
      );
    });
    

    $(".devour").on("click", function(event) {
      event.preventDefault();
  
      const burgerId = $(this).attr("burgerId");
      const aBurger= {
        devoured: true
      };
      
      // Send the PUT request.
      $.ajax("/api/burgers/" + burgerId, {
        type: "PUT",
        data: aBurger
      }).then(res => {
          console.log("burger id(" + burgerId + ") is eaten");
          location.reload();
        })
        .catch(error => {
          console.log(error);
          location.reload();
        });
    });
    
  
    $(".remove").on("click", function(event) {
      event.preventDefault();
  
      const burgerId = $(this).attr("burgerId");
      const aBurger= {
        devoured: true
      };
      
      // Send the DELETE request.
      $.ajax("/api/burgers/" + burgerId, {
        type: "DELETE",
        data: aBurger
      }).then(res => {
          console.log("burger id(" + burgerId + ") is removed");
          location.reload();
        })
        .catch(error => {
          console.log(error);
          location.reload();
        });
    });
  
  
  });