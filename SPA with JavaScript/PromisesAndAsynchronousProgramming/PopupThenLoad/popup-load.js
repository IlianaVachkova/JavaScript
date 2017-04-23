window.onload = function () {
    'use strict';

    function fadeIn() {
        var timer,
            popupDiv = document.getElementById('popup'),
            initialOpacity = 0,
            increment = 0.005,
            intervalMs = 30;

        popupDiv.style.opacity = initialOpacity;
        popupDiv.textContent = 'Redirecting to Stack Overflow';

        return new Promise(function (resolve) {
            timer = setInterval(function () {
                if (popupDiv.style.opacity >= 1) {
                    clearInterval(timer);
                    resolve();
                }

                popupDiv.style.opacity = initialOpacity;
                initialOpacity += increment;
            }, intervalMs);
        });
    }

    function redirect() {
        window.location = 'http://stackoverflow.com/questions/32811884/javascript-promises';
    }

    fadeIn()
        .then(redirect);

};