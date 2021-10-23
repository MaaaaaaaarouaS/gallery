import React from 'react'
import { Icon } from '@iconify/react';
function Navigation() {
  return (
    <div className="navigation">
      <div className="nav">
          <span className="dot1"></span>  
          <span className="dot2"><Icon className="icon" icon="ant-design:caret-down-outlined"/></span>
      </div>
    </div>
  );
}

export default Navigation;