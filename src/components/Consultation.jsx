import style from "./Consultation.module.css";
function Consultation() {
  return (
    <div className={style.box}>
      <div className={style.title}>
        <h2>Consultation</h2>
      </div>
      <div className={style.Numbers}>
        <img src="" alt=""></img>
        <div>
          <p>22</p>
          <span>Todays</span>
        </div>
        <span className={style.procentai}>+10%</span>
      </div>
    </div>
  );
}

export default Consultation;
