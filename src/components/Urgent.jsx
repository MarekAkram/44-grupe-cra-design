import style from "./Urgent.module.css";
import circleg from '../img/circlegreen.png'
function Urgent() {
  return (
    <div className={style.box}>
      <div className={style.title}>
        <h2>Urgent Resolve</h2>
      </div>
      <div className={style.Numbers}>
      <img className={style.circleg} src={circleg} alt='circleg' />
        <div>
          <p>05</p>
          <span>Todays</span>
        </div>
        <span className={style.procentai}>+0.3%</span>
      </div>
    </div>
  );
}

export default Urgent;