

import React from 'react';
import { Hooks } from '../../../hooks';
import cls from "./index.module.scss";

interface IAvatar {
  avatar: string
  w: string
  h: string
}
const Avatar: React.FunctionComponent<IAvatar> = ({avatar, w, h}) => {
  const [ava, setAvatar] = React.useState<string>("");
  const { actions } = Hooks.useRedirect();
  const NoneAvatar = "https://okfn.org/assets/img/avatar-none.png";

  React.useEffect(() => {
    if(avatar){
      setAvatar(avatar)
    }else {
      setAvatar(NoneAvatar)
    }
  }, [avatar]);

  return (
    <React.Fragment>
      <img 
        onClick={actions.goToProfile}
        className={cls.avatar} 
        src={ava} 
        alt="avatar" 
        width={w}
        height={h}
      />
    </React.Fragment>
  )
}

export default Avatar;