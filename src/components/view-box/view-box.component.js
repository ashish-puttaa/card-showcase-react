import React from 'react';
import './view-box.styles.css';

const Workspace = ({ children }) => {
   return (
      <div className="phone-container">
         <div className="phone">{children}</div>
      </div>
   );
};

export default Workspace;
