import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    Halfling.instances += 1;
    return Halfling.instances;    
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;