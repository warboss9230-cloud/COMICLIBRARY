const heroes = {
  nagraj: {
    name: "Nagraj",
    bio: "King of Snakes with superhuman abilities.",
    banner: "images/banners/nagraj.jpg",
    powers: ["Snake Control", "Regeneration", "Super Strength"],
    comics: ["comic1.jpg","comic2.jpg"]
  },
  doga: {
    name: "Doga",
    bio: "Dark vigilante of Mumbai.",
    banner: "images/banners/doga.jpg",
    powers: ["Martial Arts", "Firearms Expert"],
    comics: ["comic3.jpg","comic4.jpg"]
  }
};

const params = new URLSearchParams(window.location.search);
const heroKey = params.get("hero");

if(heroKey && heroes[heroKey]){
  const hero = heroes[heroKey];

  document.getElementById("heroName").textContent = hero.name;
  document.getElementById("heroBio").textContent = hero.bio;
  document.getElementById("heroBanner").style.backgroundImage = 
    `url(${hero.banner})`;

  hero.powers.forEach(power=>{
    const li = document.createElement("li");
    li.textContent = power;
    document.getElementById("heroPowers").appendChild(li);
  });

  hero.comics.forEach(comic=>{
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<img src="images/comics/${comic}" width="100%">`;
    document.getElementById("heroComics").appendChild(div);
  });
}
