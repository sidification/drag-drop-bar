
// select the input and the drop zone element
document.querySelectorAll(".drop-zone__input").forEach(inputElement => {
const dropZoneElement = inputElement.closest(".drop-zone");

// now that the elements have been selected, add event listeners
dropZoneElement.addEventListener('dragover', e => {
    dropZoneElement.classList.add("drop-zone--over")
})
}
)