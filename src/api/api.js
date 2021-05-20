import Http from '../utils/request';

// Log in to the new interface
const login = (data) => {
    return Http.post('/d_sysop/v1.0/login', data)
};

//Interface export
export {
    login
}