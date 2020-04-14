import React from "react";

export const ListDetails = ({ list }) => {
    
  return (
    <ul>
      <li>
        <h2>{list.movie}</h2>
        <p>{list.rating}</p>
        <p>{list.duration}</p>
      </li>
    </ul>
  );
};

export default ListDetails;
