import IMemes from '@entities/Memes';
import MemeDao from '@daos/Memes/MemeDao';
import { MemeDataBase } from './dynamoDB'

export function seedData(){
    const memeDB = new MemeDataBase();
    let testSeedArr:IMemes[] = [];
    let testDao:MemeDao = new MemeDao(memeDB);
    for(let i = 0; i<3; i++){
        let testObj:IMemes = new IMemes(i,"dark","placeholder");
        testSeedArr[i]=testObj;
        testDao.add(testSeedArr[i]);
    }

}