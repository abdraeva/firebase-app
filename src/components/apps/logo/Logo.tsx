

import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../../services/Path';

const Logo: React.FunctionComponent<any> = () => <h2><Link to={PATH.ConnectedAuthPath.home}>Firebase Shop app</Link></h2>

export default Logo;