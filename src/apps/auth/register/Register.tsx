

import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Components } from '../../../components';
import { FormsInstruments } from '../../../helpers/forms';
import cls from "./index.module.scss";
import { auth } from "../../../firebase/fierbase"
import { Hooks } from '../../../hooks';
const Register: React.FunctionComponent = () => {
  const { actions } = Hooks.useRedirect();
  const {
    handleSubmit,
    register,
    reset,
    formState: {errors}
  } = useForm({
    mode: "onSubmit"
  })

  const handleRegister = (data: any) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((res: any) => {
      localStorage.setItem("accessTopken", res.user.accessToken);
      actions.goToLogin();
      reset();
    })
  }


  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.register_page}>
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit(handleRegister)}>
            <Components.Divider>
              <Components.TextInput 
                type="email"
                placeholder='Email'
                {...register("email", {
                  required: {
                    message: "This area should be filled!",
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
                type="password"
                placeholder='Password'
                {...register("password", {
                  required: {
                    message: "This area should be filled!",
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

                }
                )}
              />
            <Components.Errors err={errors?.password && errors?.password.message} />

            </Components.Divider>

            <Components.Divider>
              <Components.AuthSubmit location="Sign Up" />
            </Components.Divider>
            <Components.Divider>
              <Components.AuthNavigate location='SignUp' />
            </Components.Divider>

            <Components.Divider>
              <Components.AuthGoogle location="singUp" />
            </Components.Divider>

          </form>
        </section>
      </Components.Container>
    </React.Fragment>
  )
}

export default Register;