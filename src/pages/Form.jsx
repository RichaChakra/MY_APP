import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(formData);
        if (Object.keys(errors).length === 0) {
            // Successful submission
            console.log('Form submitted successfully:', formData);
            localStorage.setItem('formData', JSON.stringify(formData));
            navigate('/thankyou');
        } else {
            setErrors(errors);
        }
    };


    const validateForm = (data) => {
        let errors = {};

        if (!data.firstName.trim()) {
            errors.firstName = 'First Name is required';
        }

        if (!data.lastName.trim()) {
            errors.lastName = 'Last Name is required';
        }

        if (!data.username.trim()) {
            errors.username = 'Username is required';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if (!data.password.trim()) {
            errors.password = 'Password is required';
        } else if (data.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        if (!data.phoneNo.trim()) {
            errors.phoneNo = 'Phone Number is required';
        } else if (!/^\+?\d{1,3}[- ]?\d{9,12}$/.test(data.phoneNo)) {
            errors.phoneNo = 'Phone Number is invalid';
        }

        if (!data.country.trim()) {
            errors.country = 'Country is required';
        }

        if (!data.city.trim()) {
            errors.city = 'City is required';
        }

        if (!data.panNo.trim()) {
            errors.panNo = 'Pan Number is required';
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(data.panNo.toUpperCase())) {
            errors.panNo = 'Pan Number is invalid';
        }

        if (!data.aadharNo.trim()) {
            errors.aadharNo = 'Aadhar Number is required';
        } else if (!/^\d{12}$/.test(data.aadharNo)) {
            errors.aadharNo = 'Aadhar Number is invalid';
        }

        return errors;
    };


    return (
        <>
            <div className="full-block">
                <div className='fullform'>
                    <h1>Registration Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <span>{errors.firstName}</span>}
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <span>{errors.lastName}</span>}
                        </div>
                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            {errors.username && <span>{errors.username}</span>}
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span>{errors.email}</span>}
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                        <div>
                            <label>Phone Number:</label>
                            <input
                                type="text"
                                name="phoneNo"
                                value={formData.phoneNo}
                                onChange={handleChange}
                            />
                            {errors.phoneNo && <span>{errors.phoneNo}</span>}
                        </div>
                        <div>
                            <label>Country:</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            />
                            {errors.country && <span>{errors.country}</span>}
                        </div>
                        <div>
                            <label>City:</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && <span>{errors.city}</span>}
                        </div>
                        <div>
                            <label>PAN Number:</label>
                            <input
                                type="text"
                                name="panNo"
                                value={formData.panNo}
                                onChange={handleChange}
                            />
                            {errors.panNo && <span>{errors.panNo}</span>}
                        </div>
                        <div>
                            <label>Aadhar Number:</label>
                            <input
                                type="text"
                                name="aadharNo"
                                value={formData.aadharNo}
                                onChange={handleChange}
                            />
                            {errors.aadharNo && <span>{errors.aadharNo}</span>}
                        </div>
                        <button type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Form;
