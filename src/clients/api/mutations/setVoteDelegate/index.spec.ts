import { checkForXvsVaultProxyTransactionError } from 'errors';

import fakeAddress from '__mocks__/models/address';
import fakeContractReceipt from '__mocks__/models/contractReceipt';
import { XvsVault } from 'types/contracts';

import setVoteDelegate from '.';

jest.mock('errors/transactionErrors');

describe('api/mutation/setVoteDelegate', () => {
  test('returns contract receipt when request succeeds', async () => {
    const waitMock = jest.fn(async () => fakeContractReceipt);
    const delegateMock = jest.fn(() => ({
      wait: waitMock,
    }));

    const fakeContract = {
      delegate: delegateMock,
    } as unknown as XvsVault;

    const response = await setVoteDelegate({
      xvsVaultContract: fakeContract,
      delegateAddress: fakeAddress,
    });

    expect(response).toBe(fakeContractReceipt);
    expect(delegateMock).toHaveBeenCalledTimes(1);
    expect(delegateMock).toHaveBeenCalledWith(fakeAddress);
    expect(waitMock).toBeCalledTimes(1);
    expect(waitMock).toHaveBeenCalledWith(1);
    expect(checkForXvsVaultProxyTransactionError).toHaveBeenCalledTimes(1);
    expect(checkForXvsVaultProxyTransactionError).toHaveBeenCalledWith(fakeContractReceipt);
  });
});
