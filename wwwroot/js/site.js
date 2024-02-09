﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculateButton').click(function () {
        var hours = parseInt($('#hours').val());
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a valid positive number for hours.');
            return;
        }

        var hourlyRate = parseFloat($('#hourlyRate').val());
        var total = hours * hourlyRate;
        $('#total').val(total.toFixed(2));
    });
});

