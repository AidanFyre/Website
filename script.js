document.addEventListener('DOMContentLoaded', (event) => {
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
});

document.addEventListener('DOMContentLoaded', (event) => {
    // ... existing code ...

    // Function to handle file selection or drop
    function handleFiles(files) {
        for (let i = 0, len = files.length; i < len; i++) {
            if (validateImage(files[i])) {
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
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            const img = document.createElement('img');
            img.src = reader.result;
            img.style.maxWidth = '200px'; // Set a maximum width for the preview
            img.style.maxHeight = '200px'; // Set a maximum height for the preview
            document.getElementById('preview').innerHTML = '';
            document.getElementById('preview').appendChild(img);
        };
    }

    // Handle files from file input
    imageUpload.addEventListener('change', function (e) {
        handleFiles(this.files);
    });

    // Handle dropped files
    function handleDrop(e) {
        let dt = e.dataTransfer;
        let files = dt.files;
        handleFiles(files);
    }

    // ... rest of the existing code ...
});

