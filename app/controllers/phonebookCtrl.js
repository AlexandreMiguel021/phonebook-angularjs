const toast = new bootstrap.Toast(document.getElementById('liveToast'))

app.controller('phonebookCtrl', ($scope, contactsAPI, operadorasAPI) => {
  $scope.contacts = []
  $scope.operadoras = []
  $scope.showOptions = [1, 2, 4]

  const loadContacts = () => {
    contactsAPI.get().then((res) => {
      $scope.contacts = res.data
    })
  }

  const loadOperadoras = () => {
    operadorasAPI.get().then((res) => {
      $scope.operadoras = res.data
    })
  }

  $scope.addContact = (contact) => {
    contactsAPI.create(contact).then(() => {
      toast.show()
      delete $scope.contact
      $scope.contactForm.$setPristine()
      loadContacts()
    })
  }

  $scope.deleteContacts = (contacts) => {
    contactsAPI
      .exclude(contacts.filter((contact) => !contact.selected))
      .then(() => {
        loadContacts()
      })
  }

  $scope.hasContactSelected = (contacts) => {
    return contacts.some((contact) => contact.selected)
  }

  $scope.orderBy = (field) => {
    $scope.order = field
    $scope.direction = !$scope.direction
  }

  loadContacts()
  loadOperadoras()
})
