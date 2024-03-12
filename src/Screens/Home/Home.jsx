import React from "react";
import NavigationBar from "../../Components/NavigattionBar/NavigationBar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import MovingIcon from "@mui/icons-material/Moving";
import { faker } from "@faker-js/faker";
import {useTable} from "react-table";
import './Home.css'

const dataTable = [
  {
    id: 1,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 2,
    brokerName: 'Jane Cooper',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 3,
    brokerName: 'Darlene Robertson',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 4,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 5,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 6,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 7,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  }
];

const columns = [
{
  Header: "BROKER NAME",
  accessor: "brokerName"
},
{
  Header: "EMAIL",
  accessor: "email"
},
{
  Header: "LOCATION",
  accessor: "location"
},
{
  Header: "SPENT",
  accessor: "spent"
},
{
  Header: "CONTACT NO",
  accessor: "contactNumber"
},
{
  Header: "Date",
  accessor: "date"
}

]



const  Home = () => {
  
  
  const {getTableBodyProps , getTableProps , headerGroups , rows , prepareRow} = useTable({
    columns,
    data: dataTable
  });
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: false,
        lineTension: 0.4,
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "#D68B43",
        // backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div>
      <NavigationBar />
      <div style={{ paddingInline: "5%" }}>
        <h2>Hi Samuel</h2>
        <p style={{ marginTop: "-20px", color: "grey" }}>
          Here’s what happening with your leads
        </p>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "45%" }}>
            <Line
              options={options}
              data={data}
              style={{
                height: "400px",
                marginBottom: "20px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <div
            style={{
              justifyContent: "space-between",
              marginInline: "3%",
              paddingRight: "10px",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                paddingLeft: "30px",
                paddingRight: "23px",
                paddingBottom: "36px",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "10px",
                  color: '#393939'
                }}
              >
                Payment Received
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "26px",
                    marginRight: "20px",
                    color: "#393939",
                    fontWeight: "500",
                    marginTop: "-4%",
                  }}
                >
                  {"$76,86.8"}
                </div>
                <div style={{ display: "flex", flexDirection: "row"  , alignItems: 'center'}}>
                  <div
                    style={{
                      color: "#D68B43",
                      fontSize: "14px",
                      flexDirection: "row",
                      fontWeight: '500'
                    }}
                  >
                    15.02
                  </div>
                  <NorthEastIcon style={{ color: "#D68B43", height: "13px" }} />
                </div>
              </div>
            </div>
            <div
              style={{
                padding: '20px',
                background: "#fff",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                marginTop: "30px",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  color: '#1C1C1C',
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                Brokers Count
              </div>
              <div style={{ alignItems: "center" }}>
              <div style={{ fontSize: '30px', fontWeight: '700', color: '#393939', marginTop: '-4%' }}>{"56765"}</div>

                <div style={{ display: "flex", flexDirection: "row" , justifyContent: 'center' , alignItems: 'center' }}>
                  <div
                    style={{
                      color: "#D68B43",
                      fontSize: "16px",
                      flexDirection: "row",
                      fontWeight: '400',
                      marginRight: '10px'
                    }}
                  >
                    {"+11.02" + "%"}
                  </div>
                  <MovingIcon style={{ color: "#D68B43", height: "43px" }} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <Bar options={options} data={data} height={"220px"} />
          </div>
        </div>
        <h2>Recent Brokers</h2>
        <div className="tablesContainer">
        <table className="homeTable" {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>

              {hg.headers.map((header)=>(
                <th {...header.getHeaderProps()}>
                  {header.render("Header")}
                </th>
              ))}
            </tr>
            
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row=>{
            prepareRow(row)

            return <tr {...row.getRowProps()}>
              {
                row.cells.map(cell=>(
                  <td {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))
              }
            </tr>
          })}
        </tbody>
        </table>
        </div>
        <h2>Leads Added</h2>
        <div className="tablesContainer">
        <table className="homeTable" {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>

              {hg.headers.map((header)=>(
                <th {...header.getHeaderProps()}>
                  {header.render("Header")}
                </th>
              ))}
            </tr>
            
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row=>{
            prepareRow(row)

            return <tr {...row.getRowProps()}>
              {
                row.cells.map(cell=>(
                  <td {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))
              }
            </tr>
          })}
        </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
