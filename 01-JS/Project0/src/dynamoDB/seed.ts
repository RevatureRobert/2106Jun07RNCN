import IMemes from '@entities/Memes';
import MemeDao from '@daos/Memes/MemeDao';
import TYPES from '@daos/Memes/MemeDao'

export function seedData(){
    let testSeedArr:IMemes[] = [];
    let testDao:MemeDao = new MemeDao();
    for(let i = 0; i<3; i++){
        let testObj:IMemes = new IMemes(i,"dark","placeholder");
        testSeedArr[i]=testObj;
        testDao.add(testSeedArr[i]);
    }
}
export function testDelete(){
    let testDao:MemeDao = new MemeDao();
    testDao.delete(0);
    testDao.delete(1);
    testDao.delete(2);
}

export function testGetOne(){

    let testDao:MemeDao = new MemeDao();
    const test = testDao.getOne(40);
}

export function testGetRandom(){
    let testDao:MemeDao = new MemeDao();
    const test = testDao.getRandom('random');
}

