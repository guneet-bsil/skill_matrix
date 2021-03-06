import React, { useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetailsEmployee } from '../../../actions/employee.action';

const SkillEmployee = (props: any) => {
  useEffect(() => {
    props.getDetailsEmployee();
  }, [props.removeEmpId]);
  console.log('props.employees', props.employees);

  return (
    <div>
      <div className="card mb-2">    <div className="card-body">
        <div className="">
          <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">

            <div className="row">
              <div className="col-sm-12">
                <table className="table table-bordered dataTable" id="dataTable">
                  <thead>
                    <tr role="row" >
                      <th
                        className="sorting_asc"
                        aria-controls="dataTable"
                        aria-sort="ascending"
                        aria-label="Name: activate to sort column descending">
                        <h4>Skills </h4>
                      </th>
                      <th
                        className="sorting"
                        aria-controls="dataTable"
                        aria-label="Position: activate to sort column ascending">
                        <h4>Employee</h4>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.employees.map((emp: any) => (
                      <tr className="odd" key={emp.emp_id}>
                         <td className="sorting">
                      {emp.sk1.join(",")}</td>
                        <td className="sorting_1">{emp.emp_first_name}  {emp.emp_last_name}</td>
                   
                      </tr>
                    ))}
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

export default connect(mapStoreToProps, { getDetailsEmployee })(SkillEmployee);