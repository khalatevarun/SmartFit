import { recommended } from '../../data/data';
import './style.scss';
import yoga from '../../icons/yoga.png';

const Recommended = () => {
  return (
    <div className="recommended">
      <div className="recommended-heading">
        <div className="recommended-primary">Recommended Challenges</div>
        <div className="recommended-secondary">
          {'<'} {'>'}
        </div>
      </div>
      <div className="recommended-categories">
        {recommended.map((r) => (
          <div className="recommended-box">
            <div className="recommended-img">
              <img src={yoga} alt={yoga} width="80px" />
            </div>
            <div className="recommended-content">
              <div>
                <img className="recommended-logo" src={r.img} alt={r.img} />
              </div>
              <div className="recommended-data">
                <div className="recommended-type">{r.title}</div>
                <div className="recommended-status">{r.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
