import axios from 'axios';

class LoginService {
    AuthUser (username,password) {
        var user = {
            UserName: username,
            Password: password
        }
        var resp  = axios.post('http://localhost:4090/api/userlogin',{user});
        return resp;
    }
}
export default LoginService;    
