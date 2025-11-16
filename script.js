const output = document.getElementById("output");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

lengthSlider.oninput = () => {
  lengthValue.textContent = lengthSlider.value;
};

// CHALLENGE: Complete this function 👇
function generatePassword() {
  let length = parseInt(lengthSlider.value);

  let chars = "";
  if (document.getElementById("uppercase").checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (document.getElementById("lowercase").checked) chars += "abcdefghijklmnopqrstuvwxyz";
  if (document.getElementById("numbers").checked) chars += "0123456789";
  if (document.getElementById("symbols").checked) chars += "!@#$%^&*()_+-=";

  // TODO: create password logic
}

// Generate button
document.getElementById("generateBtn").onclick = () => {
  let password = generatePassword();
  output.textContent = password;
};

// TODO: Save password to localStorage
// TODO: Load saved passwords on load
// TODO: Delete password
// TODO: Copy password
