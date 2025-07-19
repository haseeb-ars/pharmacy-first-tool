export const sendFormData = async (formData) => {
  const payload = {
    access_key: '09d8dbe0-2525-4da9-9575-ce3ee8c231da',
    subject: 'New Booking Submission',
    name: `${formData.userDetails.firstName} ${formData.userDetails.lastName}`,
    email: formData.contactDetails.email,
    phone: formData.contactDetails.phone,
    message: `
🩺 Condition Selected: ${formData.condition || 'Not specified'}

👤 Patient Details:
Name: ${formData.userDetails.firstName} ${formData.userDetails.lastName}
DOB: ${formData.userDetails.dobDay}/${formData.userDetails.dobMonth}/${formData.userDetails.dobYear}
Age: ${formData.userDetails.age}
Gender: ${formData.userDetails.sex}
Postcode: ${formData.userDetails.postcode}

📞 Contact Info:
Email: ${formData.contactDetails.email}
Phone: ${formData.contactDetails.phone}

📝 Questionnaire Responses:
${formData.questionnaire.map((q, i) => {
  const bullets = q.bullets?.length
    ? '\n' + q.bullets.map(b => `• ${b}`).join('\n')
    : '';
  return `Q${i + 1}: ${q.question}${bullets}\n→ ${q.response}\n`;
}).join('\n')}
    `
  };

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    return await res.json();
  } catch (err) {
    console.error('Failed to send email:', err);
    return null;
  }
};
