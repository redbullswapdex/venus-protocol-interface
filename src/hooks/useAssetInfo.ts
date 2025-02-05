import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Asset } from 'types';
import { formatToReadablePercentage, getCombinedDistributionApys } from 'utilities';

import { TOKENS } from 'constants/tokens';

export interface UseAssetInfoInput {
  asset?: Asset;
  type: 'supply' | 'borrow';
}

const useAssetInfo = ({ asset, type }: UseAssetInfoInput) => {
  const { t } = useTranslation();

  return useMemo(() => {
    if (!asset) {
      return [];
    }

    const distributionRows = asset.distributions.map(distribution => ({
      label: t('assetInfo.distributionApy', { tokenSymbol: distribution.token.symbol }),
      iconSrc: TOKENS.xvs,
      children: formatToReadablePercentage(
        type === 'borrow' ? distribution.borrowApyPercentage : distribution.supplyApyPercentage,
      ),
    }));

    const combinedDistributionApys = getCombinedDistributionApys({
      asset,
    });

    return [
      {
        label: type === 'borrow' ? t('assetInfo.borrowApy') : t('assetInfo.supplyApy'),
        iconSrc: asset.vToken.underlyingToken,
        children: formatToReadablePercentage(
          type === 'borrow' ? asset.borrowApyPercentage : asset.supplyApyPercentage,
        ),
      },
      ...distributionRows,
      {
        label: t('assetInfo.totalApy'),
        children: formatToReadablePercentage(
          type === 'borrow'
            ? asset.borrowApyPercentage.plus(combinedDistributionApys.borrowApyPercentage)
            : asset.supplyApyPercentage.plus(combinedDistributionApys.supplyApyPercentage),
        ),
      },
    ];
  }, [asset, t]);
};

export default useAssetInfo;
