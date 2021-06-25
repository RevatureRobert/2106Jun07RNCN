function inject(json) {
    const brand = document.getElementById("tvBrand");
    const size = document.getElementById("tvSize");
    const type = document.getElementById("tvType");
    brand.innerHTML = json.brand;
    size.innerHTML = json.screenSize;
    type.innerHTML = json.type;
}
  
  // fetch
async function injectWithFetch() {
    const res = await fetch("http://localhost:3000/tv");
    const json = await res.json();
    inject(json);
}
  
injectWithFetch();