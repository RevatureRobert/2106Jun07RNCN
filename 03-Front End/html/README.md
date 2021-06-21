# HTML
 - HyperText Markup Language

## Purpose
 - Storing and displaying data
 > browsers parse these documents and understand the tags to display pixels on the screen in a user friendly way.

## History of front end applications
1. HTML was static, had multiple pages to display different hard coded information
2. Server side rendering. Server would take information and inject html into predefined areas of the html document and send the new html to the browser.
> notable technologies: PHP, JSP, Templating engines (thymeleaf, handlebars), SSR for Front end frameworks (Angular Universal, Next.js)
3. Client Side Rendering, SPA's (Single Page Application). Dynamic front end frameworks that will re-render ui components inside the running browser to give the impression of "changing pages".

## Structure
 - Vocabulary
 1. tags: keywords within opening (<) and closing (>) angle brackets
 2. elements: The tags and the information between them. (example: <p> information </p>).
 3. attributes: properties that alter the appearance and behavior of the elements (example: style, id, class)
 4. global vs local attributes: global are attributes that can be used with all tags (id, class, style), local are only applicable to certain tags (action, method, src, href, alt).
 5. semantic tags: Descriptive elements, it makes it easier to tell what they element is used for (section, header, footer, article,...)

## Important Tags
 - tags that need to be in the document
 1. DOCTYPE: declaration that tells the browser what type of document it is (<!DOCTYPE html>)
 2. html: The actual beginning of the document.
 2. head (optional): provides meta data for the browser to understand the document.
 3. body: The actual html to be rendered.