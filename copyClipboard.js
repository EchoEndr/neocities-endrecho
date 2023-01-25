function clipboardCopy() {
    var text = "echolotl#1007";
    var discord = document.getElementById('discord');
    var node=document.createTextNode(" copied discord to clipboard!!!!")
    console.log(discord);
    navigator.clipboard.writeText(text).then(function() {
    var success = 1;
    console.log(success);
    console.log('Async: Copying to clipboard was successful!');
    }, 
    function(err) {
    console.error('Async: Could not copy text: ', err);
    });
    document.getElementById("discord").appendChild(node);
    }