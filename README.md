# inuit-displays
Simple display helpers for the inuitcss framework.

## Installation

  `npm install inuit-displays`

## Usage

Default display properties here:

    $inuit-displays: (
            none,
            inline,
            inline-block,
            block
    ) !default;

If you want to use just `none` and `block` write these definition before import inuit-displays:
 
     $inuit-displays: (
             none,
             block
     ) !default;

If you want add new display values like `table`, `table-cell`, `inherit`, etc. you can:

     $inuit-displays: (
             none,
             block,
             table,
             table-cell,
             inherit
     ) !default;

Also you can use some alias for display values:
 
    $inuit-display-aliases: (
            none: hide,
            block: show
    ) !default;

If you want you can add new aliases like these:

    $inuit-display-aliases: (
            none: hide,
            block: show,
            table: tb,
            table-row: tr
            table-cell: td
    ) !default;

Finally you can disable aliases with this:

    $inuit-display-aliases: false;

or completely disable inuit-displays with this:

    $inuit-displays: false;

before import inuit-displays.

## Tests

You can run unit tests with this command:

  `npm test`

## Build

You can build changes to dist/main.css file with this command:

  `npm run build`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.