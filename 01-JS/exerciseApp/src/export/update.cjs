function nameUpdate(name, obj){
  obj.name = name;
}

function addressUpdate(address, obj){
  obj.address = address;
}
function phoneNumberUpdate(phoneNumber, obj){
  obj.phoneNumber = phoneNumber;
}

function otherInfoUpdate(otherInfo, obj){
  obj.otherInfo.push(otherInfo);
}

module.exports = {
  nameUpdate,
  addressUpdate,
  phoneNumberUpdate,
  otherInfoUpdate
}

