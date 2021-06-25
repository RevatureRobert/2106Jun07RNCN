function inject(json) {
    const name = document.getElementById("dropName")[0];
    const gen = document.getElementById("generalName");
    const monsters = document.getElementById("monster");
    const rate = document.getElementById("dropRate");
    const rank = document.getElementById("minWorldRank");
    const rare = document.getElementById("rarity");

    name.innerHTML = json.dropName;
    gen.innerHTML = json.generalName;
    monsters.innerHTML = json.monster;
    rate.innerHTML = json.dropRate;
    rank.innerHTML = json.minWorldRank;
    rare.innerHTML = json.rarity;

}
  
  // fetch
async function injectWithFetch() {
    const res = await fetch("http://localhost:3000/monsterDrop/all");
    const json = await res.json();
    inject(json);
}
  
injectWithFetch();