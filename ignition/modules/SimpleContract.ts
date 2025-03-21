const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

const DEFAULT_MESSAGE = 'Hello, Contract!';

const SimpleContractModule = buildModule('SimpleContractModule', (m) => {
  const initialMessage = m.getParameter('initialMessage', DEFAULT_MESSAGE);
  const simpleContract = m.contract('SimpleContract', [initialMessage]);
  return { simpleContract };
});

module.exports = SimpleContractModule;