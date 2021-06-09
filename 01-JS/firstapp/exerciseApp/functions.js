function nameChange(name, object) {
    object.name = name;
}

function addressChange(address, object) {
    object.address = address;
}

function dobChange(dateOfBirth, object) {
    object.dateOfBirth= dateOfBirth;
}

function phoneNumChange(phoneNumber, object) {
    object.phoneNumber = phoneNumber;
}

module.exports = {
    nameChange,
    addressChange,
    dobChange,
    phoneNumChange,
}