class Sign_in {
  constructor(UserService, localStorageService){
    this.userService = UserService;
    this.user = {};
    this.localStorageService = localStorageService;
  }

  submit(){
    var _this = this;
    this.userService.logIn(this.user)
    .then((response) => {
      _this.localStorageService.set('token', response['data']['token'])
    })
  }
}

export { Sign_in };
