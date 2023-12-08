// Nouveau fichier JavaScript pour le formulaire de contact

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Fetch the form data
    const formData = new FormData(event.target);

    // You can access the form data using formData.get('inputName')

    // TODO: Implement the logic to send the form data (e.g., using fetch API or any backend service)

    // For demonstration purposes, let's log the form data to the console
    console.log('Form Data:', Object.fromEntries(formData.entries()));
});
