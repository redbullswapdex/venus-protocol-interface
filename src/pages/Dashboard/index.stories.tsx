import { ComponentMeta } from '@storybook/react';
import noop from 'noop-ts';
import React from 'react';

import { poolData } from '__mocks__/models/pools';
import { withRouter } from 'stories/decorators';

import { DashboardUi } from '.';

export default {
  title: 'Pages/Dashboard',
  component: DashboardUi,
  decorators: [withRouter],
} as ComponentMeta<typeof DashboardUi>;

export const Default = () => (
  <DashboardUi
    areHigherRiskPoolsDisplayed
    onHigherRiskPoolsToggleChange={noop}
    searchValue=""
    onSearchInputChange={noop}
    pools={poolData}
  />
);
