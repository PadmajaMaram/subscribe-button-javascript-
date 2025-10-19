// ✅ Get references (connections) to all HTML elements using their IDs
const Mycheckbox = document.getElementById("Mycheckbox"); // checkbox input
const visaBtn = document.getElementById("visaBtn"); // radio button - visa
const creditcardBtn = document.getElementById("creditcardBtn"); // radio button - credit card
const paymentbtn = document.getElementById("paymentbtn"); // radio button - payment button
const mysubmit = document.getElementById("mysubmit"); // submit button
const subresult = document.getElementById("subresult"); // paragraph for subscription result
const paymentresult = document.getElementById("paymentresult"); // paragraph for payment result

// 🖱️ Add a "click" event listener to the submit button
// When the button is clicked, the function inside will run
mysubmit.addEventListener("click", function (event) {
  // ❌ Prevents the form from refreshing the page automatically
  // This allows the messages to stay visible on screen
  event.preventDefault();

  // ✅ Check if the checkbox is ticked or not
  if (Mycheckbox.checked) {
    // If ticked, show subscribed message
    subresult.textContent = "you are subscribed";
  } else {
    // If not ticked, show not subscribed message
    subresult.textContent = "you are not subscribed";
  }

  // 💳 Check which payment method radio button is selected
  if (visaBtn.checked) {
    paymentresult.textContent = "payment through visa";
  } else if (creditcardBtn.checked) {
    paymentresult.textContent = "payment through creditcard";
  } else if (paymentbtn.checked) {
    paymentresult.textContent = "payment through payment button";
  } else {
    // If none of the radio buttons are selected
    paymentresult.textContent = "please select a payment option";
  }
});
