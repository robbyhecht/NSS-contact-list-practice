
let submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", function() {
  
})











// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection (post-get) component.

// access the music html locations
let musicButton = document.getElementById("music_button");
let musicSelection = document.getElementById("section_music");
// music selection event listener
musicButton.addEventListener("click", function() {
  // assigns user's date selection
  let clickValue = musicSelection.value;

  let musicSearch = musicFinder(clickValue);
  musicFetch(musicSearch);
  hideSearch();
})