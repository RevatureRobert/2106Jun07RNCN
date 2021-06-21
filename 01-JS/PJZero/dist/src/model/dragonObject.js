export class dragon {
    constructor(entityID, Name, Origin, Style, Wings, Legs, Length, Weight, Flight, Magical) {
        this.entityID = entityID;
        this.Name = Name;
        this.Origin = Origin;
        this.Style = Style;
        this.Wings = Wings;
        this.Legs = Legs;
        this.Length = Length;
        this.Weight = Weight;
        this.Flight = Flight;
        this.Magical = Magical;
    }
    // Sanitizes the dragon object, returning an item designed for sending to DynamoDB
    sanitize() {
        let Item = {
            "entityID": { "N": this.entityID.toString() },
            "Name": { "S": this.Name },
            "Origin": { "S": this.Origin },
            "Style": { "S": this.Style },
            "Weight (Kilos)": { "N": this.Weight.toString() },
            "Length (Meters)": { "N": this.Length.toString() },
            "Wings": { "N": this.Wings.toString() },
            "Legs": { "N": this.Legs.toString() },
            "Flight": { "BOOL": this.Flight },
            "Magical": { "BOOL": this.Magical }
        };
        return Item;
    }
}
