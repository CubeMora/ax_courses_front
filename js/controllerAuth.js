$(document).ready(function () {
    $('#loginForm').submit(function (e) {
        e.preventDefault(); 

        const formData = {
            email: $('input[name="username"]').val(),
            password: $('input[name="password"]').val(),
            returnSecureToken: true
        };

        
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/auth/login', 
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function (data) {

                console.log(data);
                alert(data);

                let response = JSON.parse(data);

                localStorage.setItem("signed", true);
                localStorage.setItem("userEmail", response.email);
                location.reload();
        
            },
            error: function (error) {
                
                console.error('Error:', error);
            }
        });
    });
});
