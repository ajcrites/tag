define(["socket.io", "jquery"], function (io, $) {
    var rand = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return {
        run: function () {
            var socket = io.connect("//" + window.location.host);
            socket.on("connected", function (data) {
                console.log("Data: " + data);
            });

            $("<i>").css({
                display: "inline-block",
                position: "fixed",
                width: "20px",
                height: "20px",
                backgroundColor: "hsl(" + rand(0, 360) + "," + rand(70, 100) + "%," + rand(35, 55) + "%)",
                left: Math.abs(rand(0, $(window).width()) - 20),
                top: Math.abs(rand(0, $(window).height()) - 20),
            }).appendTo("body");
        },
    };
});
