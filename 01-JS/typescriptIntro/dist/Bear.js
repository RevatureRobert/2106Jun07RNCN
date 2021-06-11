const bear = {
    fur: 'brown',
    claws: true,
    teeth: .5,
    getScrappy: function () {
        console.error(`ROAR, I have ${this.teeth} teeth!!!`);
    }
};
bear.getScrappy();
