const prompt = require('prompt-sync')({sigint: true});


function CheckName(name){
    console.log('Current Name: ' + name)
    let user_Name = name;
    let answer = prompt('Would you like to change your name[y/n]');
    if(answer === 'y' || answer === 'Y'){
        user_Name = prompt('Please Insert Your name: ');
        
    }
    return user_Name;
}


function CheckAddress(address){
    console.log('Current Adress: '+ address);
    let user_address = address
    let answer = prompt('Would like to change your address[y/n]');
    if(answer === 'y' || answer === 'Y'){
        user_address = prompt('Please Insert Your Address: ');
    }
    return user_address;
}
function CheckPhoneNumber(phonenum){
    console.log('Current Phone Number: '+ phonenum);
    let user_phonenum = phonenum;
    let answer = prompt('Would you like to change your Phone Number [y/n]');
    if(answer === 'y' || answer === 'Y'){
        user_phonenum = prompt('Please Insert Your Phone Number: ');
        
    }
    return user_phonenum ;
}
function CheckOther(otherinfo){
    console.log('Current Other Information: '+ otherinfo);
    let user_other = otherinfo;
    let answer = prompt('If you would like to add info type 0, if you would like to delete info type 1, if you would like to keep current info type 2: ');
    let response = 'y';
    if(answer === '0'){
        do{
            response = prompt('Would you like to add information (y/n): ');
            if(response == 'y'){
                let newinfo = prompt('Type information you would like to add: ');
                user_other.push(newinfo);
            }
        }while(response != 'n')
    
        
    }else if(answer === '1'){
        let response = prompt('Would you like to delete information (y/n): ');
        while(user_other.length != 0 && response != 'n'){
            oldinfo = prompt('Please type what information you would like to delete: ');
            let pos = otherinfo.indexOf(oldinfo)
            user_other.splice(pos,1)
            response = prompt('Would you like to delete more information (y/n): ')
        }

    }
    return user_other ;
}
module.exports = {
    CheckName,
    CheckAddress,
    CheckPhoneNumber,
    CheckOther

}