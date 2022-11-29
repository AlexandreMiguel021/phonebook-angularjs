const articles = /(da|das|do|dos|de)/

angular.module('phonebook').filter('name', () => {
  return (input) => {
    const splitedNames = input.split(' ')

    const formatedNames = splitedNames.map((name) => {
      if (articles.test(name)) {
        return name
      }

      return name.charAt(0).toUpperCase() + name.substring(1)
    })

    return formatedNames.join(' ')
  }
})
