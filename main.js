
// select the input and the drop zone element
document.querySelectorAll(".drop-zone--input").forEach(inputElement => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    // now that the elements have been selected, add event listeners
    dropZoneElement.addEventListener('dragover', e => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over")
    });

    ["dragleave", "dragend"].forEach(type => {
        dropZoneElement.addEventListener(type, e => {
            dropZoneElement.classList.remove('drop-zone--over')

        })
    })

    dropZoneElement.addEventListener("drop", e=> {
        e.preventDefault();
        if(e.dataTransfer.files) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }
        dropZoneElement.classList.remove("drop-zone--over");
    }) 

    function updateThumbnail(dropZoneElement, file) {
        let thumbnailElement = dropZoneElement.querySelector('.drop-zone--thumb');
        console.log(file)

        // first time - remove the prompt
        if(dropZoneElement.querySelector('.drop-zone--prompt')) {
            dropZoneElement.querySelector('.drop-zone--prompt').remove()
        }
        // first time there is no thumb element so we'll create it
        if (!thumbnailElement) {
            thumbnailElement = document.createElement("div");
            thumbnailElement.classList.add("drop-zone--thumb");
            dropZoneElement.appendChild(thumbnailElement);
        }

        thumbnailElement.dataset.label = file.name;

        // show thumbnail for image files
        if(file.type.startsWith("image/")) {
            const reader = new FileReader()
            reader.readAsDataURL(file);
            reader.onload = () => {
                thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
            }
        } else {
            thumbnailElement.style.backgroundImage = null;

        }

    }
    });