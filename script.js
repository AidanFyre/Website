document.addEventListener('DOMContentLoaded', (event) => {

    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('i'); // Get the icon inside the button

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        // Check if dark mode is active and toggle icon
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

     const dropArea = document.getElementById('dropArea');
    const imageUpload = document.getElementById('imageUpload');

    // Add click event listener to the drop area
    dropArea.addEventListener('click', () => imageUpload.click());

    const form = document.getElementById('renderRequestForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevents the default form submission action

        // Retrieving the values from the form inputs
        const legendName = document.getElementById('legendName').value;
        const legendSkin = document.getElementById('legendSkin').value;
        const legendPose = document.getElementById('legendPose').value;

        console.log('Form Submitted!');
        console.log('Legend Name:', legendName);
        console.log('Legend Skin:', legendSkin);
        console.log('Legend Pose:', legendPose);
    });

    imageUpload.addEventListener('change', function (e) {
        handleFiles(this.files);
    });

    // Setup drag and drop listeners
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });

    dropArea.addEventListener('drop', handleDrop, false);
});

// Prevent default drag behaviors
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Highlight drop area when item is dragged over it
function highlight(e) {
    document.getElementById('dropArea').classList.add('highlight');
}

// Unhighlight drop area
function unhighlight(e) {
    document.getElementById('dropArea').classList.remove('highlight');
}

// Handle dropped files
function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles(files);
}

// Function to handle file selection or drop
function handleFiles(files) {
    for (let i = 0, len = files.length; i < len; i++) {
        if (validateImage(files[i])) {
            console.log('Image File:', files[i]); // Log the file object
            previewImage(files[i]);
        } else {
            alert('Please upload an image file.');
        }
    }
}

// Validate if the file is an image
function validateImage(file) {
    return file.type.match('image.*');
}

// Function to preview the image
function previewImage(file) {
    const reader = new FileReader();

    // Error handling for FileReader
    reader.onerror = function (event) {
        console.error("File could not be read! Code " + event.target.error.code);
        // You can also show an alert or a message on the webpage
        alert("Error reading file.");
    };

    reader.onloadend = function () {
        const img = document.createElement('img');
        img.src = reader.result;
        img.style.maxWidth = '200px'; // Set a maximum width for the preview
        img.style.maxHeight = '200px'; // Set a maximum height for the preview
        document.getElementById('preview').innerHTML = '';
        document.getElementById('preview').appendChild(img);
    };

    reader.readAsDataURL(file);
}
