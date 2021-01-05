function Myfunction() {
  
  let header = document.querySelector('#header');
  if(header.style.display === 'block'){
    header.style.display= 'none';
  }else{    
      header.style.display = 'block';
   
    }
}


// opne facebook
let facebook = document.querySelector('.facebook');
facebook.addEventListener('click', function () {
  window.open('https://web.facebook.com/saboor.hamedi.7/', '__blank');
});
let instagram = document.querySelector('.instagram');
instagram.addEventListener('click', function () {
  window.open('https://www.instagram.com/hamedisaboor/', '__blank');
});
let youtube = document.querySelector('.youtube');
youtube.addEventListener('click', function () {
  window.open('https://www.youtube.com/channel/UCZMq7nZ_PH1aWwfenMnDSqQ', '__blank');
});
let email = document.querySelector('.email');
email.addEventListener('click', function () {
  window.open('https://gmail.com/', '__blank');
});
let twitter = document.querySelector('#open-twitter');
twitter.addEventListener('click', function () {
  window.open('https://twitter.com/Arsallan_', '__blank');
});
// skill progress bar
window.addEventListener('load', () => {
  let progressBar = document.querySelectorAll('.progress-bar');
  let values = [
    '80%',
    '75%',
    '70%',
    '65%',
    '80%'
  ];
  progressBar.forEach((progress, index) => {
    progress.style.width = values[index];
  });
});

// SCROLL
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
});
  // end