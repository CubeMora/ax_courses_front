$(document).ready(function() {
    const apiUrl = 'http://localhost:8080/api/testimonials/'

    // Fetch all testimonials
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
            data.forEach(function(testimonial) {
                $('#testimonials-table tbody').append(`
                    <tr>
                        <td>${testimonial.nameTestimonial}</td>
                        <td>${testimonial.imgUrl}</td>
                        <td>${testimonial.descriptionTestimonial}</td>
                        <td>${testimonial.professionTestimonial}</td>
                        <td>
                            <button class="edit-button" data-id="${testimonial.id}">Edit</button>
                            <button class="delete-button" data-id="${testimonial.id}">Delete</button>
                        </td>
                    </tr>
                `);
            });
        }
    });

    // Add or update testimonial
    $('#testimonial-form').on('submit', function(e) {
        e.preventDefault();
        var id = $('#testimonial-id').val();
        var nameTestimonial = $('#name').val();
        var imgUrl = $('#imgUrl').val();
        var descriptionTestimonial = $('#description').val();
        var professionTestimonial = $('#profession').val();
        
        var data = {};
        if (nameTestimonial) data.nameTestimonial = nameTestimonial;
        if (imgUrl) data.imgUrl = imgUrl;
        if (descriptionTestimonial) data.descriptionTestimonial = descriptionTestimonial;
        if (professionTestimonial) data.professionTestimonial = professionTestimonial;
    
        var url = apiUrl;
        if (id) {
            url += id;
        }
        var method = id && Object.keys(data).length < 4 ? 'PATCH' : (id ? 'PUT' : 'POST');
        $.ajax({
            url: url,
            method: method,
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function() {
                location.reload();
            }
        });
    });

    // PUT Fetch
    $(document).on('click', '.edit-button', function() {
        var id = $(this).data('id');
        $.ajax({
            url: apiUrl + id,
            method: 'GET',
            success: function(data) {
                $('#testimonial-id').val(data.id);
                $('#name').val(data.nameTestimonial);
                $('#imgUrl').val(data.imgUrl);
                $('#description').val(data.descriptionTestimonial);
                $('#profession').val(data.professionTestimonial);
            }
        });
    });

    // Delete testimonial
    $(document).on('click', '.delete-button', function() {
        var id = $(this).data('id');
        $.ajax({
            url: apiUrl + id,
            method: 'DELETE',
            success: function() {
                location.reload();
            }
        });
    });
});