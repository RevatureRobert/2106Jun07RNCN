function inject(json) {
  const brand = document.getElementById("tvBrand");
  const size = document.getElementById("tvSize");
  const type = document.getElementById("tvType");
  brand.innerHTML = json.brand;
  size.innerHTML = json.screenSize;
  type.innerHTML = json.type;
}

////////////////////////////////
// AJAX
function injectWithAjax() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const json = JSON.parse(this.responseText);
      inject(json);
    }
  };
  xhr.open("GET", "http://localhost:3000/tv", true);
  xhr.send();
}
////////////////////////////////
// fetch
async function injectWithFetch() {
  const res = await fetch("http://localhost:3000/tv");
  const json = await res.json();
  inject(json);
}

////////////////////////////////
injectWithFetch();
