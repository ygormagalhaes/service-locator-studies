import Arma from "../interfaces/arma";
import ServiceLocator from "../service-locator/service-locator";

export default class Jogador {
    private arma: Arma = ServiceLocator.getArma();

    public atacar(): void {
        console.log(this.arma.atacar());
    }
}
