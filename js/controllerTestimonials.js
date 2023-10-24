$(document).ready(function () {

    $.get("http://localhost:8080/api/testimonials/", function (data) {
        var testimonialCarousel = $("#testimonial-carousel");

        
        testimonialCarousel.empty();

        
        data.forEach(function (testimonial) {
            var testimonialItem = $("<div class='text-center'></div>");
            testimonialItem.append("<i class='fa fa-3x fa-quote-left text-primary mb-4'></i>");
            testimonialItem.append("<h4 class='font-weight-normal mb-4'>" + testimonial.descriptionTestimonial + "</h4>");
            testimonialItem.append("<img class='img-fluid mx-auto mb-3' src='" + testimonial.imgUrl + "' alt=''>");
            testimonialItem.append("<h5 class='m-0'>" + testimonial.nameTestimonial + "</h5>");
            testimonialItem.append("<span>" + testimonial.professionTestimonial +  "</span>");

            testimonialCarousel.append(testimonialItem);
        });

        
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            loop: true,
            items: 1
        });
    });
});