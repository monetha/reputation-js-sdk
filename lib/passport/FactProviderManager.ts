import { Harmony } from '@harmony-js/core';
import { Address } from 'lib/proto';
import { initFactProviderRegistryContract } from './rawContracts';
import { configureSendMethod, callMethod } from 'lib/utils/tx';

// #region -------------- Interface -------------------------------------------------------------------

export interface IFactProviderInfo {

  /**
   * Fact provider's display name
   */
  name: string;

  /**
   * Fact provider's website
   */
  website?: string;

  /**
   * Fact provider's passport
   */
  passport?: Address;
}

// #endregion

// #region -------------- Constants -------------------------------------------------------------------

const emptyAddress = '0x0000000000000000000000000000000000000000';

// #endregion

/**
 * Class to access and manage fact provider registry.
 * Allows managing info about fact providers.
 */
export class FactProviderManager {
  private factProviderRegistryAddress: Address;
  private harmony: Harmony;

  constructor(harmony: Harmony, factProviderRegistryAddress: Address) {
    this.harmony = harmony;
    this.factProviderRegistryAddress = factProviderRegistryAddress;
  }

  private getContract() {
    return initFactProviderRegistryContract(this.harmony, this.factProviderRegistryAddress);
  }

  /**
   * Sets information about fact provider
   *
   * @param factProviderAddress - fact provider's address
   * @param info - information about fact provider
   * @param registryOwner - address of fact provider registry owner
   */
  public setInfo(factProviderAddress: Address, info: IFactProviderInfo, registryOwner: Address) {
    const method = this.getContract().methods.setFactProviderInfo(
      factProviderAddress,
      info.name,
      info.passport || emptyAddress,
      info.website || '',
    );

    return configureSendMethod(this.harmony, method, registryOwner);
  }

  /**
   * Deletes information about fact provider
   *
   * @param factProviderAddress - fact provider's address
   * @param registryOwner - address of fact provider registry owner
   */
  public deleteInfo(factProviderAddress: Address, registryOwner: Address) {
    const method = this.getContract().methods.deleteFactProviderInfo(factProviderAddress);

    return configureSendMethod(this.harmony, method, registryOwner);
  }

  /**
   * Gets information about fact provider.
   * Returns null promise if no information was entered or it was deleted
   *
   * @param factProviderAddress - fact provider's address
   */
  public async getInfo(factProviderAddress: Address): Promise<IFactProviderInfo> {
    const result = await callMethod(this.getContract().methods.factProviders(factProviderAddress));

    if (!result || !result.initialized) {
      return null;
    }

    const info: IFactProviderInfo = {
      name: result.name,
    };

    if (result.website) {
      info.website = result.website;
    }

    if (result.reputation_passport && result.reputation_passport !== emptyAddress) {
      info.passport = result.reputation_passport;
    }

    return info;
  }
}
