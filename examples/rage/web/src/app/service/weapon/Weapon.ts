import { WeaponService } from './';
import { AxiosResponse } from 'axios';
import { backendAPI } from 'slate-frontend';
import { Weapon } from 'slate-rp-interfaces';

class WeaponServiceImplementation implements WeaponService {
  async getAll() {
    const allWeapons: AxiosResponse<Weapon[]> = await backendAPI.get('weapons');
    return allWeapons.data;
  }

  async getOneByID(weaponID: number) {
    const weapon: AxiosResponse<Weapon> = await backendAPI.get(`weapons/${weaponID}`);
    return weapon.data;
  }
}

export const weaponService: WeaponService = new WeaponServiceImplementation();
