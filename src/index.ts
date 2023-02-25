export class Log {
  static success(msg: string) {
    console.log(`%c ${msg}`, "color: #36D545");
  }

  static danger(msg: string) {
    console.log(`%c ${msg}`, "color: #F70000");
  }

  static info(msg: string) {
    console.log(`%c ${msg}`, "color: #429EE8");
  }

  static warning(msg: string) {
    console.log(`%c ${msg}`, "color: #F7C600");
  }

  static light(msg: string) {
    console.log(`%c ${msg}`, "color: #D5F7F7; background: black");
  }

  static dark(msg: string) {
    console.log(`%c ${msg}`, "color: #3E4257");
  }
}
