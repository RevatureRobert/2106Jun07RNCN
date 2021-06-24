function inject(json){
  document.getElementById("tvBrand").innerHTML = json.brand;
  document.getElementById("tvSize").innerHTML = json.screenSize;
  document.getElementById("tvType").innerHTML = json.type;
}

/**
 * AJAX method
 * Advantages: used in legacy code/browsers
 * Disadvantages: synchronous, verbose
 */
function injectWithAjax() {
  const xhr = new XMLHttpRequest;

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      inject(JSON.parse(this.responseText));
    }
  };

  xhr.open('GET', 'http://localhost:3000/tv', true)
  xhr.send();
}

/**
 * FETCH method
 * Advantages: asynchronous, less typing
 * Disadvantages: may not work in older browsers
 */
async function injectWithFetch() {
  const res = await fetch("http://HTPC:3000/tv");
  const json = await res.json();
  inject(json);
}

// Functions are not run until called
injectWithFetch();