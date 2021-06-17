export class dragon {
    constructor (
        public name: string,
        public origin: string,
        public style: string,
        public wings: number,
        public legs: number,
        public lengthMeters: number,
        public weightKilos: number,
        public flight: boolean,
        public magical: boolean,
        public description?: Blob
    ) {}
}