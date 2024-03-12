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
import { useTable } from "react-table";
import "./PaymentScreen.css";
import Footer from "../../Components/Footer/Footer";

const dataTable = [
  {
    id: 1,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Anette Black",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://i.pinimg.com/736x/d5/59/bd/d559bd5ffda47d35f8d5ce8de8d6f325.jpg",
  },
  {
    id: 2,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Devon Lane ",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOzuvJFKoWOIjzPLTr05MH5JsPvrgRi85tpf2_hre4zE-NNbYcyGltk-T2SSQOtsnIkY&usqp=CAU",
  },
  {
    id: 3,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Courtney Henry",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
  {
    id: 4,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Esther Howard ",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
  {
    id: 5,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Floyd Miles",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://pics.craiyon.com/2023-10-25/b65f72d6d11a48c1bc560059cc36e31f.webp",
  },
  {
    id: 6,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Samuel Jeff",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
  {
    id: 7,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Samuel Jeff",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
  {
    id: 8,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Anette Black",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://i.pinimg.com/736x/d5/59/bd/d559bd5ffda47d35f8d5ce8de8d6f325.jpg",
  },
  {
    id: 9,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Devon Lane ",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOzuvJFKoWOIjzPLTr05MH5JsPvrgRi85tpf2_hre4zE-NNbYcyGltk-T2SSQOtsnIkY&usqp=CAU",
  },
  {
    id: 10,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Courtney Henry",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
  {
    id: 11,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Esther Howard ",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
  {
    id: 12,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Floyd Miles",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://pics.craiyon.com/2023-10-25/b65f72d6d11a48c1bc560059cc36e31f.webp",
  },
  {
    id: 13,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Samuel Jeff",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
  {
    id: 14,
    dateCreated: "12th Mar, 2024",
    updatedOn: "12th Mar, 2024",
    CustomerName: "Samuel Jeff",
    EmailId: "samuel@gmail.com",
    contactNumber: "9635760241",
    amount: "2000",
    status: "paid",
    image:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
];

const columns = [
  {
    Header: "Date created",
    accessor: "dateCreated",
  },
  {
    Header: "Updated on",
    accessor: "updatedOn",
  },
  {
    Header: "Customer Name",
    accessor: "CustomerName", // Change accessor name
    Cell: (
      { row } // Render custom cell
    ) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={row.original.image}
          alt="Customer"
          style={{
            marginRight: "5px",
            alignItems: "center",
            width: "30px",
            height: "30px",
            borderRadius: "50%", // Rounded corners
            padding: "5px", // Padding
          }}
        />
        {row.original.CustomerName} {/* Render customer name */}
      </div>
    ),
  },
  {
    Header: "Email Id",
    accessor: "EmailId",
  },
  {
    Header: "Phone Number",
    accessor: "contactNumber",
    Cell: (
      { row } // Render custom cell
    ) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "4px" }}>+91</div>
        {row.original.contactNumber} {/* Render customer name */}
      </div>
    ),
  },
  {
    Header: "Amount",
    accessor: "amount",
    Cell: (
      { row } // Render custom cell
    ) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "4px" }}>$</div>
        {row.original.amount} {/* Render customer name */}
      </div>
    ),
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const PaymentScreen = () => {
  const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: dataTable,
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column',  overflowX: 'auto'  , height: '100vh' , backgroundColor:'#F8F8F8' }}>
      <NavigationBar />
      <div style={{ paddingInline: "3%" , paddingBottom: '5vh' , flex: 1,  backgroundColor: '#FFFFFF' , width: '80rem' , alignSelf: 'center' , marginTop: '5vh' , borderRadius: '20px' , marginBottom: '4vh'}}>
        <h2>Payments</h2>
          <table className="paymentTable" {...getTableProps()}>
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
              {rows.map((row) => {
                prepareRow(row);

                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        
      
      </div>
      <Footer style={{ marginTop: 'auto' }} />
    </div>

    
  );
};

export default PaymentScreen;
