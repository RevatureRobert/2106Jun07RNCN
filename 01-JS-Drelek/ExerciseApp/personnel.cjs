const personnel = {};

personnel.person = {};

personnel.Create = function (name, address, phone, note) {
    personnel.person = {
        name,
        address,
        phone,
        note,
        extras: []
    }
}

personnel.Update = function (property, newValue) {
    eval("personnel.person." + property + " = '" + newValue + "'");
}

personnel.AddExtra = function (item) {
    personnel.person.extras.push(item);
}

personnel.RemoveExtra = function (index) {
    personnel.person.extras[index] = undefined;
}

module.exports = personnel;