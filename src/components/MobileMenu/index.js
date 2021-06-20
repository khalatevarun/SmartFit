import calendar from '../../icons/calendar.png';
import './style.scss';

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-title">Dashboard</div>
      <div className="mobile-menu-link">
        <img src={calendar} className="icon" />
        <p>Overview</p>
      </div>
      <div className="mobile-menu-link">
        <img src={calendar} className="icon" />
        <p>Daily Plan</p>
      </div>
      <div className="mobile-menu-link">
        <img src={calendar} className="icon" />
        <p>Progress</p>
      </div>
      <div className="mobile-menu-title">Personal Tips</div>
      <div className="mobile-menu-link">
        <img src={calendar} className="icon" />
        <p>Nutrition</p>
      </div>
      <div className="mobile-menu-link">
        <img src={calendar} className="icon" />
        <p>Sport</p>
      </div>
      <div className="mobile-menu-link">
        <img src={calendar} className="icon" />
        <p>Beauty</p>
      </div>
      <div className="mobile-menu-link">
        <img src={calendar} className="icon" />
        <p>Health</p>
      </div>
      <div className="mobile-menu-link">
        <img src={calendar} className="icon" />
        <p>Mindfulness</p>
      </div>
      <div className="mobile-menu-title">Your Data</div>
      <div className="mobile-menu-link">
        <img src={calendar} className="icon" />
        <p>Blood</p>
      </div>
      <div className="mobile-menu-link">
        <img src={calendar} className="icon" />
        <p>DNA</p>
      </div>
      <div className="mobile-menu-link">
        <img src={calendar} className="icon" />
        <p>Microbiome</p>
      </div>
      <div className="mobile-menu-link">
        <img src={calendar} className="icon" />
        <p>Questionnaire</p>
      </div>
    </div>
  );
};
export default MobileMenu;
