document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function () {
        // Get form values
        const name = document.getElementById("name").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;

        // Get selected car options
        const selectedOptions = Array.from(document.querySelectorAll('input[name="options[]"]:checked')).map(option => option.value);

        // Prepare data to send to the server (you can customize this)
        const formData = {
            name,
            phoneNumber,
            email,
            address,
            selectedOptions
        };

        // Display the collected data (replace this with your database handling code)
        alert("Collected Data:\n" + JSON.stringify(formData, null, 2));
    });
});
