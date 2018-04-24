import Api from '@/services/Api'

export default {
  // methods you can call on AuthenticationService in other files
  register (credentials) {
    return Api().post('register', credentials)
  }
}
