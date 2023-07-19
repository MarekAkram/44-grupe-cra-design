import style from "./Urgent.module.css";
function Urgent() {
  return (
    <div className={style.box}>
      <div className={style.title}>
        <h2>Urgent Resolve</h2>
      </div>
      <div className={style.Numbers}>
        <img src="" alt=""></img>
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