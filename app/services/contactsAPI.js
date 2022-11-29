angular.module('phonebook').factory('contactsAPI', ($http, baseURL) => {
  const get = () => {
    return $http.get(`${baseURL}/contatos`)
  }

  const create = (contact) => {
    return $http.post(`${baseURL}/contatos`, contact)
  }

  const exclude = (contacts) => {
    return $http.post(`${baseURL}/contatos/delete`, contacts)
  }

  return {
    get,
    create,
    exclude
  }
})
