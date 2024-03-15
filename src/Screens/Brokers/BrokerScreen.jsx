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
import { useFilters, useGlobalFilter, usePagination, useTable } from "react-table";
import "./BrokerScreen.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from "../../Components/Footer/Footer";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useNavigate } from "react-router-dom";
import AddBrokerModal from "../../Components/AddBrokerModal/AddBrokerModal";

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
  },
  {
    id: 8,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 9,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 10,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 11,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 12,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 13,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 14,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 15,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 16,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 17,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 17,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 17,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 17,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 17,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 17,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 17,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 17,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 17,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 17,
    brokerName: 'Samuel Jeff',
    email: 'samuel@gmail.com',
    location: 'Canada, USA, UK',
    spent: '62,000',
    contactNumber: '9635760241',
    date: '12th Mar, 2024'
  },
  {
    id: 17,
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
  
  
  

const BrokerScreen = () => {
  const navigator = useNavigate();
  const [filterInput, setFilterInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getTableBodyProps,
    getTableProps,
    headerGroups,
    page,
    prepareRow,
    state,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data : dataTable,
      initialState: { pageIndex: 0 }, // Start from the first page
    },
    useFilters,
    useGlobalFilter,
    usePagination,
  );

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
    setFilterInput(value);
  };
  
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
  const handleRowClick = (row) => {
    console.log("Row clicked:" , row);
    navigator('/BrokerDetailScreen');
    // Add your logic here to handle row click
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("close ")
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column',  overflowX: 'auto'  , height: '100vh' , backgroundColor:'#F8F8F8' }}>
      <NavigationBar tab={2}/>
      <div style={{ paddingInline: "3%" , paddingBottom: '5vh' , flex: 1,  backgroundColor: '#FFFFFF' , width: '80rem' , alignSelf: 'center' , marginTop: '5vh' , borderRadius: '20px' , marginBottom: '5vh'}}>
        <div style={{display: 'flex' , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'space-between'}}>
        <h2>Brokers</h2>
        <input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search Brokers by name"}
          style={{ marginBottom: "1rem" , width: '25rem' , border: "1px solid #9E9E9E" ,paddingTop: '13px' , paddingLeft: '20px' , marginTop: '20px'}}
        />
        <div onClick={openModal} style={{ display: 'flex', height: '20px', left: '10%', paddingInline: '15px', paddingBlock: '10px', alignItems: 'center' , border: '1px solid #AEAEAE' }}>
      <PlaylistAddIcon style={{ marginInline: '5px', height: '25px' , color: '#21272A' }} />
      <div>Add Broker</div>
      
      </div>
        </div>
        <AddBrokerModal isOpen={isModalOpen} onClose={closeModal}  />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((hg) => (
              <tr {...hg.getHeaderGroupProps()}>
               
                {hg.headers.map((header) => (
                  <th {...header.getHeaderProps()}>
                    {header.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            
            {page.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}
                onClick={() => handleRowClick(row)}
                style={{ backgroundColor: row.isHovered? 'red' : 'transparent' }}
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        
        <div style={{  display: "flex", justifyContent: "center" , alignItems: 'center'  , marginTop: '20px'}}>
          <span style={{border: "1px solid #C4CDD5" ,display: 'flex' ,backgroundColor: canPreviousPage ? '#919EAB' : 'white'  , borderRadius: '6px' , paddingInline: '5px' , paddingBlock: '7px' , alignItems: 'center' , justifyContent: 'center' , marginRight: '10px'}} onClick={() => previousPage()} disabled={!canPreviousPage}>
            <ArrowBackIosIcon style={{marginLeft: '8px' , color: '#C4CDD5'}} />
          </span>{" "}
          <span>
            Page{" "}
            <strong>
              {state.pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span style={{ border: "1px solid #C4CDD5" , marginLeft: '10px' , display: 'flex' ,backgroundColor: canNextPage ? '#919EAB' : 'white' , borderRadius: '6px' , paddingInline: '5px' , paddingBlock: '7px' , alignItems: 'center' , justifyContent: 'center'}} onClick={() => nextPage()} disabled={!canNextPage}>
            <ArrowForwardIosIcon style={{marginLeft: '8px' , color: '#C4CDD5'}} />
          </span>{" "}
        </div>
      </div>
      <Footer style={{ marginTop: 'auto' }} />
    </div>

    
  );
};

export default BrokerScreen;
