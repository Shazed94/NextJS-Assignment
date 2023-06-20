// 1.
function getDayofWeek(date) {
  const getdate = new Date(date);
  return getdate.getDay();
}
getDayofWeek("2023-06-20");
// console.log(getDayofWeek("2023-06-20")); // 0 

function getDayString(date) {
  const getdate = new Date(date);
  return getdate.toLocaleString("default", { weekday: "long" });
}
getDayString("2023-06-20");
// console.log(getDayString("2023-06-20")); // Tuesday

// =================================================================
// 2.
var arr = [2, 5, 11, 7, 9];
var sumOfSqr = 0;

function sumOfSqrRoot(arr) {
  for (let i = 0; i < arr.length; i++) {
    sumOfSqr += Math.pow(arr[i], 2);
  }
  var sqrRoot = Math.sqrt(sumOfSqr);
  return sqrRoot;
}

var result = sumOfSqrRoot(arr);
// console.log(result); // 16.73320053068151

// =================================================================
// 3.
function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num % 2 == 1) {
    return true;
  } else return false;
}

// console.log(isPrime(17)); // true
// console.log(isPrime(12)); // false

// =================================================================
// 4.
function openWindow(url, width, height) {
  window.open(url, "_blank", width, height);
}

// openWindow("https://www.example.com", 800, 600);

// =================================================================
// 5.
function detectBrowser() {
  const userAgent = navigator.userAgent;
  let browserName;
  let browserVersion;

  // Detect Chrome
  if (/Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor)) {
    browserName = "Google Chrome";
    browserVersion = userAgent.match(/Chrome\/(\d+)/)[1];
  }
  // Detect Firefox
  else if (/Firefox/.test(userAgent)) {
    browserName = "Mozilla Firefox";
    browserVersion = userAgent.match(/Firefox\/(\d+)/)[1];
  }
  // Detect Safari
  else if (
    /Safari/.test(userAgent) &&
    /Apple Computer/.test(navigator.vendor)
  ) {
    browserName = "Safari";
    browserVersion = userAgent.match(/Version\/(\d+)/)[1];
  }
  // Detect Internet Explorer
  else if (/MSIE/.test(userAgent) || /Trident/.test(userAgent)) {
    browserName = "Internet Explorer";
    browserVersion = userAgent.match(/(?:MSIE |rv:)(\d+)/)[1];
  }
  // Detect Edge
  else if (/Edge/.test(userAgent)) {
    browserName = "Microsoft Edge";
    browserVersion = userAgent.match(/Edge\/(\d+)/)[1];
  }
  // Default to unknown browser
  else {
    browserName = "Unknown";
    browserVersion = "Unknown";
  }

  return {
    name: browserName,
    version: browserVersion,
  };
}
const browserInfo = detectBrowser();

// console.log('Browser Name:', browserInfo.name);
// console.log('Browser Version:', browserInfo.version);

// =================================================================
// 6.
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error.message);
        }
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
}

getCurrentLocation()
  .then((location) => {
    console.log("Latitude:", location.latitude);
    console.log("Longitude:", location.longitude);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// =================================================================
// 7.
document.addEventListener("click", function (event) {
  var x = event.clientX;
  var y = event.clientY;
  // alert("Clicked coordinates: (" + x + ", " + y + ")");
});

document.addEventListener("keydown", function (event) {
  var keyCode = event.keyCode || event.which;
  // alert('Key code: ' + keyCode);
});

const imageElement = document.getElementById("img");

imageElement.addEventListener("mouseover", function () {
  imageElement.src = "https://unsplash.it/350/200";
  // console.log(imageElement);
});

// =================================================================
// 8.
const button = document.getElementById("button");
const p = document.getElementById("p");

button.addEventListener("click", function () {
  p.innerHTML = "Button Clicked!";
});
// =================================================================
// 9.
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Regular expression for validating name (only letters)
  const nameRegex = /^[A-Za-z]+$/;

  // Regular expression for validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regular expression for validating password (minimum 8 characters, one uppercase letter, one lowercase letter, one digit)
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Reset previous error messages
  resetErrorMessages();

  // Validate name
  if (name === "") {
    displayErrorMessage(nameInput, "Name is required");
  } else if (!nameRegex.test(name)) {
    displayErrorMessage(nameInput, "Name should contain only letters");
  }

  // Validate email
  if (email === "") {
    displayErrorMessage(emailInput, "Email is required");
  } else if (!emailRegex.test(email)) {
    displayErrorMessage(emailInput, "Invalid email format");
  }

  // Validate password
  if (password === "") {
    displayErrorMessage(passwordInput, "Password is required");
  } else if (!passwordRegex.test(password)) {
    displayErrorMessage(passwordInput, "Invalid password format");
  }

  // Validate confirm password
  if (confirmPassword === "") {
    displayErrorMessage(confirmPasswordInput, "Confirm Password is required");
  } else if (confirmPassword !== password) {
    displayErrorMessage(confirmPasswordInput, "Passwords do not match");
  }

  // Submit the form if no errors
  if (!document.getElementsByClassName("error-message").length) {
    // Form is valid, you can perform further actions here
    alert("Form submitted successfully");
    form.reset();
  }
});

function displayErrorMessage(inputElement, message) {
  inputElement.classList.add("error");
  const errorMessage = document.createElement("span");
  errorMessage.className = "error-message";
  errorMessage.innerText = message;
  inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
}

function resetErrorMessages() {
  const errorMessages = document.getElementsByClassName("error-message");
  while (errorMessages[0]) {
    errorMessages[0].parentNode.removeChild(errorMessages[0]);
  }

  const errorInputs = document.getElementsByClassName("error");
  while (errorInputs[0]) {
    errorInputs[0].classList.remove("error");
  }
}

// =================================================================
// 10.

const newBtn = document.getElementById("newBtn");
const newPara = document.getElementById("newParagraph");
newBtn.innerHTML = "Click to highlight";
newPara.innerHTML = "This is a paragraph";

function addHighlightClass() {
  const paragraph = document.getElementById("newParagraph");
  paragraph.classList.add("highlight");
}

newBtn.addEventListener("click", addHighlightClass);

// =================================================================
// 11.

const ul = document.getElementById("ul");

function createListItems() {
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  }
}

createListItems();

// =================================================================
// 12.
const container = document.getElementsByClassName("container");
const newImg = document.getElementById("newImg");
const imgBtn = document.getElementById("imgBtn");

// console.log(imgBtn);

imgBtn.addEventListener("click", function () {
  newImg.src = "https://unsplash.it/350/200?image=39";
});

// =================================================================
// 13.
const queryPara = document.querySelectorAll("#para1 , .para3");

for (let i = 0; i < queryPara.length; i++) {
  queryPara[i].style.color = "red";
}

// =================================================================
// 14.
async function sendGetRequest() {
  const url = "https://jsonplaceholder.typicode.com/users"; 
  // the given url (https://api.example.com/data) is not working

  let res = await axios.get(url)
  console.log(res.data)
}

// sendGetRequest();

// =================================================================
// 15.
async function sendPostRequest() {
  const url = "https://crud.teamrabbil.com/api/v1/CreateProduct";
  // the given url (https://api.example.com/submit) is not working
  const data = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  let res = await axios.post(url, data)
  // console.log(res)
  if (res.status === 200) {
    // alert("Request submitted succesfully")
  }

}

sendPostRequest();
