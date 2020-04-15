import React from "react";

export const ListDetails = ({ list }) => {
    
  return (
    <table id="directory-table">
      <thead>
        <th>Movie</th>
        <th>Rating</th>
        <th>Duration</th>
      </thead>
      <tr>
        <td>{list.movie}</td>
        <td>{list.rating}</td>
        <td>{list.duration}</td>
      </tr>
    </table>
  );
};

export default ListDetails;
