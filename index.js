document.addEventListener("DOMContentLoaded", () => {
  const newAdviceButton = document.getElementById("new-advice-button");

  function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        // Update the contents of the <p> element with the API data
        const outputElement = document.getElementById("quote");
        const outputNumber = document.getElementById("number");
        outputElement.textContent = data.slip.advice;
        outputNumber.textContent = data.slip.id;
        console.log(data.slip);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }

  // Fetch new advice when the page loads
  getAdvice();

  // Fetch new advice when the button is clicked
  newAdviceButton.addEventListener("click", getAdvice);
});
