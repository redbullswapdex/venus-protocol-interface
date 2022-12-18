/** @jsxImportSource @emotion/react */
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'translation';
import { PoolRiskRating } from 'types';

import { Tooltip } from '../Tooltip';
import { useStyles } from './styles';

interface RiskLevelProps {
  className?: string;
  variant: PoolRiskRating;
}

export const RiskLevel = ({ variant, ...containerProps }: RiskLevelProps) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const getText = () => {
    if (variant === 'MINIMAL') {
      return t('riskRating.minimal');
    }

    if (variant === 'LOW') {
      return t('riskRating.low');
    }

    if (variant === 'MEDIUM') {
      return t('riskRating.medium');
    }

    if (variant === 'HIGH') {
      return t('riskRating.high');
    }

    return t('riskRating.veryHigh');
  };

  return (
    <Tooltip title={t('riskRating.tooltip')} css={styles.container} {...containerProps}>
      <div css={styles.content}>
        <div css={styles.getDot({ variant })} />

        <Typography css={styles.getText({ variant })} component="span" variant="small2">
          {getText()}
        </Typography>
      </div>
    </Tooltip>
  );
};

export const RiskLevelMinimal: React.FC<Omit<RiskLevelProps, 'variant'>> = props => (
  <RiskLevel variant="MINIMAL" {...props} />
);

export const RiskLevelLow: React.FC<Omit<RiskLevelProps, 'variant'>> = props => (
  <RiskLevel variant="LOW" {...props} />
);

export const RiskLevelMedium: React.FC<Omit<RiskLevelProps, 'variant'>> = props => (
  <RiskLevel variant="MEDIUM" {...props} />
);

export const RiskLevelHigh: React.FC<Omit<RiskLevelProps, 'variant'>> = props => (
  <RiskLevel variant="HIGH" {...props} />
);

export const RiskLevelVeryHigh: React.FC<Omit<RiskLevelProps, 'variant'>> = props => (
  <RiskLevel variant="VERY_HIGH" {...props} />
);
