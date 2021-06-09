function setName(obj, who){
    obj.name=who;
}
function setAddress(obj, where){
    obj.address=where;
}
function setPhoneNumber(obj, phone){
    obj.phoneNumber=phone;
}
function setOtherInfo(obj, info){
    obj.otherInfo=info;
}
module.exports.other={
    setName:setName,
    setAddress:setAddress;
    setPhoneNumber:setPhoneNumber,
    setOtherInfo:setOtherInfo
}