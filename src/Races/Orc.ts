import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    Orc.instances += 1;
    return Orc.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;