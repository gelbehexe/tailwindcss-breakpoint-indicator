# Tailwindcss Breakpoint Indicator

A simple breakpoint indicator for using while development with tailwindcss.

It shows a little container in different colors and a text depending
on current breakpoint.

[See Demo](https://tailwindcss-breakpoint-indicator.netlify.app/)

![Screenshot](./screenshot.png?raw=true)

## Installation

Install the plugin from npm:

```shell
# Using npm
npm install @gelbehexe/tailwindcss-breakpoint-indicator

# Using Yarn
yarn add @gelbehexe/tailwindcss-breakpoint-indicator
```

Then add the plugin to your tailwind.config.js file:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  breakpointIndicator: {
    // ...
  },
  plugins: [
    require('@gelbehexe/tailwindcss-breakpoint-indicator'),
    // ...
  ],
}
```

## Usage

You can now use it like this

```html
...
<div class="breakpoint-indicator fixed left-0 top-0 px-3 text-sm"></div>
```

Example for blade:
```html
@env('local')
    <div class="breakpoint-indicator absolute left-0 top-0  min-h-2 px-3 py-1"></div>
@endenv

```

## Configuration

There is only one configuration option for now:

`breakpointIndicator.enabled`:
- `"auto"`: enabled on development (depending on `process.env.NODE_ENV`)
- `true`: always enabled
- `false`: always disabled

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  breakpointIndicator: {
    enabled: 'auto', // default: 'auto', always disabled: false, always enabled: true
  },
  plugins: [
    require('@gelbehexe/tailwindcss-breakpoint-indicator'),
    // ...
  ],
}
```

