# inuit-displays
Simple display helpers for the inuitcss framework.

## Installation

With npm

```shell
npm i inuit-displays -S
```

With bower 

```shell
bower install inuit-displays --save
```

You can download the latest version or checkout all the releases [here](https://github.com/hayatbiralem/inuit-displays/releases).

## Examples

Sample examples here:

```html
<!-- Hide on all -->
<div class="u-hide"></div>

<!-- Hide on mobile and show on tablet and upper -->
<div class="u-hide u-show@tablet"></div>

<!-- Hide on mobile and show on tablet and upper with `display: inline;` -->
<div class="u-hide u-display-inline@tablet"></div>

<!-- Show on mobile and hide on tablet and upper -->
<div class="u-hide@tablet"></div>
```

You can imagine the other variations.

## Usage

You can import this plugin into a project sample code like this: 

```scss
@import "node_modules/inuit-displays/inuit-displays.scss";
```

You can override settings with writing your custom definitions before import plugin.

Default display properties here:

```scss
$inuit-displays: (
    none,
    inline,
    inline-block,
    block
) !default;
```

If you want to use just `none` and `block` write these definition before import inuit-displays:
 
```scss
$inuit-displays: (
    none,
    block
) !default;
```

If you want add new display values like `table`, `table-cell`, `inherit`, etc. you can:

```scss
$inuit-displays: (
    none,
    block,
    table,
    table-cell,
    inherit
) !default;
```

Also you can use some alias for display values:
 
```scss
$inuit-display-aliases: (
    none: hide,
    block: show
) !default;
```

If you want you can add new aliases like these:

```scss
$inuit-display-aliases: (
    none: hide,
    block: show,
    table: tb,
    table-row: tr
    table-cell: td
) !default;
```

Finally you can disable aliases with this:

```scss
$inuit-display-aliases: false;
```

or completely disable inuit-displays with this:

```scss
$inuit-displays: false;
```

before import inuit-displays.

## Working with Node

First of all install dependencies with:

```shell
npm install
```

That's it.

## Working with Gulp

Build and watch with this:

```shell
gulp
```

or only build with this:

```shell
gulp build
```

## Tests

You can run unit tests with this command:

```shell
npm test
```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.