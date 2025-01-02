import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import ListHeader from "swfrontend/MDM/MDMScreens/ListView/ListHeader";

class Users extends Component {
  state = {
    users: [],
    searchData: { searchText: "" },
    addUsers: false,
    singleData: [],
    rowSelected: false,
    selectedRow: [],
    filterData: [
      {
        headerName: "User_Name",
        field: "user_name",
        sortable: true,
        filter: true,
        type: "nonEditableColumn",
      },
    ],
    columnDef: [
      {
        headerName: "user_id",
        field: "user_id",
        sortable: true,
        filter: true,
        checkboxSelection: true,
        headerCheckboxSelection: true,
        type: "nonEditableColumn",
      },
      {
        headerName: "user_name",
        field: "user_name",
        sortable: true,
        filter: true,
        type: "nonEditableColumn",
      },
      {
        headerName: "user_email",
        field: "user_email",
        sortable: true,
        filter: true,
        type: "nonEditableColumn",
      },

      {
        headerName: "mobile",
        field: "mobile",
        sortable: true,
        filter: true,
        type: "nonEditableColumn",
      },
      {
        headerName: "address",
        field: "address",
        sortable: true,
        filter: true,
        type: "nonEditableColumn",
      },
      {
        headerName: "is_admin",
        field: "is_admin",
        sortable: true,
        filter: true,
        type: "nonEditableColumn",
      },
    ],
  };

  getAllUsers = (e) => {
    console.log("Calling Api");
    fetch("http://127.0.0.1:8000/user/userApi/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Token ${this.props.token}`,
      },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState({ users: data });
        console.log("Data   :::   ", data);
      })
      .catch((error) => console.error(error));
  };

  componentDidMount() {
    this.getAllUsers();
  }

  addUser = (e) => {
    e.preventDefault();
    this.setState({ addUsers: true });
    console.log("Add user click");
    const { history } = this.props;
    if (history) history.push("/app/user/new");
  };

  changeHandler = (event) => {
    const data = this.state.searchData;
    data[event.target.name] = event.target.value;
    this.setState({ searchData: data });
  };

  updateData = (e) => {
    // e.preventDefault();
    const data = e.api.getSelectedRows();
    console.log("In Complaint component", data[0]);
    this.props.history.push({
      pathname: "/app/user/update",
      state: { detail: data[0] },
    });
  };

  rowSelections = (e) => {
    const data = e.api.getSelectedRows();
    this.setState({ rowSelected: true, selectedRow: data[0] });
  };

  deleteUser = (e) => {
    if (this.state.rowSelected === true) {
      console.log(e);
      fetch("http://127.0.0.1:8000/user/userApi/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state.selectedRow),
      }).then((result) => {
        result.json().then((resp) => {
          console.log(resp);
          // this.fetchBooks();
          this.getAllUsers();
        });
      });
    } else {
      alert("Please select a row");
    }
  };

  filterData = (val) => {
    const str = val.substr(val.indexOf("=") + 1);
    const argu = str.slice(0, -1);

    console.log("Url : http://127.0.0.1:8000/user/userApi/", argu);
    fetch(`http://127.0.0.1:8000/user/userApi/${argu}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState({ users: data });
        console.log("Data   :::   ", data);
      })
      .catch((error) => console.error(error));
  };

  clearAll = (e) => {
    this.getAllUsers();
  };

  searchUsers = (val) => {
    console.log(val);
  };

  render() {
    const rowSelectionType = "single";
    return (
      <div className="col-md-12">
        <div>
          <ListHeader
            addButton="true"
            addField={this.addUsers}
            deleteButton="true"
            deleteField={this.deleteUser}
            columnDefs={this.state.filterData}
            handleFilterClick="true"
            onFilter={this.filterData}
            onResetFilter={this.clearAll}
            onSearch={this.searchUsers}
            // onSearch={}
          />
        </div>
        <div className="ag-theme-balham" style={{ width: "100%", height: 600 }}>
          <AgGridReact
            rowSelection={rowSelectionType}
            onSelectionChanged={this.rowSelections}
            columnDefs={this.state.columnDef}
            rowData={this.state.users}
            onRowDoubleClicked={this.updateData}
          />
        </div>
      </div>
    );
  }
}

export default Users;
