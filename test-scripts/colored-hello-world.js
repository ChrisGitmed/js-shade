import { Shade } from '../shade.js';

/**
 * Produces a 'Hello World!' String, but in color!
 * 
 * Run the script like this:
 * node test-scripts/coloredHelloWorld.js --color='red'
 */
const coloredHelloWorld = () => {
  console.log(Shade.red('Red Hello world!'));
  console.log(Shade.yellow('Yellow!'));

  // (Does not work) Yellow over-rides blinking
  console.log(Shade.yellow(Shade.blinking('Yellow blinking!')));

  // (Does not work) Desired format
  // console.log(Shade.yellow().blinking('Yellow blinking!'))
}

(async () => {
  coloredHelloWorld();
})();