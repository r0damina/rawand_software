// Get the modal
var modal = document.getElementById("myModal");

// Get the cards
var cards = document.getElementsByClassName("popular__card");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Loop through each card and add a click event listener
Array.from(cards).forEach(function(card) {
  card.addEventListener("click", function() {
    // Extract information from the clicked card
    var title = card.querySelector(".popular__card__header h4").textContent;
    var location = card.querySelector(".popular__content p:nth-child(2)").textContent;
    var contact = card.querySelector(".popular__content p:nth-child(3)").textContent;
    var review = card.querySelector(".popular__content p:nth-child(4)").textContent;
    var price = card.querySelector(".popular__card__header h4:nth-child(2)").textContent;
    
    // Set modal content
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalLocation").textContent = "Location: " + location;
    document.getElementById("modalContact").textContent = "Contact: " + contact;
    document.getElementById("modalReview").textContent = "Review: " + review;
    document.getElementById("modalPrice").textContent = "Price: " + price;

    // Display the modal
    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// Function to open the review modal
function openReviewModal(cardId) {
  // Set a data attribute to store the card ID in the review modal
  reviewModal.setAttribute("data-card-id", cardId);
  reviewModal.style.display = "block";
}

// Function to close the review modal
function closeReviewModal() {
  reviewModal.style.display = "none";
}

// Function to submit a review
function submitReview() {
  // Get the card ID from the data attribute
  var cardId = reviewModal.getAttribute("data-card-id");

  // Get the review text from the textarea
  var reviewText = document.getElementById("reviewText").value;

  // Create a new review element
  var reviewElement = document.createElement("p");
  reviewElement.textContent = reviewText;

  // Append the review to the reviews container inside the corresponding card
  var reviewsContainer = document.getElementById("reviews" + cardId);
  reviewsContainer.appendChild(reviewElement);

  // Display the review on the card
  var cardReviewContainer = document.getElementById("cardReview" + cardId);
  cardReviewContainer.innerHTML = "<strong>Review:</strong> " + reviewText;

  // Close the review modal
  closeReviewModal();
}


// Function to delete a review
function deleteReview(cardId) {
  // Get the reviews container inside the corresponding card
  var reviewsContainer = document.getElementById("reviews" + cardId);

  // Remove all child elements (reviews) from the reviews container
  while (reviewsContainer.firstChild) {
    reviewsContainer.removeChild(reviewsContainer.firstChild);
  }

  // Also clear the review on the card
  var cardReviewContainer = document.getElementById("cardReview" + cardId);
  cardReviewContainer.innerHTML = "";
}
