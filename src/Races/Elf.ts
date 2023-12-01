import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, desterity: number) {
    super(name, desterity);
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    Elf.instances += 1;
    return Elf.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;