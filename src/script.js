document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;

    // Here you can handle the form data, e.g., send it to a server or display it
    alert(`Welcome, ${name} ${surname} from ${country}! Your email is ${email}.`);
});
