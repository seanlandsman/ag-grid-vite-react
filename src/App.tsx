import {useState} from 'react';

import {AgGridReact} from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import 'ag-grid-enterprise';

const App = () => {
    const [rowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ]);

    const [columnDefs] = useState([
        {field: 'make'},
        {field: 'model'},
        {field: 'price'}
    ]);

    const statusBar = {
        statusPanels: [
            {
                statusPanel: 'agTotalAndFilteredRowCountComponent',
                align: 'left',
            }
        ]
    }


    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}} role="grid">
            <AgGridReact<any>
                rowData={rowData}
                columnDefs={columnDefs}
                statusBar={statusBar}>
            </AgGridReact>
        </div>
    );
};
export default App;

