

import React from 'react';

interface ILoader {
  fullHeight: string
}

const Loader: React.FunctionComponent<ILoader> = ({fullHeight}) => {
  return (
    <div className='loader_container' style={{height: fullHeight}}>
      <div><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
    </div>
  )
}

export default Loader;