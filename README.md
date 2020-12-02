![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)


# USWDS Web Components

**Note:** This is very new and is a work in progress - nowhere near ready for use yet!

This is a web component implementation of the [U.S. Web Design System's (USWDS) library of open source UI components](https://designsystem.digital.gov/). The goal of this library is to reduce the barrier to entry for using USWDS components.

The development process uses [Stencil](https://stenciljs.com/), but the resulting web components can be used within any framework, just like regular HTML 😍.

## Getting started

If you're working with basic HTML, you can add the library with a single script tag. After that, you can start using the web components!

For use with frameworks like Angular, React, Vue, and Ember, see the [Stencil documentation](https://stenciljs.com/docs/overview).

```html
<!-- minimal example usage -->
<html>
  <head>
    <script src="uswds-web-components.js"></script>
  </head>
  <body>
    <usa-button>
      <button>Button</button>
    </usa-button>
  </body>
</html>
```

## How to use USWDS Web Components

Once things are set up (see [Getting started](#Getting-started)), here's how to work with the web components:

1. Look through [USWDS components documentation](https://designsystem.digital.gov/components/)
1. Grab component HTML from an example  
   ```html
   <button class="usa-button">Default</button>
   ```
1. Wrap that HTML with the corresponding web component from this library  
   ```html
   <usa-button>
     <button class="usa-button">Default</button>
   </usa-button>
   ```
1. (Optional) Remove redundant classes like "usa-button" while retaining styles
   ```html
   <usa-button>
     <button>Default</button>
   </usa-button>
   ```

That's it! The web component will automatically handle loading relevant styles, scripts, and assets that you'd normally need to set up manually.

## How USWDS Web Components work

### USWDS buttons

First, let's look at the [USWDS button documentation](https://designsystem.digital.gov/components/button/) to see what code is needed to make a button:

```html
<!-- from USWDS documentation -->
<!-- assumes USWDS styles, fonts, images,
and scripts are loaded -->
<button class="usa-button">Default</button>
```

This is a regular HTML `<button>` with a class named "usa-button", which is used for styling.

### USWDS Web Components buttons

Let's try taking the same code from USWDS's documentation, and wrapping it in a `<usa-button>` web component:

```html
<!-- assumes uswds-web-components.js is loaded --->
<usa-button>
  <button class="usa-button">Default</button>
</usa-button>
```

This gives you the same result, even though we didn't include any styles or fonts. All the styles, fonts, images and component-specific scripts live inside the web component.

Since `<usa-button>` knows it's a USWDS button, the "usa-button" class is redundant. Let's see what happens when we remove it:

```html
<!-- the code you write -->
<usa-button>
  <button>Default</button>
</usa-button>
```

If we inspect the rendered component in the browser, the HTML looks like this:

```html
<!-- what's actually rendered in the browser -->
<usa-button class="uswds-web-components">
  <button class="usa-button">Default</button>
</usa-button>
```

The web component is automatically adding in the "usa-button" class that the button needs in order to be styled correctly. Cool!

What about a component that uses JavaScript? Let's see what happens when we add a tooltip to the button. The [USWDS tooltip documentation](https://designsystem.digital.gov/components/tooltip/) says that tooltips are progressive enhancements for the `title` attribute:

```html
<!-- the code you write -->
<usa-button>
  <button title="Tooltip">Default</button>
</usa-button>
```

Here's what's rendered in the browser:

```html
<!-- what's actually rendered in the browser -->
<usa-button class="uswds-web-components">
  <span class="usa-tooltip">
    <button
      title=""
      class="usa-button usa-tooltip__trigger"
      aria-describedby="tooltip-949101"
      tabindex="0"
    >
      Default
    </button>
    <span
      class="usa-tooltip__body"
      id="tooltip-949101"
      role="tooltip"
      aria-hidden="true"
    >
      Tooltip
    </span>
  </span>
</usa-button>
```

That's a lot of changes! Here's What's happening under the hood:

1. `<usa-button>` adds a "usa-tooltip" class to the `<button>` element (just like how it's adding the "usa-button" class)
1. `<usa-button>` imports and initializes the official USWDS tooltip script.
1. The USWDS script handles the rest of the changes shown above.

Pretty slick!

## Frequently Asked Questions (FAQ)

Here are some answers to questions that I've asked myself:

> *Why include the `<button>` element in the light DOM when we could hide it in the shadow DOM? Wouldn't it be nicer to write something like `<usa-button>Default</usa-button>?`*

One reason for this is for **better search engine optimization (SEO)**. Some search engines don't see or understand content that's in the shadow DOM (see this post on [Web Components and SEO](https://medium.com/patternfly-elements/web-components-and-seo-58227413e072)), so it's a good idea to retain sematic content in the light DOM instead.

Another reason is for **simplicity and consistency** across the web components.
- how would this work in more complicated components?
- easier to understand what the code you're writing is actually doing
- https://lea.verou.me/2020/09/the-failed-promise-of-web-components/
- easy to just copy code snippets from USWDS documentation, paste inside a web component, and have it just work
- no new API's to learn

> *Isn't one of the big selling points of web components style encapsulation?*

Yup! 
