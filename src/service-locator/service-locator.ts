import IArma from "../interfaces/arma";

export default class ServiceLocator {

    public static load(serviceLocator: ServiceLocator) {
        this.soleInstance = serviceLocator;
    }

    public static getArma(): IArma {
        return this.soleInstance.arma;
    }
    private static soleInstance: ServiceLocator;

    constructor(private arma: IArma) { }
}
