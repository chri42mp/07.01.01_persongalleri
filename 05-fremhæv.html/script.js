let persons;
let filter = "alle";
const header = document.querySelector("header h1");

const filterBtn = document.querySelectorAll("nav button");
filterBtn.forEach((button) => button.addEventListener("click", filterPersons));

function filterPersons() {
  filter = this.dataset.troende;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
  header.textContent = this.textContent;
  vis();
}

const endpoint = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";
const moreinfo = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

async function getData() {
  const response = await fetch(endpoint, moreinfo);
  persons = await response.json();
  console.log(persons);
  vis();
}

function vis() {
  const holder = document.querySelector("#holder");
  const template = document.querySelector("template").content;
  holder.textContent = "";
  persons.forEach((person) => {
    if (filter == person.troende || filter == "alle") {
      const clone = template.cloneNode(true);
      clone.querySelector("img").src = "faces/" + person.billede;
      clone.querySelector(".name").textContent = person.fornavn;
      clone.querySelector(".mail").textContent = person.email;
      holder.appendChild(clone);
    }
  });
}
getData();
