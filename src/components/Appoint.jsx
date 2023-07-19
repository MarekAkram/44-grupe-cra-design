import style from "./Appoint.module.css";
function Appoint() {
  return (
    <div className={style.box}>
      <div className={style.title}>
        <h2>Appointments</h2>
      </div>
      <div className={style.Numbers}>
        <img src="" alt=""></img>
        <div>
          <p>150</p>
          <span>Todays</span>
        </div>
        <span className={style.procentai}>+11%</span>
      </div>
    </div>
  );
}

export default Appoint;
