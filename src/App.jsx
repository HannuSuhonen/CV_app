import React, { useState } from 'react';
import ContactForm from './MainForm';
import FormDisplay from './FormDisplay.jsx';

function App() {
  const [formData, setFormData] = useState(null); // null = nothing submitted yet

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <ContactForm onSubmit={handleFormSubmit} />
      {formData && <FormDisplay data={formData} />}
    </div>
  );
}

export default App;

