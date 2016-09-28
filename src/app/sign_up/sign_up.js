class Sign_up {
  constructor(UserService, $state){
    this.user = {};
    this.userService = UserService;
    this.state = $state;
    this.genders = ['male', 'female'];
  }

  submit(){
    var _this = this;
    this.userService.create(this.user)
    .then((response) => {
      console.log('hola');
      _this.state.go('sign_in');
    })
  }
}

export { Sign_up };
