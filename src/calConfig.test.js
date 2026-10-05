import { getCalLinkForService, DEFAULT_CAL_LINK, CAL_SERVICE_MAP } from './calConfig';

describe('calConfig', () => {
  test('returns default cal link for undefined or unknown service', () => {
    expect(getCalLinkForService()).toBe('pharmacistfirst/pharmacy-first');
    expect(getCalLinkForService('unknown_service')).toBe('pharmacistfirst/pharmacy-first');
  });

  test('returns correct cal link for known services', () => {
    Object.keys(CAL_SERVICE_MAP).forEach((service) => {
      expect(getCalLinkForService(service)).toBe('pharmacistfirst/pharmacy-first');
    });
  });
});
