
function Addition() {
    var nhapNum1 = document.getElementById("num1").value;
    var nhapNum2 = document.getElementById("num2").value;
    var so1 = parseFloat(nhapNum1);
    var so2 = parseFloat(nhapNum2);
    kq = so1 + so2;
    document.getElementById("showResult").innerHTML = "Result Addition: "+kq;
}
function Subtraction() {
    var nhapNum1 = document.getElementById("num1").value;
    var nhapNum2 = document.getElementById("num2").value;
    var so1 = parseFloat(nhapNum1);
    var so2 = parseFloat(nhapNum2);
    kq = so1 - so2;
    document.getElementById("showResult").innerHTML = "Result Subtraction: "+kq;
}
function Mutilplication() {
    var nhapNum1 = document.getElementById("num1").value;
    var nhapNum2 = document.getElementById("num2").value;
    var so1 = parseFloat(nhapNum1);
    var so2 = parseFloat(nhapNum2);
    kq = so1 * so2;
    document.getElementById("showResult").innerHTML = "Result Mutilplication: "+kq;
}
function Division() {
    var nhapNum1 = document.getElementById("num1").value;
    var nhapNum2 = document.getElementById("num2").value;
    var so1 = parseFloat(nhapNum1);
    var so2 = parseFloat(nhapNum2);
    kq = so1 / so2;
    document.getElementById("showResult").innerHTML = "Result Division: "+kq;
}