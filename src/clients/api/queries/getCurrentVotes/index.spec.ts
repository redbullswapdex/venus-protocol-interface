import BigNumber from 'bignumber.js';
import { BigNumber as BN } from 'ethers';

import { XvsVault } from 'types/contracts';

import getCurrentVotes from '.';

const fakeAccountAddress = '0x000000000000000000000000000000000AcCoUnt';

describe('api/queries/getCurrentVotes', () => {
  test('returns current votes on success', async () => {
    const fakeOutput = BN.from(10000);

    const getCurrentVotesMock = jest.fn(async () => fakeOutput);

    const fakeContract = {
      getCurrentVotes: getCurrentVotesMock,
    } as unknown as XvsVault;

    const response = await getCurrentVotes({
      xvsVaultContract: fakeContract,
      accountAddress: fakeAccountAddress,
    });

    expect(getCurrentVotesMock).toHaveBeenCalledTimes(1);
    expect(getCurrentVotesMock).toHaveBeenCalledWith(fakeAccountAddress);
    expect(response).toEqual({
      votesWei: new BigNumber(fakeOutput.toString()),
    });
  });
});
