$(document).ready(function() {
    // Validate form on submission
    $('#login-form').submit(function(e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        // Validate username and password
        if (username === '') {
            alert('Please enter a username.');
        } else if (password === '') {
            alert('Please enter a password.');
        } else {
            // Submit form if valid
            alert('You have successfully logged in!');
            $(this).unbind('submit').submit();
        }
    });
});