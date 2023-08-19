const allCodeInputs = document.querySelectorAll("#v-input-pin-form-container .v-pins-container .form-control");

function pasteCodes(e) {
	/* document listens for a paste event,
  if the element recieving it is not an input tag,
  don't paste it 
  */
	if (e.target.localName !== "input") return;

	// get the pincodes
	let pinCodes = (e.clipboardData || window.clipboardData).getData("text");
	/*
    if the length of the code
    is not the same as the the length 
    of the input, do nothing
    */
	if (pinCodes.length !== allCodeInputs.length) return;

	allCodeInputs.forEach((eachInput, index) => {
		eachInput.focus();
		eachInput.value = pinCodes[index];
	});
}

// document or web browser listen for paste event
document.addEventListener("paste", pasteCodes);

allCodeInputs.forEach((input, index, arrayOfInputs) => {
	input.addEventListener("input", function (event) {
		if (event.target.value.length === 0) return;
		arrayOfInputs[index + 1]?.focus();
	});
});

allCodeInputs.forEach((input, index, arrayOfInputs) => {
	input.addEventListener("input", function (e) {
		if (e.inputType == "deleteContentBackward") {
			arrayOfInputs[index - 1]?.focus();
		}
	});
});
