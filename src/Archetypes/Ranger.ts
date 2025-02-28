import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    Ranger.instances += 1;
    return Ranger.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;