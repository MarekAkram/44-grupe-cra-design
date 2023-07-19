import style from "./Cancel.module.css";
import graphg from '../img/graphorange.png'
function Cancel() {
  return (
    <div className={style.box}>
      <div className={style.title}>
        <h2>Canceled</h2>
      </div>
      <div className={style.Numbers}>
      <img className={style.graphg} src={graphg} alt='graphg' />
        <div>
          <p>03</p>
          <span>Todays</span>
        </div>
        <span className={style.procentai}>0.5%</span>
      </div>
    </div>
  );
}

export default Cancel;