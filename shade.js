export class Shade {
  static black = (string) => `\x1b[30m${string}\x1b[0m`;
  static red = (string) => `\x1b[31xm${string}\x1b[0m`;
  static green = (string) => `\x1b[32m${string}\x1b[0m`;
  static yellow = (string) => `\x1b[33m${string}\x1b[0m`;
  static blue = (string) => `\x1b[34m${string}\x1b[0m`;
  static magenta = (string) => `\x1b[35m${string}\x1b[0m`;
  static cyan = (string) => `\x1b[36m${string}\x1b[0m`;
  static white = (string) => `\x1b[37m${string}\x1b[0m`;

  static bright = (string) => `\x1b[1m${string}\x1b[0m`;
  static dim = (string) => `\x1b[2m${string}\x1b[0m`;
  static underscore = (string) => `\x1b[4m${string}\x1b[0m`;
  static blinking = (string) => `\x1b[5m${string}\x1b[0m`;
  static reverse = (string) => `\x1b[7m${string}\x1b[0m`;
  static hidden = (string) => `\x1b[7m${string}\x1b[0m`;
}
