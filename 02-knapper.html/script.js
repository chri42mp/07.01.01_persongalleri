let person;
let filter = "ja";

const endpoint = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";
const moreinfo = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

async function getData() {
  const response = await fetch(endpoint, moreinfo);
  const person = await response.json();
  console.log(person);
  vis(person);
}

function vis(person) {
  console.log(person);
  const holder = document.querySelector("#holder");
  const template = document.querySelector("template").content;
  person.forEach((person) => {
    if (filter == person.troende) {
      const clone = template.cloneNode(true);
      clone.querySelector("img").src = "faces/" + person.billede;
      clone.querySelector(".name").textContent = person.fornavn;
      clone.querySelector(".mail").textContent = person.email;
      holder.appendChild(clone);
    }
  });
}
getData();
