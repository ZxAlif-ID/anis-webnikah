
function copy(){
    var text = document.getElementById("copy");
    text.select();
    document.exeCommand("copy");
    alert("Copied the text: " + text.value);
}