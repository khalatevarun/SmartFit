import calendar from '../../icons/calendar.png';
import './style.scss';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-title">Dashboard</div>
      <div className="menu-link">
        <img src={calendar} className="icon" />
        <p>Overview</p>
      </div>
      <div className="menu-link">
        <img src={calendar} className="icon" />
        <p>Daily Plan</p>
      </div>
      <div className="menu-link">
        <img src={calendar} className="icon" />
        <p>Progress</p>
      </div>
      <div className="menu-title">Personal Tips</div>
      <div className="menu-link">
        <img src={calendar} className="icon" />
        <p>Overview</p>
      </div>
      <div className="menu-link">
        <img src={calendar} className="icon" />
        <p>Overview</p>
      </div>
      <div className="menu-link">
        <img src={calendar} className="icon" />
        <p>Overview</p>
      </div>
      <div className="menu-link">
        <img src={calendar} className="icon" />
        <p>Daily Plan</p>
      </div>
      <div className="menu-link">
        <img src={calendar} className="icon" />
        <p>Progress</p>
      </div>
      <div className="menu-title">Your Data</div>
      <div className="menu-link">
        <img src={calendar} className="icon" />
        <p>Overview</p>
      </div>
      <div className="menu-link">
        <img src={calendar} className="icon" />
        <p>Daily Plan</p>
      </div>
      <div className="menu-link">
        <img src={calendar} className="icon" />
        <p>Progress</p>
      </div>
      <div className="menu-link">
        <img src={calendar} className="icon" />
        <p>Overview</p>
      </div>
    </div>
  );
};
export default Menu;
