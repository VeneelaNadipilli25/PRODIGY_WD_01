document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");

    // Function to change navbar background color on scroll
    window.onscroll = function() {
        if (window.pageYOffset > 0) {
            navbar.style.backgroundColor = "#222"; // Darker color when scrolled
        } else {
            navbar.style.backgroundColor = "#333"; // Original color when at the top
        }
    };

    // Optional: Adding event listeners for hover effects using JavaScript
    var navLinks = document.querySelectorAll("#navbar ul li a");

    navLinks.forEach(function(link) {
        link.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#575757"; // Darker background on hover
            this.style.color = "#ffffff"; // Text color white
        });

        link.addEventListener("mouseout", function() {
            this.style.backgroundColor = ""; // Reset to original background color
            this.style.color = ""; // Reset to original text color
        });
    });
});
