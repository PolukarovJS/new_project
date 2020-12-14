import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            // Если мы не залогинины, перенаправить на страницу логинизации
            if (!this.props.isAuth) return <Redirect to='/login' />;
            
            return <Component {...this.props}/>;
        }
    }    

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}