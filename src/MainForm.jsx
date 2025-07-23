import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: '',
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    startDate: '',
    endDate: '',
    currentlyWorking: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <div style={{
      maxWidth: '700px',
      margin: '2em auto',
      padding: '2em',
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      borderRadius: '12px'
    }}>
      <h2 style={{
        fontSize: '1.5em',
        marginBottom: '1em',
        color: '#333'
      }}>
        Contact Form
      </h2>
      <form onSubmit={handleSubmit}>

        {/* Contact Info */}
        <InputField label="Name" name="name" value={formState.name} onChange={handleChange} />
        <InputField label="Email" name="email" type="email" value={formState.email} onChange={handleChange} />
        <InputField label="Phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} />

        <hr style={{ margin: '2em 0' }} />
        <h3 style={{ fontSize: '1.2em' }}>Education</h3>
        <InputField label="School Name" name="schoolName" value={formState.schoolName} onChange={handleChange} />
        <InputField label="Title of Study" name="titleOfStudy" value={formState.titleOfStudy} onChange={handleChange} />
        <InputField label="Date of Study" name="dateOfStudy" type="date" value={formState.dateOfStudy} onChange={handleChange} />

        <hr style={{ margin: '2em 0' }} />
        <h3 style={{ fontSize: '1.2em' }}>Work Experience</h3>
        <InputField label="Company Name" name="companyName" value={formState.companyName} onChange={handleChange} />
        <InputField label="Position Title" name="positionTitle" value={formState.positionTitle} onChange={handleChange} />
        
        <div style={{ marginBottom: '1em' }}>
          <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9em' }}>Main Responsibilities</label>
          <textarea
            name="mainResponsibilities"
            value={formState.mainResponsibilities}
            onChange={handleChange}
            rows="4"
            style={{
              width: '100%',
              padding: '0.5em',
              fontSize: '1em',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>

        <InputField label="Start Date" name="startDate" type="date" value={formState.startDate} onChange={handleChange} />
        <InputField label="End Date" name="endDate" type="date" value={formState.endDate} onChange={handleChange} disabled={formState.currentlyWorking} />

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
          <input
            type="checkbox"
            name="currentlyWorking"
            checked={formState.currentlyWorking}
            onChange={handleChange}
            style={{ marginRight: '0.5em' }}
          />
          <label>Still working here</label>
        </div>

        <button type="submit" style={{
          width: '100%',
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '0.75em 1em',
          fontSize: '1em',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Helper for repeated inputs
const InputField = ({ label, name, type = 'text', value, onChange, disabled }) => (
  <div style={{ marginBottom: '1em' }}>
    <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9em' }}>{label}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={{
        width: '100%',
        padding: '0.5em',
        fontSize: '1em',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}
    />
  </div>
);

export default ContactForm;
