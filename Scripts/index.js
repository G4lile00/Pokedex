const GetPokemons = () => {
  const promises = [];

  for (let i = 1; i < 152; i++) {
    promises.push(
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => res.json()),
    );
  }
  Promise.all(promises).then((data) => {
    const pokemon = data.map((poke) => ({
      name: poke.name,
      id: poke.id,
      image: poke.sprites["front_default"],
      type: poke.types.map((type) => type.type.name),
    }));
    Makelist(pokemon);
  });
};

function Makelist(object) {
  let pokedex = document.getElementById("pokedex");
  const Lists = object
    .map(
      (individual) => `<li>
    <div class="Card">
    <img class="Card-img" src="${individual.image}" alt="${individual.id}">
    <div class="Card-info">
 
    <h3 class = "PokeName" id="${individual.name}">${individual.name}</h3>
    <p class = "PokeType">${individual.type}</p>
    </div>
    <div class="Card-id">
    <h2>${individual.id}</h2>
    </div>
    </div>
    </li>`,
    )
    .join("");
  pokedex.innerHTML = Lists + pokedex.innerHTML;
}

GetPokemons();

const button = document.getElementById("searchButton");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const inputID = document.getElementById("searchInputID").value;
  const inputName = document.getElementById("searchInputName").value;
  const image = document.querySelector(`[alt="${inputID}"]`);
  const name = document.querySelector(`[id="${inputName}"]`);

  if (image) {
    const Card = image.parentElement.parentElement;
    window.scrollTo(0, image.offsetTop - 400);
    Card.classList.add("bouncer");
    setTimeout(() => {
      Card.classList.remove("bouncer");
    }, 2000);
  }
  if (name) {
    const Card = name.parentElement.parentElement;
    window.scrollTo(0, name.offsetTop - 400);
    Card.classList.add("bouncer");
    setTimeout(() => {
      Card.classList.remove("bouncer");
    }, 2000);
  }
});
