class TestClass {

  static toto () {
    console.info('toto');
  }
}

console.warn('Game module loaded');

class Game {

  constructor(el, assetsBasePath) {

    console.log('Game class called');
    this.el = el;
    this.assetsBasePath = assetsBasePath;

    console.info(this.el);
    console.info(this.assetsBasePath);

    TestClass.toto();
  }

}

export { Game };
