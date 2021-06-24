# HTML
- HyperText Markup Language

## Purpose
- Storing and displaying data
  > Browsers parse these documents and understand the tags to display pixels on the screen in a user friendly way.

## History of front-end applications
1. HTML was static, had multiple pages to display different hard-coded information.
2. Server-side rendering: server would take information and inject html into predefined areas of the html document and send the new html to the browser.
    > Noteable technologies: PHP, JSP, Templating engines (thymeleaf, handlebars), SSR for front-end frameworks (Angular Universal, Next.js)
3. Client-side rendering (SPAs: Single Page Application): dynamic front-end frameworks that will re-render ui components inside the running browser to give the impression of "changing pages."

## Structure (vocabulary)
1. tags: keywords withing opening (`<`) and closing (`>`) angle brackets
2. elements: the tags and the information between them (example: `<p> information </p>`)
3. attributes: properties that alter the appearance and behavior of the elements (example: `style, id, class`)
4. global vs local attributes:
  - global: attributes that can be used with all tags (such as `id, class, style`)
  - local: attributes only applicable to certain tags (such as `action, method, src, href, alt`)
5. semantic tags: descriptive elements; makes telling what an element is used for easier (example: `section, header, footer, article`)

## Important Tags (Must be in document)
1. `DOCTYPE`: declaration that tells the browser what type of document it is (example: `<!DOCTYPE html>`)
2. `html`: the actual beginning of the document
3. `head`: provides metadata for the browser to understand the document
4. `body`: the actual html to be rendered

## Block vs. Inline Elements
- Block elements will take up the entire width of the screen, no matter the content size.
- Inline elements will take up only the width that the content needs.