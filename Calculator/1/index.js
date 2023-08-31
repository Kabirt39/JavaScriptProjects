// function appendToResult(value) {
//     document.getElementById('result').value += value;
// }

// function clearResult() {
//     document.getElementById('result').value = '';
// }

const disCal = document.getElementById("result");
function appendToResult(val){
    disCal.value += val;
}

function clearResult(val){
    disCal.value = "0";
}

function clearOnLatter(val){
    disCal.value = disCal.value.toString().slice(0, -1);
}


function sum(val){
    disCal.value = eval(disCal.value);
}
