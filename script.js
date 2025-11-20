$(function() {
  // Initialize pet info in HTML
  checkAndUpdatePetInfoInHtml();

  // Button click bindings
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.sleep-button').click(clickedSleepButton);
});

// Pet object with initial values
var pet_info = {
  name: "Ignikit",
  weight: 10,
  happiness: 5
};

// Treat button behavior
function clickedTreatButton() {
  pet_info.happiness++;
  pet_info.weight++;
  checkAndUpdatePetInfoInHtml();
  notify("Yum!!!");
  animatePet("treat");
}

// Play button behavior
function clickedPlayButton() {
  pet_info.happiness++;
  pet_info.weight = Math.max(0, pet_info.weight - 1);
  checkAndUpdatePetInfoInHtml();
  notify("That was fun!!!");
  animatePet("play");
}

// Exercise button behavior
function clickedExerciseButton() {
  pet_info.happiness = Math.max(0, pet_info.happiness - 1);
  pet_info.weight = Math.max(0, pet_info.weight - 1);
  checkAndUpdatePetInfoInHtml();
  notify("Phew!");
  animatePet("exercise");
}

// Sleep button behavior
function clickedSleepButton() {
  pet_info.happiness += 2;
  checkAndUpdatePetInfoInHtml();
  notify("ZZZ");
  animatePet("sleep");
}

// Ensure values don’t go below zero
function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  if (pet_info.weight < 0) pet_info.weight = 0;
  if (pet_info.happiness < 0) pet_info.happiness = 0;
}

// Update HTML with current pet info
function updatePetInfoInHtml() {
  $('.name').text(pet_info['name']);
  $('.weight').text(pet_info['weight']);
  $('.happiness').text(pet_info['happiness']);
}

// Notification using fadeToggle (Unique)
function notify(message) {
  $(".notification").text(message).fadeToggle(200).fadeToggle(200);
  // .fadeToggle() shows/hides the message
}

// Different animations per action (EC/Unique)
function animatePet(action) {
  if (action === "treat") {
    // Bounce effect
    $(".pet-image").animate({ top: "-20px" }, 300)
                   .animate({ top: "0px" }, 300);
  } else if (action === "play") {
    // Wiggle effect
    $(".pet-image").animate({ left: "-20px" }, 200)
                   .animate({ left: "20px" }, 200)
                   .animate({ left: "0px" }, 200);
  } else if (action === "exercise") {
    // Shrink and grow effect
    $(".pet-image").animate({ width: "200px" }, 300)
                   .animate({ width: "250px" }, 300);
  } else if (action === "sleep") {
    // Fade effect
    $(".pet-image").animate({ opacity: 0.5 }, 500)
                   .animate({ opacity: 1 }, 500);
  }
}