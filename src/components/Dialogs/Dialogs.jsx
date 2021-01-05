import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field
               name={"newMessageBody"}
               placeholder={"Enter your message!"}
               validate={[required, maxLength50]}
               component={Textarea}
            />
         </div>
         <div>
            <button>Send</button>
         </div>
      </form>
   );
};
const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

const Dialogs = (props) => {
   let dialogsElements = props.dialogsPage.dialogs.map((d) => (
      <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id} />
   ));
   let messagesElements = props.dialogsPage.messages.map((m) => (
      <Message message={m.message} time={m.time} my={m.my} key={m.id} />
   ));

   let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);
   };

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>{dialogsElements}</div>
         <div className={s.messages}>
            {messagesElements}
            <AddMessageReduxForm onSubmit={addNewMessage} />
         </div>
      </div>
   );
};

export default Dialogs;
