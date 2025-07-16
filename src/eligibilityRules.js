const eligibilityRules = {
  UTI: {
    minAge: 16,
    maxAge: 64,
    gender: "female" // female-only
  },
  shingles: {
    minAge: 18
  },
  sinusitis: {
    minAge: 18 // example: children only
  },
  impetigo:{
   minAge: 1 
  },
  soreThroat:{
    minAge: 5
  },
  infectedInsectBites:{
    minAge: 1
  }
  // Add rules for other conditions as needed
};

export default eligibilityRules;

