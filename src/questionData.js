const questionData = {
  UTI: [
    {
      question: "Are you female?",
      options: [
        { text: "Yes", eligible: true },
        { text: "No", eligible: false },
      ],
    },
    {
      question: "Are you aged 16 or older?",
      options: [
        { text: "Yes", eligible: true },
        { text: "No", eligible: false },
      ],
    },
  ],
  shingles: [
    {
      question: "Are you aged 50 or over?",
      options: [
        { text: "Yes", eligible: true },
        { text: "No", eligible: false },
      ],
    },
    {
      question: "Do you have a painful rash on one side of your body?",
      options: [
        { text: "Yes", eligible: true },
        { text: "No", eligible: false },
      ],
    },
  ],
  earInfection: [
    {
      question: "Is the patient under 18?",
      options: [
        { text: "Yes", eligible: true },
        { text: "No", eligible: false },
      ],
    },
    {
      question: "Is the ear discharging fluid?",
      options: [
        { text: "Yes", eligible: true },
        { text: "No", eligible: false },
      ],
    },
  ],
  // Add other conditions here
};

export default questionData;

