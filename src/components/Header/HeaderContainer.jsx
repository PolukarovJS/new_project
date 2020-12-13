import React from 'react';
import Header from './Header'
import { connect } from 'react-redux';
import { setAuthUserData } from "../../Redux/auth-reducer";
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getAuth().then(data => {
      if (data.resultCode === 0){
        // Деструктуризация - берем нужные параметры из data
        let {id, email, login} = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });   
}
  render() {
    return <Header {...this.props} />
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})
  export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);