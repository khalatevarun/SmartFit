import './style.scss';
import { dailyStats } from '../../data/data';

const Monitoring = () => {
  return (
    <div className="monitoring">
      <div className="heading">
        <div className="primary">Daily Monitoring</div>
        <div className="secondary">See progress {'>'}</div>
      </div>
      <div className="categories">
        {dailyStats.map((stats) => (
          <div className="box">
            <div>
              <img className="logo" src={stats.img} alt={stats.img} />
            </div>
            <div className="data">
              <div className="type">{stats.type}</div>
              <div className="stat">{stats.stat}</div>
              <div className="status">{stats.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Monitoring;
