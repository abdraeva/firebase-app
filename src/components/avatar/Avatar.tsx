

import React from 'react';
import cls from "./index.module.scss";

const Avatar: React.FunctionComponent = () => {
  const [avatar, setAvatar] = React.useState<string>("");
  const user = {
    avatar: ""
  }
  const NoneAvatar = "https://okfn.org/assets/img/avatar-none.png";

  React.useEffect(() => {
    if(user.avatar){
      setAvatar(user.avatar)
    }else {
      setAvatar(NoneAvatar)
    }
  }, []);

  return (
    <React.Fragment>
      <img className={cls.avatar} src={avatar} alt="avatar" />
    </React.Fragment>
  )
}

export default Avatar;