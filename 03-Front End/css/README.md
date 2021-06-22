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
 1. Inline: style attribute applied to individual elements (example: <p style="color: red"> this is red</p>)
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