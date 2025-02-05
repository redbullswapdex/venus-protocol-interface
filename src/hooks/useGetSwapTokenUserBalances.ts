import BigNumber from 'bignumber.js';
import { TokenBalance } from 'types';

import { useGetTokenBalances } from 'clients/api';
import { PANCAKE_SWAP_TOKENS } from 'constants/tokens';

const tokens = Object.values(PANCAKE_SWAP_TOKENS);

const useGetSwapTokenUserBalances = ({ accountAddress }: { accountAddress?: string }) => {
  // By default we return the list of tokens with undefined balances so they can
  // still be listed while balances are being fetched
  const defaultTokenBalances: TokenBalance[] = tokens.map(token => ({
    token,
    balanceWei: new BigNumber(0),
  }));

  const { data } = useGetTokenBalances(
    {
      accountAddress: accountAddress || '',
      tokens,
    },
    {
      enabled: !!accountAddress,
    },
  );

  return {
    data: data?.tokenBalances || defaultTokenBalances,
  };
};

export default useGetSwapTokenUserBalances;
