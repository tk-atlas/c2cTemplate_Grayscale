(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

function getDataFromApi() {
    var status = document.getElementById("api_status");
    status.innerText = 'Fetching data from API...';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/transformers.json');

    xhr.onload = function() {

        if (xhr.status === 200) {
            var apiResponse = JSON.parse(xhr.responseText);
            console.log(apiResponse);

            var apiData = document.getElementById("api_data");
            apiData.innerHTML = '';  // clear apiData

            apiResponse.forEach(function(transformer) {
                var card = document.createElement("div");
                card.classList.add("card");
                apiData.appendChild(card);

                var cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
                card.appendChild(cardBody);

                var cardTitle = document.createElement("h4");
                cardTitle.classList.add("card-title");
                var nameElement = document.createTextNode(transformer.name);
                cardTitle.appendChild(nameElement);
                cardBody.appendChild(cardTitle);

                var heightP = document.createElement("p");
                heightP.classList.add("card-text");
                var heightElement = document.createTextNode("Height: " + transformer.height);
                heightP.appendChild(heightElement);
                cardBody.appendChild(heightP);

                var cardImage = document.createElement("img");
                cardImage.setAttribute("src", transformer.image_url);
                cardImage.setAttribute("alt", transformer.name);
                cardImage.classList.add("card-img-bottom");
                card.appendChild(cardImage);
            });

            status.innerText = '';
        }
        else {
            alert('Request failed. Returned status of ' + xhr.status);
            status.innerText = 'Error: Could not get data from API.';
        }
    };
    xhr.send();
}
