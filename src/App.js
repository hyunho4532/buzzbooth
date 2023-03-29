import "./App.css";
import user from "./image/user.png";
import basket from "./image/basket.png";
import search from "./image/search.png";

function App() {
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
      <ul class="menu">
        <li>
          <a href="#">공지사항</a>
          <ul class="submenu">
            <li>
              <a href="#">submenu01</a>
            </li>
            <li>
              <a href="#">submenu02</a>
            </li>
            <li>
              <a href="#">submenu03</a>
            </li>
            <li>
              <a href="#">submenu04</a>
            </li>
            <li>
              <a href="#">submenu05</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">MENU2</a>
          <ul class="submenu">
            <li>
              <a href="#">submenu01</a>
            </li>
            <li>
              <a href="#">submenu02</a>
            </li>
            <li>
              <a href="#">submenu03</a>
            </li>
            <li>
              <a href="#">submenu04</a>
            </li>
            <li>
              <a href="#">submenu05</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">MENU3</a>
          <ul class="submenu">
            <li>
              <a href="#">submenu01</a>
            </li>
            <li>
              <a href="#">submenu02</a>
            </li>
            <li>
              <a href="#">submenu03</a>
            </li>
            <li>
              <a href="#">submenu04</a>
            </li>
            <li>
              <a href="#">submenu05</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">게시판</a>
          <ul class="submenu">
            <li>
              <a href="#">submenu01</a>
            </li>
            <li>
              <a href="#">submenu02</a>
            </li>
            <li>
              <a href="#">submenu03</a>
            </li>
            <li>
              <a href="#">submenu04</a>
            </li>
            <li>
              <a href="#">submenu05</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">고객지원</a>
          <ul class="submenu">
            <li>
              <a href="#">submenu01</a>
            </li>
            <li>
              <a href="#">submenu02</a>
            </li>
            <li>
              <a href="#">submenu03</a>
            </li>
            <li>
              <a href="#">submenu04</a>
            </li>
            <li>
              <a href="#">submenu05</a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default App;