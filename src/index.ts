import Ak47 from "./components/ak47";
import Jogador from "./components/jogador";
import ServiceLocator from "./service-locator/service-locator";

ServiceLocator.load(new ServiceLocator(new Ak47()));
new Jogador().atacar();
