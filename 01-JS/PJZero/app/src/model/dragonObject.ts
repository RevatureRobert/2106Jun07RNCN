export class dragon {
    constructor (
        public entityID: number,
        public Name: string,
        public Origin: string,
        public Style: string,
        public Wings: number,
        public Legs: number,
        public Length: number,
        public Weight: number,
        public Flight: boolean,
        public Magical: boolean,
    ) {}

    // Sanitizes the dragon object, returning an item designed for sending to DynamoDB
    sanitize () {
        let Item = {
            "entityID": {"N": this.entityID.toString()},
            "Name": {"S": this.Name},
            "Origin": {"S": this.Origin},
            "Style": {"S": this.Style},
            "Weight (Kilos)": {"N": this.Weight.toString()},
            "Length (Meters)": {"N": this.Length.toString()},
            "Wings": {"N": this.Wings.toString()},
            "Legs": {"N": this.Legs.toString()},
            "Flight": {"BOOL": this.Flight},
            "Magical": {"BOOL": this.Magical}
        }
        return Item;
    }
}