define(['socket.io'], function (io) {
    return {
        run: function () {
            var socket = io.connect("//" + window.location.host);
            socket.on("connected", function (data) {
                console.log("Data: " + data);
            });
        },
    };
});
