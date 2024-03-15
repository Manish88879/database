import React, { useState } from "react";
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
import DatePicker from "react-datepicker";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import 'react-datepicker/dist/react-datepicker.css';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddLeadsModal from "../../Components/AddLeadsModal/AddLeadsModal";


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
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top",
  //     },
  //     title: {
  //       display: true,
  //       text: "Chart.js Line Chart",
  //     },
  //   },
  // };

  const generateXAxisLabels = () => {
    const daysInMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0).getDate();
    const labels = [];
    for (let i = 0; i <= daysInMonth; i+=5) {
      labels.push(i);
    }
    labels.push(daysInMonth)
    return labels;
  };

  const generateData = () => {
    const daysInMonth = new Date(new Date().getFullYear(), selectedMonth, 0).getDate();
    const data = [];
    for (let i = 0; i <= daysInMonth; i+=5) {
      // Replace Math.random() with your actual data or data fetching logic
      data.push(Math.floor(Math.random() * 100));
    }
    // data.push(daysInMonth)
    return data;
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hides vertical grid lines
        },
        title: {
          display: true,
        },
        ticks: {
          display: true, // Hides y-axis ticks and axis line
        },
      },
      y: {
        ticks: {
          display: true, // Hides y-axis ticks and axis line
        },
        // Adjust other y-axis options if needed
      }
    },
  };

  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];

  const data = {
    labels : generateXAxisLabels(),
    datasets: [
      {
        label: 'Data',
        fill: false,
        lineTension: 0.9,
        label: "Dataset",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: [0.2 , 0.5 , 0.8 , 0.9 , 1 , 0.6 , 0,9],
        borderColor: "#D68B43",
        // backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const customColorFunction = (context) => {
    const value = context.dataset.data[0]; // Assuming only one bar
    let gradientColors = [];
    
    if (value < 1) {
      gradientColors = ['#FF6347', '#FFA500', '#32CD32']; // Red, Orange, Green
    } else if (value < 0.6) {
      gradientColors = ['#FF6347', '#FFA500']; // Red, Orange
    } else {
      gradientColors = ['#FFA500', '#32CD32']; // Orange, Green
    }}


  const barData = {
    labels: generateXAxisLabels(),
    datasets: [
      {
        label: 'Data',
        data: [0.2 , 0.5 , 0.8 , 0.9 , 1 , 0.6 , 0,9],
        backgroundColor: '#f2dcc6',
        borderWidth: 1,
      },
    ],
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  


  const CustomInput = ({ value, onClick }) => (
    <input
      value={value}
      onClick={onClick}
      style={{ border: 'none', outline: 'none', borderBottom: '-1px solid transparent', color: '#11263c' , marginInline: '6px' , fontWeight: '500'  , fontSize: '14px' }} // Remove underline
    />
  );

  return (
    <div>
      <NavigationBar tab={0} />
      <div style={{ paddingInline: "5%" , marginTop: '30px' }}>
        <div style={{display: 'flex' , flexDirection: 'row' , justifyContent: 'space-between'  , alignItems: 'center'}}>
          <div>
        <h2 style={{fontSize: '26px' , fontWeight: '500'}}>Hi Samuel</h2>
        <p style={{ marginTop: "-20px", color: "grey" , fontSize: '26px' , fontSize: '17px'  }}>
          Here’s what happening with your leads
        </p>
        </div>
        <div onClick={openModal} style={{ display: 'flex', height: '20px', left: '50%', paddingInline: '15px', paddingBlock: '10px', alignItems: 'center' , border: '1px solid #AEAEAE' }}>
      <PlaylistAddIcon style={{ marginInline: '5px', height: '25px' , color: '#21272A' }} />
      <div>Add Leads</div>
    </div>
        </div>
        <AddLeadsModal isOpen={isModalOpen} onClose={closeModal} />

        <div style={{ display: "flex", flexDirection: "row", marginTop: '10px' }}>
        <div style={{width: '38%'  ,  paddingInline: '30px',paddingBottom: '-100px',
        alignItems: 'center',justifyContent: 'center',
                height: "320px",
                borderRadius: '20px',
                marginBottom: "20px",
                boxShadow: "1px 20px 20px 1px rgba(0, 0, 0, 0.1)",}}>
                  <div style={{display: 'flex' , flexDirection: 'row' , justifyContent: 'space-between' }}>
                    <h3 style={{fontWeight: '500'}}>Payments</h3>
      <div style={{display: 'flex', alignItems: 'center', border: '1px solid #ECE9F1', borderRadius: '10px', paddingInline: '2px'  , width: '26%' , paddingTop: '10px' , height: '35px' , marginTop: '10px'}}>
      <DatePicker
            selected={selectedMonth}
            onChange={(date) => setSelectedMonth(date)}
            dateFormat="MMMM yyyy"
            showMonthYearPicker
            customInput={<CustomInput />} // Use customInput to render a custom input component
          />
        <CalendarTodayOutlinedIcon style={{ marginLeft: '45px', color: '#D68B43' , marginBottom:'10px'  , height: '20px'}} />
      </div>
      </div> 
      <Line data={data} options={options} height={'130%' } style={{marginBottom: '-10px'}}/>
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
                paddingLeft: "52px",
                paddingRight: "33px",
                paddingBottom: "36px",
                paddingTop: '30px'
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
              <div style={{ fontSize: '30px', fontWeight: '700', color: '#393939', marginTop: '0%' }}>{"56765"}</div>

                <div style={{ display: "flex", flexDirection: "row" , justifyContent: 'center' , alignItems: 'center' , marginTop: '9px' }}>
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
          <div style={{ width: "30%"   ,  paddingInline: '30px',paddingBottom: '-100px',
        alignItems: 'center',justifyContent: 'center',
                height: "320px",
                marginBottom: "20px",
                borderRadius: '15px',
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",}}>
                   <h3 style={{fontWeight: '500'}}>Lead Sold</h3>
            <Bar options={options} data={barData} height={'200%' } />
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
        <h2 style={{marginTop: '90px'}}>Leads Added</h2>
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
