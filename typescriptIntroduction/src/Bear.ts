interface IBear{
    fur: string;
    claws: boolean;
    teeth: number,
    getScrappy: Function
}

const bear: IBear = {
    fur: 'brown',
    claws: true,
    teeth: 46,
    getScrappy(){
        console.log(`Bear fight club begin! Participant ${this.fur} bear.`);
    }
}
