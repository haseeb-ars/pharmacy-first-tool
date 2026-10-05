// calConfig.js
export const DEFAULT_CAL_LINK = process.env.REACT_APP_CAL_LINK || 'pharmacistfirst/pharmacy-first';

export const CAL_SERVICE_MAP = {
  impetigo: DEFAULT_CAL_LINK,
  shingles: DEFAULT_CAL_LINK,
  UTI: DEFAULT_CAL_LINK,
  uti: DEFAULT_CAL_LINK,
  soreThroat: DEFAULT_CAL_LINK,
  sorethroat: DEFAULT_CAL_LINK,
  sinusitis: DEFAULT_CAL_LINK,
  insectBite: DEFAULT_CAL_LINK,
  infectedInsectBites: DEFAULT_CAL_LINK,
  insectbite: DEFAULT_CAL_LINK,
  contraception: DEFAULT_CAL_LINK,
  weightloss: DEFAULT_CAL_LINK,
};

export const getCalLinkForService = (serviceKey) => {
  if (serviceKey && CAL_SERVICE_MAP[serviceKey]) {
    return CAL_SERVICE_MAP[serviceKey];
  }
  return DEFAULT_CAL_LINK;
};
