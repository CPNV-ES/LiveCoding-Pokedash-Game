class TestClass {

  static toto () {
    console.info('toto');
  }
}

console.log('Game module loaded');

class Game {

  /**
   * 
   * @param {HTMLElement} el game base element
   * @param {String} assetsBasePath 
   */
  constructor(el, assetsBasePath) {

    console.log('Game class called');
    this.el = el;
    this.el.style.backgroundColor = 'red';
    this.assetsBasePath = assetsBasePath;

    console.info(this.el);
    console.info(this.assetsBasePath);

    TestClass.toto();
  }

}

export { Game };
