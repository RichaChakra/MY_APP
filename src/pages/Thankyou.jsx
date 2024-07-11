import React, { useEffect, useState } from 'react';
import './Thankyou.css'

const Thankyou = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  return (
    <div className="fullthankyou">
    <div>
      <h1>Thank you for submitting!</h1>
      <div>
        <h2>Submitted Details:</h2>
        {formData && (
          <>
            <p><span>Full Name:</span> <span>{formData.firstName} {formData.lastName}</span></p>
            <p><span>Username:</span> <span>{formData.username}</span></p>
            <p><span>Email:</span> <span>{formData.email}</span></p>
            <p><span>Phone Number:</span> <span>{formData.phoneNo}</span></p>
            <p><span>Country:</span> <span>{formData.country}</span></p>
            <p><span>City:</span> <span>{formData.city}</span></p>
            <p><span>PAN Number:</span> <span>{formData.panNo}</span></p>
            <p><span>Aadhar Number:</span> <span>{formData.aadharNo}</span></p>
            {/* Add more details as needed */}
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default Thankyou;
