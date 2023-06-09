


export type TypeSetState<T> = React.Dispatch<React.SetStateAction<T>>

export interface IfireConfig {
  apiKey: string,
  authDomain: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  appId: string,
  measurementId: string
};


export interface IUser {
  displayName: string,
  avatar: string,
  email: string
}

export interface IContext {
  token: string | null | undefined
  user: IUser | null
  setRender: TypeSetState<string>
  signOut: React.MouseEventHandler<HTMLButtonElement>
  state: string | null
  setState: TypeSetState<string | null>
  changeState: React.RefCallback<any>
}