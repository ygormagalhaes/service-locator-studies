class Jogador {
    private arma: Arma = ServiceLocator.getArma();

    public atacar(): void {
        console.log(this.arma.atacar());
    }
}

interface Arma {
    atacar(): string;
}

class Ak47 implements Arma {
    atacar(): string {
        return 'trarararatatarata';
    }
}

class ServiceLocator {

    constructor(private arma: Arma) { }

    private static soleInstance: ServiceLocator;

    public static load(serviceLocator: ServiceLocator) {
        this.soleInstance = serviceLocator;
    }

    public static getArma(): Arma {
        return this.soleInstance.arma;
    }
}

function configureLocator() {
    ServiceLocator.load(new ServiceLocator(new Ak47()));
}

configureLocator();
new Jogador().atacar();