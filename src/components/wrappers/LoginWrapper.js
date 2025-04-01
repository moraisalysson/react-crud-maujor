import Login from '../Login';
import { Navigate } from 'react-router-dom';

const LoginWrapper = props => {  
    return !props.isAuthenticated ? 
      <Login onLogin={props.onLogin} /> 
      : <Navigate to="/" />;
  }

  export default LoginWrapper;