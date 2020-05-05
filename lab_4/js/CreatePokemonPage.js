const fetchPokemon = async () => {
  let number = 1 + Math.random () * 233; // получить рандомного покемона
  number = Math.floor (number);
  const ability_url = 'https://pokeapi.co/api/v2/ability/' + number;
  let effect = await fetch (ability_url)
    .then (res => res.json ())
    .then (data => {
      return data.effect_entries[0].effect; // получить эфект покемона
    });

  const name_url = 'https://pokeapi.co/api/v2/pokemon/' + number;
  let name = await fetch (name_url).then (res => res.json ()).then (data => {
    return data.name; // получить имя покемона
  });

  let img = await fetch (name_url).then (res => res.json ()).then (data => {
    return data.sprites.front_default; // получить фото покемона
  });
  //console.log (img);
  document.getElementById ('name').innerHTML = name;
  let img_html = document.getElementById ('photo');
  img_html.src = img;
  document.getElementById ('efffect').innerHTML = effect;
};

if (window.location.hash === '#about') {
  fetchPokemon ();
}
