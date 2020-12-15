import {connect} from "react-redux";
import Friends from "./Friends";
import {addFriendCreator} from "../../../Redux/sidebar-reducer";

let mapStateToProps = (props) => {
    return {
        friends: props.sidebar.friends
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addFriend: () => {
            dispatch(addFriendCreator());
        }
    }
}
const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends);

export default FriendsContainer;