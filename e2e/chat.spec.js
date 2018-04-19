const { blacklistLiveReloadUrl, reloadApp } = require('detox-expo-helpers');

describe('Chat app', () => {
  beforeEach(async () => {
    await blacklistLiveReloadUrl();
    await reloadApp();
  });

  it('should have welcome screen', async () => {
    await waitFor(element(by.id('welcome'))).toBeVisible().withTimeout(1000);
  });
});
