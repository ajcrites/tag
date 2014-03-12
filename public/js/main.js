require.config({
    paths: {
        "socket.io": "//cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.16/socket.io.min",
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min",
    },
    shim: {
        "jquery": {
            exports: "$",
        },
        "socket.io": {
            exports: "io",
        },
    },
});
require(['tag'], function (app) {
    app.run();
});
