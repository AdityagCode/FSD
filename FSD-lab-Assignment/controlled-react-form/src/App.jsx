import React, { useState } from 'react';
import './App.css';

const initialForm = {
    name: '',
    email: '',
    phone: '',
    password: ''
};

const initialErrors = {
    name: '',
    email: '',
    phone: '',
    password: ''
};

function App() {
    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState(initialErrors);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required.';
                if (!/^[A-Za-z]{3,}$/.test(value.trim())) return 'Name must contain only letters and at least 3 characters.';
                return '';
            case 'email':
                if (!value.trim()) return 'Email is required.';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address.';
                return '';
            case 'phone':
                if (!value.trim()) return 'Phone number is required.';
                if (!/^\d{10}$/.test(value.trim())) return 'Phone number must be exactly 10 digits.';
                return '';
            case 'password':
                if (!value) return 'Password is required.';
                if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)) return 'Password must be at least 8 characters with an uppercase letter, lowercase letter, and number.';
                return '';
            default:
                return '';
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));

        const fieldError = validateField(name, value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: fieldError
        }));

        if (isSubmitted) {
            setIsSubmitted(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const nextErrors = {};
        let hasError = false;

        Object.keys(formData).forEach((field) => {
            const errorMessage = validateField(field, formData[field]);
            nextErrors[field] = errorMessage;
            if (errorMessage) hasError = true;
        });

        setErrors(nextErrors);

        if (hasError) {
            setIsSubmitted(false);
            return;
        }

        setIsSubmitted(true);
        setFormData(initialForm);
        setErrors(initialErrors);
    };

    return (
        <div className="app-container">
            <div className="form-card">
                <h1>User Registration</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="field-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className={errors.name ? 'input-error' : ''}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="field-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="field-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="10-digit phone number"
                            className={errors.phone ? 'input-error' : ''}
                        />
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>

                    <div className="field-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            className={errors.password ? 'input-error' : ''}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                    {isSubmitted && <p className="success-message">Registration successful!</p>}
                </form>
            </div>
        </div>
    );
}

export default App;