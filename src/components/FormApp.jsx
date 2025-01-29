import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const validateForm = () => {
        const newErrors = {};


        if (!formData.name.trim()) {
            newErrors.name = "Ім'я обов'язкове для заповнення";
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Електронна пошта обов'язкова для заповнення";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Некоректний формат електронної пошти";
        }


        const phoneRegex = /^\d{12}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = "Телефон обов'язковий для заповнення";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Телефон повинен містити тільки цифри та мати довжину 12";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setSuccessMessage("Форма успішно заповнена!");
            console.log("Форма відправлена:", formData);
        } else {
            setSuccessMessage("");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Форма реєстрації</h1>
            <form onSubmit={handleSubmit} className="card p-4">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Ім'я:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    />
                    {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Електронна пошта:
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    />
                    {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Телефон:
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    />
                    {errors.phone && (
                        <div className="invalid-feedback">{errors.phone}</div>
                    )}
                </div>

                <button type="submit" className="btn btn-primary">
                    Відправити
                </button>
            </form>

            {successMessage && (
                <div className="alert alert-success mt-4">{successMessage}</div>
            )}
        </div>
    );
};

export default App;