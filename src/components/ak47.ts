import IArma from "../interfaces/arma";

export default class Ak47 implements IArma {
    public atacar(): string {
        return "trarararatatarata";
    }
}
