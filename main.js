import './style.css'

const popupTrigger = document.getElementById("popup-trigger");
const popupOverlay = document.getElementById("popup-overlay");
const closePopupButton = document.getElementById("close-popup-button");

popupTrigger.addEventListener("click", function() {
  popupOverlay.style.display = "block";
  var text = 'jackyoukstetter1@gmail.com';

      // Create a new ClipboardItem object
      var clipboardItem = new ClipboardItem({ "text/plain": new Blob([text], { type: "text/plain" }) });

      // Use the clipboard.write() method to copy the text to the clipboard
      navigator.clipboard.write([clipboardItem]).then(
        function () {
          // The text was successfully copied to the clipboard
        },
        function (err) {
          // There was an error copying the text to the clipboard
          console.error("Error copying text to clipboard: " + err);
        })
  setTimeout(() => popupOverlay.style.display = "none", 500)
});
