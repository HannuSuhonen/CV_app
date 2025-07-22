import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
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
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };

  console.log(formData);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Basic Contact */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" value={formData.name} onChange={handleChange} className="input" required />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} className="input" required />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="input" />
        </div>

        <hr className="my-6" />

        {/* Education */}
        <h3 className="text-xl font-semibold text-gray-700">Education</h3>
        <div>
          <label className="block text-sm font-medium">School Name</label>
          <input name="schoolName" value={formData.schoolName} onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="block text-sm font-medium">Title of Study</label>
          <input name="titleOfStudy" value={formData.titleOfStudy} onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="block text-sm font-medium">Date of Study</label>
          <input name="dateOfStudy" type="date" value={formData.dateOfStudy} onChange={handleChange} className="input" />
        </div>

        <hr className="my-6" />

        {/* Work Experience */}
        <h3 className="text-xl font-semibold text-gray-700">Work Experience</h3>
        <div>
          <label className="block text-sm font-medium">Company Name</label>
          <input name="companyName" value={formData.companyName} onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="block text-sm font-medium">Position Title</label>
          <input name="positionTitle" value={formData.positionTitle} onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="block text-sm font-medium">Main Responsibilities</label>
          <textarea name="mainResponsibilities" value={formData.mainResponsibilities} onChange={handleChange} className="input" rows="4" />
        </div>

        <div>
          <label className="block text-sm font-medium">Start Date</label>
          <input name="startDate" type="date" value={formData.startDate} onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="block text-sm font-medium">End Date</label>
          <input
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            className="input"
            disabled={formData.currentlyWorking}
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="currentlyWorking"
            checked={formData.currentlyWorking}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm">Still working here</label>
        </div>

        {/* Submit */}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
