import React from 'react';

import { poolData } from '__mocks__/models/pools';
import renderComponent from 'testUtils/renderComponent';

import PoolBreakdown, { PoolBreakdownProps } from '.';
import SUMMARY_TEST_IDS from '../Summary/testIds';
import TEST_IDS from './testIds';

jest.mock('clients/api');

const baseProps: PoolBreakdownProps = {
  pool: poolData[0],
};

describe('pages/Account/PoolBreakdown', () => {
  it('renders without crashing', () => {
    renderComponent(<PoolBreakdown {...baseProps} />);
  });

  it('displays content correctly', () => {
    const { getByTestId } = renderComponent(<PoolBreakdown {...baseProps} />);

    expect(getByTestId(TEST_IDS.title).textContent).toMatchSnapshot();
    expect(getByTestId(SUMMARY_TEST_IDS.container).textContent).toMatchSnapshot();
    expect(getByTestId(TEST_IDS.tables).textContent).toMatchSnapshot();
  });
});
