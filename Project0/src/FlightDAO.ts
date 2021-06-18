interface FlightDao {
    getCountries() : JSON[];
    getFlightsAugust() : JSON[];
    addCountry(code : string, name : string) : boolean;
    deleteCountry(code : string, name : string) : boolean;
    updateCountry(code : string, name : string) : boolean;
}