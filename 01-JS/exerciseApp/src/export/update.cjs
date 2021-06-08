function nameUpdate(name){
  this.name = name;
}

function addressUpdate(address){
  this.address = address;
}
function phoneNumberUpdate(phoneNumber){
  this.phoneNumber = phoneNumber;
}

function otherInfoUpdate(otherInfo){
  this.otherInfo = [...otherInfo];
}

module.exports = {
  nameUpdate,
  addressUpdate,
  phoneNumberUpdate,
  otherInfoUpdate
}

