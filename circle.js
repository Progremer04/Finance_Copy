let Number = document.getElementById("number");
let j = 0;
setInterval(() => {
    if (j == 67)
        clearInterval();
    else {
        ++j;
        Number.innerHTML = j + "% ";
    }
}, 30);
let Number1 = document.getElementById("number1");
let i = 0;
setInterval(() => {
    if (i == 48)
        clearInterval();
    else {
        ++i;
        Number1.innerHTML = i + "% ";
    }
}, 30);
let N1 = document.getElementById("n1");
let q = 0;
setInterval(() => {
    if (q == 579.000)
        clearInterval();
    else {
        q = q + 1;
        N1.innerHTML = "$ " + q;
    }
}, 10);
let N2 = document.getElementById("n2");
let q1 = 0;
setInterval(() => {
    if (q1 == 79.000)
        clearInterval();
    else {
        q1 = q1 + 1;
        N2.innerHTML = "$ " + q1;
    }
}, 10);
let N3 = document.getElementById("n3");
let q3 = 0;
setInterval(() => {
    if (q3 == 92.000)
        clearInterval();
    else {
        q3 += 1;
        N3.innerHTML = "$ " + q3;
    }
}, 10);
let N4 = document.getElementById("n4");
let q4 = 0;
setInterval(() => {
    if (q4 == 179.000)
        clearInterval();
    else {
        q4 += 1;
        N4.innerHTML = "$ " + q4;
    }
}, 10);

function clearInput() {
    document.getElementById("myInput").value = "";
}
