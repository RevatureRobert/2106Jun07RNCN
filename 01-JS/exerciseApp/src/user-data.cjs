module.exports.data =  data = {
    name: '',
    address: '',
    phone: '',
    otherData: ['']
}

module.exports.save =  function save(name, address, phone){
    data.name = name;
    data.address = address;
    data.phone = phone;
}

module.exports.read = function readData(){
    console.log(data)
}
