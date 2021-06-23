import { IUser } from "@entities/User";
import { Character } from "@entities/Character";

declare module 'express' {
    export interface Request  {
        body: Character;
    }
}
