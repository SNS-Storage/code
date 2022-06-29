setTimeout(function(){
    window.location.reload(1);
 }, 5000);

function convertToGB(val) {
    let bytesValue = val;
    let gbValue = (bytesValue / (1024 * 1024 * 1024)).toFixed(2);
    return gbValue;
}


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var data;
let usedSize;
let freeSize; 
readTextFile("./sample_json.json", function(text){
    data = JSON.parse(text);
    usedSize=convertToGB(data.Used);
    freeSize=convertToGB(data.Free);
    document.getElementById("used").innerHTML = usedSize + " GB" ;
    document.getElementById("free").innerHTML = freeSize + " GB";
    console.log(data);
});


function calculatePayment() {
    document.getElementById("price").innerHTML = usedSize/1000000;  
}



