import { ContractReceipt } from 'ethers';

import { GovernorBravoDelegate } from 'types/contracts';

export interface CancelProposalInput {
  governorBravoContract: GovernorBravoDelegate;
  proposalId: number;
}

export type CancelProposalOutput = ContractReceipt;

const cancelProposal = async ({
  governorBravoContract,
  proposalId,
}: CancelProposalInput): Promise<CancelProposalOutput> => {
  const transaction = await governorBravoContract.cancel(proposalId);
  return transaction.wait(1);
};

export default cancelProposal;
