
import React from 'react';
import { Components } from '../../../components/apps';
import { useForm } from 'react-hook-form';
import { FormsInstruments } from '../../../helpers/forms';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/fierbase';
import { Hooks } from '../../../hooks';
import { Providers } from '../../../provider';

import cls from "./index.module.scss";

const Login: React.FunctionComponent = () => {

  const { actions } = Hooks.useRedirect();
  const { setRender } = Providers.useAuth();
  
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }

  } = useForm({
    mode: "onSubmit"
  })

  const handleLogin = (data: any) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
     .then((res: any) => {
      localStorage.setItem("accessToken", res?.user.accessToken);
      actions.goToHome();
      reset();
      setRender("Reload!");
     })
  };



  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.login_page}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Components.Divider>
              <Components.TextInput 
                type='email'
                placeholder='Email'
                {...register("email", {
                  required: {
                    message: "This area shoul be filled!",
                    value: true
                  },
                  maxLength: {
                    message: FormsInstruments.LengthValue("max", "Email", 25),
                    value: 25
                  },
                  minLength: {
                    message: FormsInstruments.LengthValue("min", "Email", 5),
                    value: 5
                  }
                })}
              />
              <Components.Errors err={errors?.email && errors?.email.message} /> 
            </Components.Divider>
              
            <Components.Divider>
              <Components.TextInput 
                type='password'
                placeholder='Pasword'
                {...register("password", {
                  required: {
                    message: "This area shoul be filled!",
                    value: true
                  },
                  maxLength: {
                    message: FormsInstruments.LengthValue("max", "Password", 25),
                    value: 25
                  },
                  minLength: {
                    message: FormsInstruments.LengthValue("min", "Password", 5),
                    value: 5
                  }
                })}
                />
                <Components.Errors err={errors?.password && errors?.password.message} /> 


            </Components.Divider>

            <Components.Divider>
              <Components.AuthSubmit location='Sign In' />
            </Components.Divider>

            <Components.Divider>
              <Components.AuthNavigate location='signIn' />
            </Components.Divider>

            <Components.Divider>
              <Components.AuthGoogle location="sing" />
            </Components.Divider>



          </form>
        </section>

      </Components.Container>

    </React.Fragment>
  )
}

export default Login;