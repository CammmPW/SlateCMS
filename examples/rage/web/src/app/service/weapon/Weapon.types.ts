import { Weapon } from 'slate-rp-interfaces';

export interface WeaponService {
  getAll(): Promise<Weapon[]>;

  getOneByID(weaponID: number): Promise<Weapon>;
}
