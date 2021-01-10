import React from "react";
import { Field } from "redux-form";
import s from "./FormsControls.module.css";

export const FormControl = ({ meta: { touched, error }, children }) => {
   const hasError = touched && error;
   return (
      <div className={s.formControl + " " + (hasError ? s.error : "")}>
         <div>{children}</div>
         <div>{hasError && <span>{error}</span>}</div>
      </div>
   );
};

export const Textarea = (props) => {
   const { input, meta, child, ...restProps } = props;
   return (
      <FormControl {...props}>
         <textarea {...input} {...restProps} />
      </FormControl>
   );
};

export const Input = (props) => {
   const { input, meta, child, ...restProps } = props;
   return (
      <FormControl {...props}>
         <input {...input} {...restProps} />
      </FormControl>
   );
};

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
   <div>
      <Field
         name={name}
         validate={validators}
         placeholder={placeholder}
         component={component}
         {...props}
      />
      {text}
   </div>
);
