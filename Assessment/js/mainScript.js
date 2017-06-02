/*---------------------------------------------------------------------
            THE VINTAGE APPAREL COMPANY SCRIPT FILE
---------------------------------------------------------------------*/

/*---------------------------------------------------------------------
                        SMOOTH SCROLLING OF ALL LINKS
---------------------------------------------------------------------*/

   $(function() {
        $('.navC a, .scrollDownC a, .actionB a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 100
            }, 1000);
            event.preventDefault();
        });
    });


/*---------------------------------------------------------------------
                        THE MODAL SCRIPT
---------------------------------------------------------------------*/

        // Get the modal
        var theModal = document.getElementById('myModal');

        // Get the button that opens the modal

        var modalButton = document.getElementById("register");

        modalButton.addEventListener("click", openModel, false);

        function openModel() {

            theModal.style.display = "block";
        }


        // Get the <span> element that closes the modal
        var theClose = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        theClose.onclick = function() {
            theModal.style.display = "none";
        }


        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == theModal) {
                theModal.style.display = "none";
            }
        }
 

/*---------------------------------------------------------------------
                        GOOGLE MAP SCRIPT
---------------------------------------------------------------------*/
        
        function initMap() {
    
        // Creating a new variable to hold my lat and lng
          var officeLocation = {lat: 51.51234617, lng: -0.0752784};
    
        // Create a map object and specify the DOM element for display.
          map = new google.maps.Map(document.getElementById("map"), {
          center: officeLocation,
          scrollwheel : false,
          zoom: 16
        });
          var marker = new google.maps.Marker({
          position: officeLocation,
          map: map,
          title: 'Find us here!'
        });
    
          var popupAddress = "The Vintage Apparel Company, 2nd Floor<br />";
              popupAddress += "St. Clare House<br />";
              popupAddress += "30-33 Minories<br />";
              popupAddress += "London EC3N 1DD<br />";
          
              
          var infowindow = new google.maps.InfoWindow({
          content: popupAddress,
          maxWidth: 300
        });
          marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

      }




/*---------------------------------------------------------------------
                        MOBILE DEVICES SCRIPT
---------------------------------------------------------------------*/

    $("span.navBtn").click(function() {

        $("ul.menu-items").slideToggle();
    });


    $(window).resize(function() {

        if ( $(window).width() > 480 ) {

            $("ul.menu-items").removeAttr("style");
        }
    });
$(".menu-items li").on("click", function(){
        
        if ( $(window).width() < 800 ) {
        $("span.navBtn").click();
        }
    });
            



/*-----------------------------------------------*/

function displayLocation(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            
            var pLocation = document.getElementById("location");
            pLocation.innerHTML += latitude + ", " + longitude + "<br>";
        }
        
        window.onload = function() {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(displayLocation);
            } else {
                alert("Sorry, this browser doesn't support Geolocation!");
            }
        }



