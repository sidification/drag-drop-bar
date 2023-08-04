
// select the input and the drop zone element
document.querySelectorAll(".drop-zone--input").forEach(inputElement => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    // now that the elements have been selected, add event listeners
    dropZoneElement.addEventListener('dragover', e => {
        dropZoneElement.classList.add("drop-zone--over")
    });

    ["dragleave", "dragend"].forEach(type => {
        dropZoneElement.addEventListener(type, e => {
            dropZoneElement.classList.remove('drop-zone--over')

        })
    })
    }
)