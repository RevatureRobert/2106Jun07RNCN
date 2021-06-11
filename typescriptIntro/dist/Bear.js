const bear = {
    fur: 'brown',
    claws: true,
    teeth: 47,
    getScrappy: function () {
        console.error(`ROAR, I have ${this.teeth} teeth`);
    }
};
bear.getScrappy();
