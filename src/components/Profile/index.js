import pp from '../../icons/pp.jpg';
import './style.scss';

const Profile = () => {
  return (
    <div className="profile">
      <div className="display-pic">
        <img className="img" src={pp} alt={pp} />
      </div>
      <div className="points">Daily points</div>
      <div className="num">2,466</div>
    </div>
  );
};

export default Profile;
