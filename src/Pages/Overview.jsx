import style from "./Overview.module.css";
import Appoint from "../components/Appoint";
import Consultation from "../components/Consultation";
import Cancel from "../components/Cancel";
import Urgent from "../components/Urgent";
import Table from "../components/Table";
function Overview() {
  return (
    <div className={style.page}>
      <h1>Overview</h1>
      <div className={style.squares}>
        <Appoint />
        <Consultation />
        <Cancel />
        <Urgent />
        <div className={style.table}>
          <h1>Todays</h1>
          <Table/>
        </div>
        </div>
      
    </div>
  );
}

export default Overview;
