// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    let userName = localStorage.getItem('userName');
    let userRole = localStorage.getItem('userRole');
    
    if (userRole === 'student') {
        document.getElementById('welcomeMessage').innerText = 'Welcome Student ' + userName;
         // Set the inner HTML of the element with id 'content' to include specific buttons and a paragraph for students
        document.getElementById('content').innerHTML = `
            <button>1</button>
            <button>2</button>
            <p class="student-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ultrices turpis. Integer vel urna et sapien viverra tincidunt.</p>
        `;
    } else if (userRole === 'instructor') {
        document.getElementById('welcomeMessage').innerText = 'Welcome Instructor ' + userName;
        // Set the inner HTML of the element with id 'content' to include specific buttons and a paragraph for instructors
        document.getElementById('content').innerHTML = `
            <button>1</button>
            <button>2</button>
            <p class="instructor-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed feugiat semper risus, non condimentum eros.</p>
        `;
    }
});