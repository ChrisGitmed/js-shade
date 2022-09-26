# js-shade

An extremely lightweight Node.js library created to simplify formatting terminal text with ANSI codes.

Makes adding color or style to console output much easier, with less room for error.

----

## Install
```
yarn add js-shade
```

## Usage
```
  console.log(Shade.red('Red text!'));
  console.log(Shade.yellow('Yellow text!'));
  console.log(Shade.black('Black text!'));
  console.log(Shade.cyan('Cyan text!'));
  console.log(Shade.green('Green text!'));
  console.log(Shade.blue('Blue text!'));
  console.log(Shade.magenta('Magenta text!'));
  console.log(Shade.white('White text!'));
  console.log(Shade.underline('Underscored text!'));
  console.log(Shade.bright('Bright text!'));
  console.log(Shade.dim('Dim text!'));
  console.log(Shade.reverse('Reversed text!'));
```

### Method Chaining
```
  console.log(Shade.red().underline('Underlined red text!'));
  console.log(Shade.underline().red('Underlined red again text!'));
  console.log(Shade.bright().yellow('Bright yellow text!'));
  console.log(Shade.dim().green('Dim green text!'));
  console.log(Shade.dim().underline().red('Dim underlined red text!'));
```