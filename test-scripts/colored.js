import { Shade } from '../shade.js';

/**
 * Produces strings, but in color!
 * 
 * Invoke the script like this:
 * node test-scripts/colored.js
 */
const colored = () => {
  console.log(Shade.red('Red!'));
  console.log(Shade.yellow('Yellow!'));
  console.log(Shade.black('Black!'));
  console.log(Shade.cyan('Cyan!'));
  console.log(Shade.green('Green!'));
  console.log(Shade.blue('Blue!'));
  console.log(Shade.magenta('Magenta!'));
  console.log(Shade.white('White!'));

  console.log(Shade.underline('Underscored!'));
  console.log(Shade.bright('Bright!'));
  console.log(Shade.dim('Dim!'));
  console.log(Shade.reverse('Reversed!'));

  console.log(Shade.red().underline('Underlined red!'));
  console.log(Shade.underline().red('Underlined red again!'));
  console.log(Shade.bright().yellow('Bright yellow!'));
  console.log(Shade.dim().green('Dim green!'));
  console.log(Shade.dim().underline().red('Dim underlined red!'));
}

(() => colored())();