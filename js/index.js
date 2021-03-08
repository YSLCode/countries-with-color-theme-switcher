let req = new XMLHttpRequest();
req.open(
    "GET",
    "https://restcountries.eu/rest/v2/all?fields=name;capital;population;borders;flag;"
);

let template = `<div class="country">`;

req.onload = function() {
    console.log(this.response);
    let countries = JSON.parse(this.response);
    let content = "";
    for (let i = 0; countries[i]; i++) {
        content += template + countries[i].capital + "</div> \n";
    }
    document.getElementById("app").innerHTML = content;
};
req.send();