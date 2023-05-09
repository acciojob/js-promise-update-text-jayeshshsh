//your JS code here. If required.
const outputElement = document.getElementById("output");

function delayedMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

delayedMessage().then((message) => {
  outputElement.textContent = message;
});