fetch("https://api.punkapi.com/v2/beers")
  .then((res) => res.json())
  .then(showBeers);

function showBeers(beers) {
  beers.forEach(showBeer);
}

function showBeer(beer) {
  console.log(beer);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = beer.name;
  copy.querySelector("p.tagline").textContent = beer.tagline;
  copy.querySelector("img").src = beer.image_url;
  copy.querySelector("p.description").textContent = beer.description;
  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
