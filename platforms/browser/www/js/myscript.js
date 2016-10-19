$(function () {
    "use strict";

    $("#scanner").click(function () {
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                alert("Information: " + result.text);// + "\n" +
                    //"Format: " + result.format + "\n" +
                    //"Cancelled: " + result.cancelled);
            },
            function (error) {
                alert("Scanning failed " + error);
            }
        );
    });
});