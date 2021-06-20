import { challenge } from '../../data/data';
import './style.scss';
import applenobg from '../../icons/applenobg.png';

const Challenge = () => {
  return (
    <div className="challenge">
      <div className="challenge-heading">Challenge</div>
      <div className="challenge-main">
        {challenge.map((chal) => (
          <>
            <div className="chal-title">
              <img
                src={applenobg}
                alt={applenobg}
                height="18px"
                style={{ marginRight: '8px' }}
              />
              {chal.title}
            </div>
            <div className="chal-desc">{chal.desc}</div>
            <div className="chal-recepie">RECEPIE:</div>
            <div className="chal-info">
              <div className="chal-title">
                {chal.recipe.map((step) => (
                  <>
                    <ul className="chal-step">
                      <li>{step}</li>
                    </ul>
                  </>
                ))}
              </div>
              <div className="vl"></div>

              <div className="chal-title">{chal.cal}</div>
            </div>
            <div className="buttons">
              <button className="addButton">Add Challenge</button>
              <div className="shareLink">Challenge Friend</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Challenge;
