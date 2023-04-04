import "./App.css";
import user from "../image/user.png";
import basket from "../image/basket.png";
import search from "../image/search.png";
import "../css/header.css";

function Header() {
  return (
    <>
      <div class="header">
        <div class="headerLoog">
          <img src="https://pics.gmarket.co.kr/pc/single/kr/common/image__logo.png"></img>
        </div>
        <div class="searchBarContainer">
          <input type="search" class="searchBar"></input>
          <img src={search} class="searchIcon"></img>
        </div>
        <div class="iconContainer">
          <img src={user}></img>
          <img src={basket}></img>
        </div>
      </div>
    </>
  );
}

export default Header;
