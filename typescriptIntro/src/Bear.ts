interface Bear{
    fur: string;
    claws: boolean;
    teeth: number;
    getScrappy: Function
}

const bear: Bear = {
    fur: 'brown',
    claws: true,
    teeth: 47,
    getScrappy: function(){
        console.error(`ROAR, I have ${this.teeth} teeth`)
    }
}
bear.getScrappy();