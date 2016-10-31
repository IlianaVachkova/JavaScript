//Task1
//Write a function that formats a string. The function should have placeholders, as shown in the example
//o	Add the function to the String.prototype
function createPersons() {
    var options = { name: 'John', age: 13, gender: 'male' };
    var string = "'My name is #{name} and I am #{age}-years-old #{gender}'";

    string = string.format(options);

    var container = document.getElementById('output');
    container.innerHTML = string;
}

String.prototype.format = function (options) {
    return this.replace(/#{([A-z0-9]+)}/g, function (match, $1) {
        return options[$1];
    });
}


//Task2
//•	Write a function that puts the value of an object into the content/attributes of HTML tags.
//o	Add the function to the String.prototype

function createPersons() {
    var options = { name: 'Elena', link: 'http://telerikacademy.com' };
    var string = '<a data-bind-href="link" data-bind-class="name" data-bind-content="name" ></а>'

    string = string.format(options);

    var container = document.getElementById('output');
    container.innerText = string;
}

String.prototype.format = function (options) {
    return this.replace(/(<.+content="([A-z0-9]+)".+>)(<\/.+>)/g, function (match, $0, $1, $2) {
        return $0 + options[$1] + $2;
    });
}