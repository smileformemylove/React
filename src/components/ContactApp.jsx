import React, { useState, useEffect } from "react";
import "../ContactsApp.css";

function ContactsApp() {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newContact, setNewContact] = useState({ name: "", username: "", phone: "" });

    useEffect(() => {
        // Fetch initial contacts from the API
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setContacts(data.map(({ id, name, username, phone }) => ({ id, name, username, phone })));
            });
    }, []);

    const handleDelete = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContact({ ...newContact, [name]: value });
    };

    const handleSave = () => {
        const newId = Math.max(0, ...contacts.map((contact) => contact.id)) + 1;
        setContacts([...contacts, { id: newId, ...newContact }]);
        setNewContact({ name: "", username: "", phone: "" });
        setShowForm(false);
    };

    const handleCancel = () => {
        setNewContact({ name: "", username: "", phone: "" });
        setShowForm(false);
    };

    return (
        <div className="contacts-app">
            <h1>Contacts</h1>
            <table className="contacts-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button onClick={() => handleDelete(contact.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <button onClick={() => setShowForm(true)} className="add-contact-button">
                Add New Contact
            </button>

            {showForm && (
                <div className="contact-form">
                    <h2>Add Contact</h2>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={newContact.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={newContact.username}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="text"
                            name="phone"
                            value={newContact.phone}
                            onChange={handleInputChange}
                        />
                    </label>
                    <div className="form-buttons">
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactsApp;
