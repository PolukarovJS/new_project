import React, { Component } from 'react';
import { Route, withRouter, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import store from './Redux/redux-store';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

// Загрузка с задержкой для ускарения загрузки основного запуска SPA
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
   catchAllUnhandledErrors = (promiseRejectionEvent) => {
      alert('Some error occured');
      //console.error(promiseRejectionEvent);
   };
   componentDidMount() {
      this.props.initializeApp();
      window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
   }

   componentWillUnmount() {
      window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader />;
      }

      return (
         <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
               <Switch>
                  <Route exact path="/" render={() => <Redirect to={'/profile'} />} />
                  <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
                  <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
                  <Route path="/users" render={() => <UsersContainer pageTitle="Самураи" />} />
                  <Route path="/news" render={() => <News />} />
                  <Route path="/music" render={() => <Music />} />
                  <Route path="/settings" render={() => <Settings />} />
                  <Route path="/login" render={withSuspense(LoginPage)} />
                  <Route path="*" render={() => <div>404 NOT FOUND</div>} />
               </Switch>
            </div>
         </div>
      );
   }
}
const mapStateToProps = (state) => ({
   initialized: state.app.initialized,
});
let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
   return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <Provider store={store}>
            <AppContainer />
         </Provider>
      </BrowserRouter>
   );
};
export default SamuraiJSApp;
