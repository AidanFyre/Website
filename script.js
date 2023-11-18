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
