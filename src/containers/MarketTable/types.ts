import { Asset, Pool } from 'types';

export type ColumnKey =
  | 'asset'
  | 'supplyApyLtv'
  | 'labeledSupplyApyLtv'
  | 'borrowApy'
  | 'labeledBorrowApy'
  | 'pool'
  | 'riskRating'
  | 'collateral'
  | 'userSupplyBalance'
  | 'userBorrowBalance'
  | 'borrowBalance'
  | 'supplyBalance'
  | 'liquidity'
  | 'userPercentOfLimit'
  | 'userWalletBalance';

export interface PoolAsset extends Asset {
  pool: Pool;
}
