import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field name={"login"} validate={[required]} placeholder={"Login"} component={Input} />
         </div>
         <div>
            <Field
               name={"password"}
               validate={[required]}
               placeholder={"Password"}
               component={Input}
            />
         </div>
         <div>
            <Field name={"rememberMe"} type={"checkbox"} component={Input} /> remember me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>
   );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData);
   };

   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   );
};

export default Login;
