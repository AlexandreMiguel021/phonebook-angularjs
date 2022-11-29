angular.module('phonebook').filter('phone', () => {
  return (input) => {
    return input.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3')
  }
})
