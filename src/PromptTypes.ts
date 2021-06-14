import prompt from "prompt";

export type Validator = prompt.RevalidatorSchema & {

    before?: Function;

}
