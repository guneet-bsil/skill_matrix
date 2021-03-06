import React, { useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEmployees, deleteEmployee } from '../../../actions/employee.action';

const Employee = (props: any) => {
  useEffect(() => {
    props.getEmployees();
    // eslint-disable-next-line
  }, [props.removeEmpId]);
  const handleDelete = (e: FormEvent<HTMLAnchorElement>, empId: number) => {
    e.preventDefault();
    props.deleteEmployee(empId);
  };
 return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">Employees</li>
        <li className="add-new"><Link to="/employee/create"><span className="fa fa-plus"></span> Add New</Link></li>
      </ol>
      <div className="card mb-3">    <div className="card-body">
          <div className="">
            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
            
              <div className="row">
                <div className="col-sm-12">
                  <table className="table table-bordered dataTable" id="dataTable">
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting_asc"
                          aria-controls="dataTable"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending">Firstname</th>
                        <th
                          className="sorting"
                          aria-controls="dataTable"
                          aria-label="Position: activate to sort column ascending">Lastname</th>
                        <th
                          className="sorting"
                          aria-controls="dataTable"
                          aria-label="Office: activate to sort column ascending">Email</th>
                        <th
                          className="sorting"
                          aria-controls="dataTable"
                          aria-label="Age: activate to sort column ascending">Phone</th>
                        <th
                          aria-controls="dataTable"
                          aria-label="Age: activate to sort column ascending">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.employees.map((emp: any) => (
                        <tr className="odd" key={emp.id}>
                          <td className="sorting_1">{emp.first_name}</td>
                          <td>{emp.last_name}</td>
                          <td>{emp.email}</td>
                          <td>{emp.phone}</td>
                          <td>
                            <Link to={"/employee/update/" + emp.id}>
                              <i className="fa fa-edit"></i>
                            </Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link to="/" onClick={(e) => handleDelete(e, emp.id)}>
                              <i className="fa fa-trash"></i>
                            </Link>
                          </td>
                        </tr>
                      ))}

                      {!props.employees.length && <tr>
                        <td colSpan={5}>
                          No records found
                        </td>
                      </tr>}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

const mapStoreToProps = (store: any) => {
  return {
    employees: store.employee.lists,
    removeEmpId: store.employee.delete_id
  }
}

export default connect(mapStoreToProps, { getEmployees, deleteEmployee })(Employee);