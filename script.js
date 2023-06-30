// Function to toggle the display of additional information
function toggleAdditionalInfo() {
  var info = document.getElementById("additional-info");
  var button = document.getElementsByTagName("button")[0];

  if (info.style.display === "none") {
    info.style.display = "block";
    button.textContent = "Read Less";
  } else {
    info.style.display = "none";
    button.textContent = "Read More";
  }
}
