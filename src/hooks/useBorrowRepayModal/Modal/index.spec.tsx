import { waitFor } from '@testing-library/react';
import React from 'react';
import { Pool, VToken } from 'types';

import { poolData } from '__mocks__/models/pools';
import { DISABLED_TOKENS } from 'constants/disabledTokens';
import { TESTNET_VBEP_TOKENS } from 'constants/tokens';
import renderComponent from 'testUtils/renderComponent';
import en from 'translation/translations/en.json';

import BorrowRepay from '.';

const fakePool: Pool = poolData[0];
const fakeAsset = fakePool.assets[0];

jest.mock('clients/api');

describe('hooks/useBorrowRepayModal', () => {
  it('renders without crashing', async () => {
    const { getByText } = renderComponent(
      <BorrowRepay
        onClose={jest.fn()}
        vToken={fakeAsset.vToken}
        poolComptrollerAddress={fakePool.comptrollerAddress}
      />,
    );
    await waitFor(() => expect(getByText(en.borrowRepayModal.borrowTabTitle)));
  });

  it.each(DISABLED_TOKENS)('does not display borrow tab when asset is %s', async token => {
    const fakeVToken: VToken = {
      ...TESTNET_VBEP_TOKENS['0x6d6f697e34145bb95c54e77482d97cc261dc237e'], // This doesn't matter, only the underlying token is used
      underlyingToken: token,
    };

    const { queryByText } = renderComponent(() => (
      <BorrowRepay
        onClose={jest.fn()}
        vToken={fakeVToken}
        poolComptrollerAddress={fakePool.comptrollerAddress}
      />
    ));

    await waitFor(() => expect(queryByText(en.borrowRepayModal.borrowTabTitle)).toBeNull());
  });
});
