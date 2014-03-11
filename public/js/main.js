require.config({
    paths: {
        "socket.io": "//cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.16/socket.io.min",
    },
    shim: {
        "socket.io": {
            exports: "io",
        },
    },
});
require(['tag'], function (app) {
    app.run();
});
