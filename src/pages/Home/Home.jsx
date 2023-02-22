import { Table } from "antd";
import "./home.css";
import graph from "../../assests/Attendance - Semester Graph.png";
import userData from "./dataUser.json";
const columns = [
  {
    title: "Student Name",
    dataIndex: "name",
    key: "name",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Roll No.",
    dataIndex: "roll_no",
    key: "roll_no",
  },
  {
    title: "Institution",
    dataIndex: "institution",
    key: "institution",
  },
  {
    title: "Semester",
    dataIndex: "semester",
    key: "semester",
  },
  {
    title: "Program",
    dataIndex: "program",
    key: "program",
  },
  {
    title: "D.O.B / Gender",
    dataIndex: "dob_gender",
    key: "dob_gender",
  },

  {
    title: "Father's Name / Mother's Name",
    dataIndex: "f_mname",
    key: "f_mname",
  },
];

// const App = () => (
//   <Table columns={columns} dataSource={userData} className="home_table" />
// );
function App() {
  return (
    <div className="home_section">
      <h2 className="home_profile">Student Profile:</h2>
      <Table columns={columns} dataSource={userData} className="home_table" />
      <div className="home_cards">
        <div className="home_opinion">
          <h2>Review by Teacher's</h2>
          <p>
            Hardworking personality, full of enthusisam <br />
            and great Progress but can't able to maintain its Prgress
            continously
          </p>
        </div>
        <div className="home_graph">
          <h2>Attendance - Semester Graph</h2>
          <img src={graph} alt="graph" height={210} width={400} />
        </div>
        <div className="home_paper">
          <h2>Academics Performance</h2>
        </div>
      </div>
    </div>
  );
}
export default App;
