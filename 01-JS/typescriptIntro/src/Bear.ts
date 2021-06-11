interface IBear {
    fur: string;
    claws: boolean;
    teeth: number;
    getScrappy: Function
}

const bear: IBear = {
    fur: 'brown',
    claws: true,
    teeth:.5,
    getScrappy: function () {
        console.error(`ROAR, I have ${this.teeth} teeth!!!`);
    }
}


bear.getScrappy()