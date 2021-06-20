import './style.scss';
import { dailytips } from '../../data/data';

const Tips = () => {
  return (
    <div className="tips">
      <div className="heading">
        <div className="primary">Daily Tips</div>
        <div className="secondary">See all {'>'}</div>
      </div>
      <div className="tips-main">
        <div className="tip-single">
          <div className="tip-title">Mindfulness</div>
          <div className="tip-description">
            Do one-hour yoga daily for improving your body balance, flexibility
            and strength.
          </div>
          <div className="tip-link">{'>'} Find out more</div>
        </div>
        <div className="hl"></div>
        <div className="tip-single">
          <div className="tip-title">Get more of your day</div>
          <div className="tip-description">
            Wake up 40 min before the usual and go for a morning walk in the
            park.
          </div>
          <div className="tip-link">{'>'} Find out more</div>
        </div>
        <div className="hl"></div>
        <div className="tip-single">
          <div className="tip-title">Early bedtime</div>
          <div className="tip-description">
            Go to sleep more of the same hour every night.
          </div>
          <div className="tip-link">{'>'} Find out more</div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
