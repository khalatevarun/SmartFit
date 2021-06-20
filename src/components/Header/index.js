import './style.scss';
import search from '../../icons/search.png';
import notify from '../../icons/notify.png';
import pp from '../../icons/pp.jpg';

const Header = () => {
  return (
    <div className="Header">
      <div className="searchBar">
        <div className="searchIcon">
          <img className="icon" src={search} alt="search-icon" />
        </div>
        <div className="info">Type in to Search ...</div>
      </div>
      <div className="links">
        <div className="notifyIcon">
          <img src={notify} alt="search-icon" width="20px" />
        </div>

        <div className="header-profile">
          <div>
            <img className="header-img" src={pp} alt={pp} />
          </div>
          <div> Jane Doe</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
