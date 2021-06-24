# Client-side JavaScript
- No internal modules
- Web APIs
- No importing outside of modules
- Web browsers do NOT understand TypeScript

## DOM API
- Document Object Model
- Just a way of working with the HTML document as an object in JS
- DOM Manipulation
- Access, change, delete, etc. elements in the dom

## DevTools
- Developer tools are build directly inside the browser.
- More can be installed through browser extensions.
- Console, elements, network, application are a few important tabs in the devtools to get to know.

## Attaching to HTML
- Can use a script element to write JavaScript directly in the HTML document.
  ```HTML
  <script>
    console.log('inside the script element');
  </script>
  ```
- Can use the src attribute to connect an external JavaScript script file to the HTML document. 
  ```HTML
  <script src='some js file location'></script>
  ```
- Can write JavaScript directly in the HTML in event attributes.
  ```HTML
  <button onclick="console.log('in the event listener')">click me</button>
  ```

## Accessing Information
- AJAX API: Asynchronous JavaScript and XML
- FETCH API

## CORS
- Cross-Origin Resource Sharing

## Events
- Event listener
- Event object
- Bubbling and capturing
  -Bubbling will activate the event on the parent or containing element after the initial element.
  - Capturing will take the opposite effect and activate the surrounding elements before the initial element.