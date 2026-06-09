$(document).ready(function () {

    $(".slider").each(function () {

        let imagens = [
            $(this).data("img1"),
            $(this).data("img2"),
            $(this).data("img3")
        ];

        let index = 0;
        let img = $(this);

        setInterval(function () {

            index++;

            if (index >= imagens.length) {
                index = 0;
            }

            img.fadeOut(500, function () {
                img.attr("src", imagens[index]);
                img.fadeIn(500);
            });

        }, 3000);

    });

});