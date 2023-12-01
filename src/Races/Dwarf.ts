import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    Dwarf.instances += 1;
    return Dwarf.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;