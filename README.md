# js-shade
A lightweight Node.js library created to simplify formatting terminal text with ANSI codes.
Easily add color or style to terminal output, with less room for error.

---
### Install
```
yarn add js-shade
```
### Usage
Currently only supports ES6 imports. CommonJS `require` not yet supported.
```
  import { Shade } from 'js-shade';

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
#### Method Chaining
js-shade supports method chaining. So you can combine multiple formats in one statement.
```
  console.log(Shade.red().underline('Red underlined text!'));
  console.log(Shade.underline().red('Also red underlined text!'));
  console.log(Shade.bright().yellow('Bright yellow text!'));
  console.log(Shade.dim().green('Dim green text!'));
  console.log(Shade.bright().underline().red('Bright red underlined text!'));
```
