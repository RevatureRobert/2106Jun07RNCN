# Client Side JavaScript
 - No internal modules
 - Web API's
 - No importing outside of modules
 - Web browsers do not understand Typescript

## DOM API
 - Document Object Model
 - Just a way of working with the HTML document as an object in JS
 - DOM Manipulation
 - Access, change, delete, etc. elements in the dom

## DevTools
 - Developer tools are built directly inside the browser
 - More can be installed through browser extensions
 - Console, Elements, Network, Application are a few important tabs in the devtools to get to know.

## Attaching to HTML
 - Can use a script element to write JavaScript directly in the HTML document
 ```HTML
    <script>
    console.log('inside the script element');
    </script>
 ```
 - Can use the src attribute to connect an external JavaScript script file to the HTML document
 ```HTML
    <script src="some js file location"></script>
 ```
 - Can write JavaScript directly in the HTML in event attributes
 ```HTML
    <button onclick="console.log('in the event listener')">click me</button>
 ```

## Accessing information
 - AJAX API
  - Asynchronous JavaScript and XML
 - FETCH API

## CORS
 - Cross Origin Resource Sharing

## Events
 - Event listener
 - Event Object
 - Bubbling and Capturing
  - Bubbling will activate the event on the parent or containing element after the initial element. 
  - Capturing will take the opposite effect and activate the surrounding elements before the initial element.