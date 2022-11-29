angular.module('phonebook').factory('operadorasAPI', ($http, baseURL) => {
  const get = () => {
    return $http.get(`${baseURL}/operadoras`)
  }

  return {
    get
  }
})
