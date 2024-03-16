function search(event) {
  event.preventDefault();
let searchInput = document.querySelector ("#city-input");
let cityElement = document.querySelector ("#current-city");
cityElement.innerHTML = searchInput.value;


}
let searchForm = document.querySelector("#city-search");
searchForm.addEventListener("submit", search);

let currentDate = document.querySelector ("#current-date");
let currentTime = new Date ();
let minutes = currentTime.getMinutes ();
let hour = currentTime.getHours ();
let day = currentTime.getDay ();

let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let correctDay = days [day];

currentDate.innerHTML = `${correctDay} ${hour}:${minutes}`;
