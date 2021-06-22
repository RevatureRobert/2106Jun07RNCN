
//interface for the meme entity
export interface IMemes {
    id: number;
    type: string;
    imagelink: string;
}

//class implementation for the meme interface
class Memes implements IMemes {

    public id: number;
    public type: string;
    public imagelink: string;
    
    //Constructor
    constructor(memeId: number, memeType: string, memeLink: string) {
        this.id = memeId;
        this.type = memeType;
        this.imagelink = memeLink;
        
    }
}

export default Memes;
