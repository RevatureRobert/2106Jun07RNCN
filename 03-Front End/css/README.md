# CSS
- Cascading Style Sheet

## Purpose
- To create more enjoyable and engaging user interface.

## Structure
```CSS
selector{
  property: value;
}
```

## Linking
1. Inline: style attribute applied to individual elements (example: `<p style="color:red">this is red</p>`)
2. Internal: the entire CCS document will be put inside the `<head>` element of the html document. Example:
    ```HTML
    <head>
      <style>
        p{
          color: red;
        }
        .button{
          background-color: #fe6239;
        }
      </style>
    </head>
    ```
3. External: a separate CSS document that is linked in the head of the html document. Example:
    *index.css*
    ```CSS
    p{
      color: red;
    }
    .button{
      background-color: #fe6239;
    }
    body{
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

## Specificity
- tag selector
- class selector
- id selector
- inline styles

## Selectors
- tag selector `p {...}`
- class selector `.someClass {...}`
- id selector `#someID {...}`
- Combinators
  1. `div > p {...}` will apply to all paragraphs directly nested in div elements
  2. `div p {...}` will apply to all paragraphs nested in div elements (regardless of depth)
  3. `div, p{...}` will apply to all paragraphs and div elements in the document
- Pseudo-selectors (example: `ol:nth-child(3) {...}` will apply to every third child of all ordered list elements)

## CSS Box Model
- Content: the actual element and content itself
- Padding: the negative space between the content (element) and the border
- Border: the outline that surrounds the content
- Margin: the negative space that surrounds the border and separates this element from others

## Responsive Web Design
- The web application user interface is responsive to the screen size that the client is using.
- Media Queries should be used to determine device screen size.