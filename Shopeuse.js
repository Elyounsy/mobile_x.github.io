
setTimeout(function() {
    var textToReplace = ">Rp"; 
    var newText = ">$"; 
    var elementToSearch = document.body;
    var replacedHTML = elementToSearch.innerHTML.replace(new RegExp(textToReplace, "g"), newText);
    elementToSearch.innerHTML = replacedHTML;
}, 100);

