import style from "./Table.module.css";
const Tables = () => {
    const data = [
      {
        name: 'Name',
        status: 'Consultation',
        date: '2023-07-20',
        time: '14:30',
        situation: 'icon',
        actions: 'Edit/Delete',
      },
      
    ];
  
    return (
      <div className={style.Table}>
        <tables className={"style.Table"}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
              <th>Time</th>
              <th>Situation</th>
              <th>Actions</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.status}</td>
                <td>{row.date}</td>
                <td>{row.time}</td>
                <td>{row.situation}</td>
                <td>{row.actions}</td>
                
              </tr>
            ))}
          </tbody>
        </tables>
      </div>
    );
  };
  
  export default Tables;