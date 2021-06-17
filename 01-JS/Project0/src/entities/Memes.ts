
export interface IMemes {
    id: number;
    type: string;
    imagelink: string;
}

class Memes implements IMemes {

    public id: number;
    public type: string;
    public imagelink: string;
    

    constructor(memeId: number, memeType: string, memeLink: string) {
        this.id = memeId;
        this.type = memeType;
        this.imagelink = memeLink;
        
    }
}

export default Memes;
