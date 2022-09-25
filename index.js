const ansiCodes = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underline: '\x1b[4m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
};

export class Shade {
  constructor() {
    this.string = '';
  }

  static processString = (string, color) => {
    if (string) {
      const final = ansiCodes[color] + (this.string || '') + string + ansiCodes.reset;
      this.string = '';
      return final;
    }
    this.string = ansiCodes[color] + this.string;
    return this;
  }

  static black = (string) => this.processString(string, 'black');
  static red = (string) => this.processString(string, 'red');
  static green = (string) => this.processString(string, 'green');
  static yellow = (string) => this.processString(string, 'yellow');
  static blue = (string) => this.processString(string, 'blue');
  static magenta = (string) => this.processString(string, 'magenta');
  static cyan = (string) => this.processString(string, 'cyan');
  static white = (string) => this.processString(string, 'white');
  static underline = (string) => this.processString(string, 'underline');
  static bright = (string) => this.processString(string, 'bright');
  static dim = (string) => this.processString(string, 'dim');
  static reverse = (string) => this.processString(string, 'reverse');
  static hidden = (string) => this.processString(string, 'hidden');
}
