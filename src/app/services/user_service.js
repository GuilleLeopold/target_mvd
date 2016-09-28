class UserService {
  constructor($http){
    this.http = $http;
  }

  create(user){
    console.log(user);
    return this.http.post('http://192.168.1.103:3010/api/v1/users/', {user: user});
  }

  logIn(user){
    return this.http.post('http://192.168.1.103:3010/api/v1/users/sign_in', {user: user});
  }
}

export { UserService }
