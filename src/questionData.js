const questionData = {
  impetigo: {
    header: "Impetigo",
    questions: [
      {
        question: "Do you have any of the following symptoms?",
        bullets: [
          "Red sores or blisters that rupture and form a yellowish crust",
          "Crusting usually around nose, mouth, limbs, or torso",
          "Mild itching or discomfort",
          "Golden yellow or brown crusts forming after rupture"
        ],
        options: [
          {
            text: "Yes, I have these symptoms",
            eligible: true
          },
          {
            text: "No, I don’t have these symptoms",
            eligible: false,
            ineligibleNote: "You may not have impetigo. Please contact your GP for further assessment."
          }
        ]
      },
      {
        question: "Do any of the following apply to you?",
        bullets: [
          "Bullous impetigo (larger blisters on torso)",
          "Recurrent impetigo (2 or more episodes this year)",
          "You are pregnant and under 16 years old"
        ],
        options: [
          {
            text: "Yes, one or more apply to me",
            eligible: false,
            ineligibleNote: "This consultation is not suitable for you. Please contact your GP."
          },
          {
            text: "No, none of these apply to me",
            eligible: true
          }
        ]
      }
    ]
  },

  shingles: {
    header: "Shingles",
    questions: [
      {
        question: "Do you have any of the following signs of serious illness?",
        bullets: [
          "Neck stiffness, photophobia, mottled skin (meningitis)",
          "Disorientation or confusion (encephalitis)",
          "Muscle weakness, loss of bladder/bowel control (myelitis)",
          "Facial paralysis, red eye (ophthalmic shingles)"
        ],
        options: [
          {
            text: "Yes, I have these symptoms",
            eligible: false,
            ineligibleNote: "You may be seriously unwell. Please seek urgent medical care."
          },
          {
            text: "No, I don’t have these symptoms",
            eligible: true
          }
        ]
      },
      {
        question: "Do your symptoms follow typical shingles progression?",
        bullets: [
          "Burning/tingling/stabbing pain before rash",
          "Rash appears in 2-3 days on one side of the body",
          "Fluid-filled blisters that crust over",
          "No rash crossing both sides of the body"
        ],
        options: [
          {
            text: "Yes, I have these symptoms",
            eligible: true
          },
          {
            text: "No, I don’t have these symptoms",
            eligible: false,
            ineligibleNote: "Your symptoms may not indicate shingles. Please consult your GP."
          }
        ]
      }
    ]
  },

  UTI: {
    header: "Urinary Tract Infection",
    questions: [
      {
        question: "Do you have any signs or symptoms of pyelonephritis?",
        bullets: [
          "Kidney pain/tenderness in back under ribs",
          "Shaking chills, flu-like symptoms",
          "Fever above 37.9°C",
          "Nausea/vomiting"
        ],
        options: [
          {
            text: "Yes, I have these symptoms",
            eligible: false,
            ineligibleNote: "You may have a kidney infection. Please seek urgent care."
          },
          {
            text: "No, I don’t have these symptoms",
            eligible: true
          }
        ]
      },
      {
        question: "Do you have any of the following symptoms or conditions?",
        bullets: [
          "Vaginal discharge",
          "Urethritis (pain after sex or irritants)",
          "Sexually transmitted infection risk",
          "Genitourinary symptoms of menopause",
          "Are you immunosuppressed?"
        ],
        options: [
          {
            text: "Yes, I have one or more",
            eligible: false,
            ineligibleNote: "This consultation may not be suitable. Please consult your GP or sexual health clinic."
          },
          {
            text: "No, none apply to me",
            eligible: true
          }
        ]
      }
    ]
  },

  soreThroat: {
    header: "Acute Sore Throat",
    questions: [
      {
        question: "Do you have any of these serious symptoms?",
        bullets: [
          "Drooling, dysphagia, or distress (suspected epiglottitis)",
          "Signs of cancer, glandular fever, or scarlet fever",
          "You are immunosuppressed"
        ],
        options: [
          {
            text: "Yes, I have one or more of these symptoms",
            eligible: false,
            ineligibleNote: "You may need urgent care. Please contact your GP immediately."
          },
          {
            text: "No, I don’t have these symptoms",
            eligible: true
          }
        ]
      },
      {
        question: "Do you have a FeverPAIN score of 4 or 5?",
        bullets: [
          "Fever (over 38°C)",
          "Purulence (pus on tonsils)",
          "Symptoms started less than 3 days ago",
          "Severely inflamed tonsils",
          "No cough or runny nose"
        ],
        options: [
          {
            text: "Yes, I meet 4 or more of these",
            eligible: true
          },
          {
            text: "No, I have fewer than 4",
            eligible: false,
            ineligibleNote: "You may not need antibiotics. Consider self-care or consult a pharmacist."
          }
        ]
      }
    ]
  },

  sinusitis: {
    header: "Acute Sinusitis",
    questions: [
      {
        question: "Do you have any of the following serious symptoms?",
        bullets: [
          "Eye swelling, double vision, or vision loss",
          "Severe frontal headache",
          "Neurological symptoms (confusion, weakness)"
        ],
        options: [
          {
            text: "Yes, I have these symptoms",
            eligible: false,
            ineligibleNote: "You may require urgent care. Please contact your GP immediately."
          },
          {
            text: "No, I don’t have these symptoms",
            eligible: true
          }
        ]
      },
      {
        question: "Have you had symptoms for more than 10 days without improvement?",
        bullets: [
          "Facial pain or pressure",
          "Nasal discharge or congestion",
          "Loss of smell or cough"
        ],
        options: [
          {
            text: "Yes, more than 10 days and no improvement",
            eligible: true
          },
          {
            text: "No, less than 10 days or improving",
            eligible: false,
            ineligibleNote: "Symptoms may resolve on their own. Self-care is recommended at this stage."
          }
        ]
      }
    ]
  },

  insectBite: {
    header: "Infected Insect Bite",
    questions: [
      {
        question: "Is your bite caused by any of the following?",
        bullets: [
          "Animal or human bite",
          "Tick bite with bullseye rash",
          "Travel-related or exotic insect bite"
        ],
        options: [
          {
            text: "Yes, one or more apply",
            eligible: false,
            ineligibleNote: "You should seek medical advice. This is outside the scope of this service."
          },
          {
            text: "No, none apply",
            eligible: true
          }
        ]
      },
      {
        question: "Do you have these signs of infection?",
        bullets: [
          "Redness, pain, or swelling",
          "Warm skin around the bite",
          "Itching or discomfort"
        ],
        options: [
          {
            text: "Yes, I have 3 or more",
            eligible: true
          },
          {
            text: "No, I don’t have 3 or more",
            eligible: false,
            ineligibleNote: "This may not be an infected bite. You may not need treatment."
          }
        ]
      }
    ]
  },





  contraception: {
    header: "Contraception",
    questions: [
      {
        question: "Have you ever used the pill before?",
        options: [
          {
            text: "Yes, I am restarting",
            eligible: true, // Go directly to booking
          },
          {
            text: "Yes, I am currently taking it",
            eligible: "followup", // Custom flag to trigger next question
          },
          {
            text: "No, It’s my first time",
            eligible: true, // Go directly to booking
          }
        ]
      },
      {
        question: "Which one did you take?",
        options: [
          { text: "Microgynon 30", eligible: true },
          { text: "Rigevidon", eligible: true },
          { text: "Yasmin", eligible: true },
          { text: "Cerelle", eligible: true },
          { text: "Gedarel", eligible: true },
          { text: "Femodette", eligible: true },
          { text: "Cerazette", eligible: true },
          { text: "Noriday", eligible: true },
          { text: "Desogestrel", eligible: true },
          { text: "Other", eligible: true },
          { text: "Not sure", eligible: true },
          { text: "First Time User", eligible: true }
        ]
      }
    ]
  },



  weightloss: {
  header: "Weight Loss Service",
  questions: [
    {
      question: "How old are you?",
      options: [
        { text: "Under 18", eligible: true },
        { text: "18 to 74", eligible: true },
        { text: "75 to 85", eligible: true },
        { text: "85 or above", eligible: true }
      ]
    },
    {
      question: "Have you ever been diagnosed with any of the following?",
      bullets: [
        "Liver disease", "Pancreatitis", "Diabetes type 1", "Diabetes type 2", "Pre diabetes",
        "Diabetic retinopathy/diabetic eye disease", "Heart Failure", "Kidney Problems",
        "Thyroid cancer or family history of thyroid cancer", "Gallstones", "Weight related surgery",
        "Fast heart rate (Tachycardia)", "Multiple endocrine neoplasia 2 (MEN2)",
        "Suicidal thoughts", "Eating disorders", "Cholestasis", "Chronic malabsorption syndrome"
      ],
      options: [
        { text: "Yes", eligible: true },
        { text: "No", eligible: true }
      ]
    },
    {
      question: "Do you have any of the following weight-related conditions?",
      bullets: [
        "Hypertension (high blood pressure)", "Dyslipidaemia (high cholesterol)",
        "Cardiovascular disease", "Pre-diabetes", "Knee or hip osteoarthritis",
        "Obstructive sleep apnoea", "Asthma/COPD", 
        "Liver disease (NAFLD/NASH) and polycystic ovary syndrome (PCOS)", "Erectile dysfunction"
      ],
      options: [
        { text: "Yes", eligible: true },
        { text: "No", eligible: true }
      ]
    }
  ]
}







  
};

export default questionData;
