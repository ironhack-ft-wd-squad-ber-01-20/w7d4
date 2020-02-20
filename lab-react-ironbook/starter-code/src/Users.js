import React from "react";
import logo from "./linkedin.png";

const Users = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Campus</th>
          <th>Role</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{user.role}</td>
              <td>
                {user.linkedin && (
                  <a href={user.linkedin}>
                    <img height="10px" src={logo} alt="linkedin-logo" />
                  </a>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Users;
