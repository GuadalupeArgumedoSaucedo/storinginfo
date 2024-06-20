function submitForm() {
    let name = document.getElementById('name').value;
    let role = document.querySelector('input[name="role"]:checked').value;
     // Save the name value to the browser's local storage with the key 'userName'
    localStorage.setItem('userName', name);
    // Save the role value to the browser's local storage with the key 'userRole'
    localStorage.setItem('userRole', role);
    // Redirect the browser to the 'information.html' page
    location.href = "information.html";
}