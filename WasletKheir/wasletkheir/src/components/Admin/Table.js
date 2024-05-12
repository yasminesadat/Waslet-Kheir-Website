import React, {useState} from 'react';
import {useTable,useFilters,usePagination,useSortBy,useGlobalFilter} from 'react-table';
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faCaretUp,faSearch} from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import {docs} from './DocNavBar';
import { Popconfirm,Modal,Button } from "antd";
import './App.css';

function GlobalFilter({
  globalFilter,
  setGlobalFilter,
}) {

  return (
      <div style={{ position: 'absolute', top: '15%',marginLeft:'85%' }}>
        <input
  value={globalFilter || ''}
  onChange={e => {
    setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
  }}
  placeholder={`Enter a cell value..`}
  style={{ 
    paddingLeft: '15%', // Increase the padding
    height: '10%', // Increase the height
    fontSize: '105%', // Increase the font size
    borderRadius: '3%' // Add rounded corners
  }}
/>
<FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '3%', top: '50%', transform: 'translateY(-50%)'}} />
      </div>
    );
  }

function Table({ columns, data,filterColumn }) {
  const navigate=useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [tableData, setTableData] = useState(data);
  const [selectedRowDetails, setSelectedRowDetails] = useState(null);
  
 
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Instead of 'rows', we'll use page
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, globalFilter },
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: tableData,
      initialState: { pageIndex: 0 }, // starts on the first page
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

const showModal = () => {
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
};

const handleCancel = () => {
  setIsModalOpen(false);
};
  
  return (
    <div style={{minHeight: '100vh'}}>
         <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="table-tr">
            {headerGroup.headers.map((column) => (
             <th {...column.getHeaderProps(column.getSortByToggleProps())} className="table-th">
  {filterColumn.some(filter => filter.name !== column.id) && column.render('Header')}
  {filterColumn.some(filter => filter.name === column.id) && (
    <div style={{ position: 'relative' }}>
      {filterColumn.map((filter, index) => filter.name === column.id && (
        <select
          key={index}
          value={column.filterValue || ''}
          onChange={e => column.setFilter(e.target.value)}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            appearance: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            textAlignLast: 'center',
            fontWeight: 'bold',
            paddingRight: '4%',
            width: '100%',
            fontSize: '100%'
          }}
        >
          <option value="">{filter.name}</option>
          {filter.options.map((option, i) => (
            <option key={i} value={option}>{option}</option>
          ))}
        </select>
      ))}
      <span style={{ position: 'absolute', right: '4%', top: '7%', color: 'black' }}>
        <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
      </span>
    </div>
  )}
</th>
            ))}
            <th className="table-th">Action</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.length === 0 ? (
    <tr>
      <td colSpan={columns.length + 1} style={{ textAlign: 'center' ,marginTop:'5%',color:'red'}}>No requests available</td>
    </tr>
  ) : (
        page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="table-tr">
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="table-td">{cell.render('Cell')}</td>
              ))}
              {/* Add button cell for each row */}
              <td className="table-td" style={{textAlign:'center'}}>
  <Popconfirm
    title="Are you sure you want to accept?"
    onConfirm={() => {
      const newData = tableData.filter((_, index) => index !== row.index);
      setTableData(newData);
    }}
    okText="Yes"
    cancelText="No"
  >
    <button 
      className='button button-green' 
      style={{marginRight:'3%',transform:"scale(0.9)"}}
    >
      Accept
    </button>
  </Popconfirm>
  <Popconfirm
    title="Are you sure you want to reject?"
    onConfirm={() => {
      const newData = tableData.filter((_, index) => index !== row.index);
      setTableData(newData);
    }}
    okText="Yes"
    cancelText="No"
  >
    <button 
      className='button button-red' 
      style={{marginRight:'3%',transform:"scale(0.9)"}}
    >
      Reject
    </button>
  </Popconfirm>
                <button className='button button-blue' style={{transform:"scale(0.9)"}}onClick={() => {
    setSelectedRowDetails(row.original);
    showModal();  // This will set isModalOpen to true
  }}>View Details</button>
              </td>
            </tr>
          );
        })
      )}
      </tbody>
     {selectedRowDetails && (
  <Modal
    title="Details"
    open={isModalOpen}
    onOk={handleOk}
    onCancel={handleCancel}
    footer={null} // This removes the default OK and Cancel buttons
    className="custom-modal"
  >
{/* Display the details of the selected row here */}
{Object.entries(selectedRowDetails).map(([key, value], index, array) => {
  const previousKey = index !== 0 ? array[index - 1][0] : null;
  return (
    <>
    {previousKey === 'Email' && key === 'First Name' && (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <hr style={{ flex: 1 }} />
    <div style={{ textAlign: 'center',fontWeight: 'bold',margin: '0% 1%'}}>Representative</div>
    <hr style={{ flex: 1 }} />
  </div>
)}
      {key !== 'Date' && <p key={key}><strong>{key}</strong>: {value}</p>}
    </>
  );
})}
                            {selectedRowDetails.Email.indexOf('info')===0  && <div style={{  
                              position: "absolute", 
                              bottom: "45%", 
                              right: "7%", 
                              width: "30%", 
                              height: "25%"
                            }}>  <iframe
                            title="google map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13824.106906149644!2d31.4350481!3d29.9786619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583b579cbe8515%3A0x1b8c3382fecf884!2sEgyptian%20Food%20Bank!5e0!3m2!1sen!2seg!4v1715125534942!5m2!1sen!2seg" 
                             style={{ width: '100%', height: '100%', border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>}
                    { selectedRowDetails.Role==='Doctor' &&<div style={{  
                      position: "absolute", 
                      bottom: "15%", 
                      right: "5%", 
                      width: "30%", 
                      height: "25%"
                    }}>                   <iframe
                            title="google map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110406.59114316876!2d31.260180260583876!3d30.14552667069166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fae28324a23%3A0xd9d93042473567de!2sLaris%20clinic!5e0!3m2!1sen!2seg!4v1715126962309!5m2!1sen!2seg" 
                            style={{ width: '100%', height: '100%', border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>}

   <div style={{flexDirection:"row",display:"flex",justifyContent:"center"}}>
  <button 
    className='button button-blue'
    style={{marginRight:"10%",fontSize:"0.8em"}}
    onClick={() => {
      navigate('/Admin/ViewSubmission');
      localStorage.setItem('rowData', JSON.stringify(selectedRowDetails.Email));
      console.log(selectedRowDetails.Name);
    }}
  >
    View Document
  </button>

  <Button 
    className='button button-blue'
    style={{ textDecoration: 'none', paddingBottom:'2em',fontSize:"0.8em"}}
    onClick={() => {
      const link = document.createElement('a');
      link.href = docs[0].uri;
      link.download = docs[0].fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
  >
    Download Document
  </Button>
</div>
  </Modal>
)}
    </table>
    <div className="downpaging-container">
  <button className="pagingbutton"  onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
    <FontAwesomeIcon icon={faAngleDoubleLeft} />
  </button>
  <button className="pagingbutton" onClick={() => previousPage()} disabled={!canPreviousPage}>
    <FontAwesomeIcon icon={faAngleLeft} />
  </button>
  <button className="pagingbutton" onClick={() => nextPage()} disabled={!canNextPage}>
    <FontAwesomeIcon icon={faAngleRight} />
  </button>
  <button className="pagingbutton" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
    <FontAwesomeIcon icon={faAngleDoubleRight} />
  </button>
  <span style={{ marginLeft: '1%' }}>
    Page{' '}
    <strong>
      {pageIndex + 1} of {pageOptions.length}
    </strong>{' '}
  </span>
</div>
   </div>
  );
  
}

export default Table;