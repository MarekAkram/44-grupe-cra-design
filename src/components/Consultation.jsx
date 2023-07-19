import style from "./Consultation.module.css";
import circle from '../img/circle.png'
function Consultation() {
  return (
    <div className={style.box}>
      <div className={style.title}>
        <h2>Consultation</h2>
      </div>
      <div className={style.Numbers}>
      <img className={style.circle} src={circle} alt='circle' />
        <div>
          <p>22</p>
          <span>Todays</span>
        </div>
        <span className={style.procentai}>-6.5%</span>
      </div>
    </div>
  );
}

export default Consultation;
