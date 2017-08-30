$().ready(iniciar);

function iniciar() {
    $("#btn1").click(ej1);
}
var cod = 0;
var resp = 0;
function ej1() {
    if (!isNaN($("#num1").val()) && !isNaN($("#num2").val())) {
        $("#error1").empty();
        $("#resp1").empty();
        txt = parseInt($("#opciones").val());
        var num1 = parseInt($("#num1").val());
        var num2 = parseInt($("#num2").val());
        resp = 0;
        cod = 1;
        if (txt === 1) {
            resp = num1 + num2;
        } else if (txt === 2) {
            resp = num1 - num2;
        } else if (txt === 3) {
            resp = num1 / num2;
        } else {
            resp = num1 * num2;
        }
    } else {
        $("#error1").empty();
        $("#resp1").empty();
        try {
            num1 = eval($("#num1").val());
            num2 = eval($("#num2").val());
        } catch (err) {
            num1 = 0;
            num2 = 0;
        }
        if (num1 !== 0 && num2 !== 0) {
            $("#error1").html(num1 + " hehe " + num2);
            if (txt === 1) {
                resp = num1 + num2;
            } else if (txt === 2) {
                resp = num1 - num2;
            } else if (txt === 3) {
                resp = num1 / num2;
            } else {
                resp = num1 * num2;
            }
        } else {
            cod = 0;
        }
    }
    if (cod === 1) {
        $("#resp1").html("El resultado es: " + resp);
    } else {
        $("#resp1").html("Intente nuevamente con números.");
    }
}