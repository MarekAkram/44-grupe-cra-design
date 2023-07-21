import React from 'react';
import style from './TodayTable.module.css';
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TiThList } from "react-icons/ti";
import { Button } from "../main/button/Button";

export function TodayTable({ appointmentsData }) {
  // const formatDate = (date) => {
  //   return new Date(date).toLocaleDateString();
  // }

  // const formatTime = (time) => {
  //   return new Date(time).toLocaleTimeString();
  // }

  return (
    <div className={style.header}>
      <div className={style.tableTop}>
        <p>Todays</p>
        <p>Appointments</p>
        <button>
          <TiThList size="1.5rem" color="grey" />
          <BsGrid3X3GapFill size="1.5rem" color="grey" />
        </button>
      </div>
      <div>

      </div>
      <table>
        <tbody>
          {appointmentsData.map((appointmentsData) => (
            <tr key={appointmentsData.id}>
              <td>{appointmentsData.name}</td>
              <td>{appointmentsData.status}</td>
              <td>{appointmentsData.date}</td>
              <td>{appointmentsData.time}</td>
              <td>{appointmentsData.situation}</td>
              <td>{appointmentsData.actions}</td>
              <td>
                <Button />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};