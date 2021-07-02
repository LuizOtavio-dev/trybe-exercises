import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <>
        <header className="App-header">
          <img id="img-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokelogo"/>
          <div id="img-header">
            <img id="img-pikachu" src="https://img1.picmix.com/output/stamp/normal/5/8/0/4/1604085_6b455.gif" alt="pikachu" />
            <img id="img-pokebola" src="http://orig00.deviantart.net/696e/f/2013/019/2/7/pokeball_by_zel_duh-d5s04qj.gif" alt="pokebola" />
          </div>
        </header>
      </>
    )
  }
}

export default Header;
