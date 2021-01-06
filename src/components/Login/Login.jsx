import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import styles from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field name={"email"} validate={[required]} placeholder={"Email"} component={Input} />
         </div>
         <div>
            <Field
               name={"password"}
               validate={[required]}
               placeholder={"Password"}
               component={Input}
               type={"password"}
            />
         </div>
         <div>
            <Field name={"rememberMe"} type={"checkbox"} component={Input} /> remember me
         </div>
         <div>
            <button>Login</button>
         </div>
         <div className={styles.formSummaryError}>{props.error}</div>
      </form>
   );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe);
   };
   if (props.isAuth) return <Redirect to={"/profile"} />;
   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   );
};
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
