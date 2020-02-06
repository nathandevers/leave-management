// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {
    // https://datatables.net/
    $('#tblData').DataTable();
});

$(function () {
    $(".datepicker").datepicker({
        dateFomat: "yy-mm-dd"
    });
});

$('.click').click(function () {
    var i = $(this).index();
    $('.click').hide();
    $('.info').show();
    $('.info i').show();
})

$('.close').click(function () {
    var i = $(this).index();
    $('.click').show();
    $('.info').hide(); 
    $('.info i').hide(); 
})


function countChars(obj) {
    var maxLength = 300;
    var strLength = obj.value.length;

    if (strLength > maxLength) {
        document.getElementById("charNum").innerHTML = '<span style="color: red;">' + strLength + ' out of ' + maxLength + ' characters</span>';
    } else {
        document.getElementById("charNum").innerHTML = strLength + ' out of ' + maxLength + ' characters';
    }
}