import pdf from "./pdf/Result of IV Semester B.Tech. Civil Engineering (2).pdf"
import "./room-details.css"

const data = [{ name: "3 Bunker Sharing Non A/C", room: "GODAVARI-T2 /Level9 / GO-904/ Bed-3" }];
 const RoomDetails = ()=>{
    return <div className="room-details">
        <table>
        <tr>
          <th colSpan={2}>Hostal Registration completed</th>
        </tr>
        {data.map((val, key) => {
          return (
            <>
              <tr key={key}>
                <td>Room Type</td>
                <td>{val.name}</td>
              </tr>
              <tr key={key}>
                <td>Allotted Room No.</td>
                <td>{val.room}</td>
              </tr>
              <a href={pdf} target="_blank" className='print-btn'>Print</a>
              
            </>
          );
        })}
      </table>
    </div>
}
export default RoomDetails;