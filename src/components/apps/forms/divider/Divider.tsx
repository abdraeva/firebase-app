

import React from 'react';
import cls from "./index.module.scss";

interface IDivider {
  children: React.ReactNode
}


const Divider:React.FunctionComponent<IDivider> = ({children}) => {
  return (
    <div className={cls.divider}>{children}</div>
  )
}

export default Divider;