import { DialogType, MessageType } from "../types/types";

const SEND_MESSAGE = "ADD-MESSAGE";

let initialState = {
   dialogs: [
      { id: 1, name: "Dimych", avatar: "http://placekitten.com/40/10" },
      { id: 2, name: "Andrew", avatar: "http://placekitten.com/40/20" },
      { id: 3, name: "Sveta", avatar: "http://placekitten.com/40/30" },
      { id: 4, name: "Sasha", avatar: "http://placekitten.com/40/40" },
      { id: 5, name: "Victor", avatar: "http://placekitten.com/40/50" },
      { id: 6, name: "Valera", avatar: "http://placekitten.com/40/60" },
   ] as Array<DialogType>,
   messages: [
      {
         id: 1,
         message:
            "Пандемия коронавируса привела к мировому экономическому кризису, отчего значительно упали цены на нефть, газ и другие природные ресурсы, в результате бюджет России недополучит в 2020 году несколько триллионов рублей. Кроме того, расходы на борьбу с пандемией и компенсации гражданам потребовали 4 триллиона рублей. В итоге убытки бюджета огромны. Их надо компенсировать.",
         time: "9:30",
         my: false,
      },
      { id: 2, message: "I'm fine. Let's have a dinner today.", time: "9:35", my: true },
      { id: 3, message: "What do you think about it?", time: "9:37", my: true },
   ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case SEND_MESSAGE: {
         let body = action.newMessageBody;
         let date = new Date();
         let hours;
         let minutes;
         if (date.getHours() < 10) {
            hours = "0" + date.getHours();
         } else {
            hours = date.getHours();
         }
         if (date.getMinutes() < 10) {
            minutes = "0" + date.getMinutes();
         } else {
            minutes = date.getMinutes();
         }
         let time = hours + ":" + minutes;
         return {
            ...state,
            messages: [
               ...state.messages,
               {
                  id: state.messages.length + 1,
                  message: body + " " + state.messages.length,
                  time: time,
                  my: true,
               },
            ],
         };
      }
      default:
         return state;
   }
};

type SendMessageCreatorActionType = {
   type: typeof SEND_MESSAGE
   newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
