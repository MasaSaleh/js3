
var prouduct = document.querySelector(".prouduct");
var namee = document.querySelector("#name");
var price = document.querySelector("#price");
var description = document.querySelector("#description");

var prouducts = [];

prouduct.onsubmit = function (e) {
    e.preventDefault();

    var elements = {
        namee: namee.value,
        price: price.value,
        description: description.value,
    }

    prouducts.push(elements);
    print()
}

function print() {
    var data =" ";
    for (var i = 0; i < prouducts.length; i++) {
        data += ` <tr>
                <td>${prouducts[i].namee}</td>
                <td>${prouducts[i].price}</td>
                <td>${prouducts[i].description}</td>
            </tr>` }
    
    document.querySelector("tbody").innerHTML = data;
}