import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8070/student-web/api';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL + '/user/');
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/user/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/user/' + userId);
    }

    addUser(user) {
        return axios.post(USER_API_BASE_URL + '/user/', user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/user/' + user.id, user);
    }

}

export default new ApiService();