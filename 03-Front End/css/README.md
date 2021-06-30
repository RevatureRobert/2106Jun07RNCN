# CSS
 - Cascading Style Sheet

## Purpose
 - To create a more enjoyable and engaging user interface

## Structure
 ```CSS
 selector {
     property: value;
 }
 ```

 ## Linking
 1. Inline: style attribute applied to individual elements (example: 
 
```HTML
 <body>
  <p style="color: red"> this is red</p>
 </body>
```
 )
 2. Internal: The entire CSS document will be put inside the \<head\> element of the html document (example: 
 ```HTML
<head>
    <style>
        p {
            color: red;
        }
        .button {
            background-color: #fe6239;
        }
    </style>
</head>
 ```
 )
 3. External: A separate CSS document that is linked in the head of the html document (example:
 
 *index.css*
 ```CSS
    p {
            color: red;
        }
        .button {
            background-color: #fe6239;
        }
        body {
            background-color: yellow;
        }
 ```
 *index.html*
 ```HTML
 <html>
     <head>
         <link rel="stylesheet" href="./index.css" type="text/css">
    </head>
</html>
 ```
 )

## Specificity
 - tag selector
 - class selector
 - id selector
 - inline styles

## Selectors
 - tag selector
   ` p {...}`
 - class selector
   ` .someClass {...}`
 - id selector
   ` #someId {...}`
 - Combinators
   1. `div > p {...}` will apply to all paragraphs directly nested in div elements.
   2. `div p {...}` will apply to all paragraphs nested in div elements no matter the depth.
   3. `div, p {...}` will apply to all paragraphs and div elements in the document.
 - Pseudo-Selectors
   example: `ol:nth-child(3) {...}` will apply styles to every 3rd child of all ordered list elements.

## CSS Box Model
 - Content: The actual element and content itself.
 - Padding: The negative space between the content (element) and the border (outline).
 - Border: The outline that surrounds the content.
 - Margin: The negative space the surrounds the border and separates this element from others.

## Responsive Web Design
 - The web application user interface is responsive to the screen size that the client is using.
   - Desktop could have a 24in monitor while a mobile phone could have a 7in screen. Prepare for what is appropriate.
 - We accomplish this through media queries.