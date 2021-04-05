// let req = new XMLHttpRequest();
// req.open(
//   "GET",
//   "https://restcountries.eu/rest/v2/all?fields=name;capital;population;borders;flag;"
// );


let content = "";

let req = fetch(
  "https://restcountries.eu/rest/v2/all?fields=name;capital;population;borders;flag;region;"
)
  .then((response) => (response.status == 200 ? response.json() : "error"))
  .then((data) => {
    for (let i = 0; data[i]; i++) {
        content += `<div class="country">
                        <img src="${data[i].flag}" >
        <span class="country-name">` + data[i].name + "</span></div> \n";
      }

      document.getElementById("body-content").innerHTML = content
  })

console.log("Sync");


