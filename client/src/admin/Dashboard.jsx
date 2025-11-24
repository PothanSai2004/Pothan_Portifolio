import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Link } from 'react-router-dom';

const MessagesView = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMessages = () => {
        api.getMessages().then(setMessages).finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            try {
                await api.deleteMessage(id);
                fetchMessages();
            } catch (error) {
                alert('Failed to delete message');
            }
        }
    };

    if (loading) return <div>Loading messages...</div>;

    return (
        <div>
            <h3>Inbox ({messages.length})</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {messages.length === 0 ? (
                    <p style={{ color: 'var(--text-secondary)' }}>No messages yet.</p>
                ) : (
                    messages.slice().reverse().map(msg => (
                        <div key={msg.id} style={{
                            background: 'var(--bg-primary)',
                            padding: '1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            position: 'relative'
                        }}>
                            <button
                                onClick={() => handleDelete(msg.id)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'red',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '0.25rem 0.5rem',
                                    cursor: 'pointer',
                                    fontSize: '0.8rem'
                                }}
                            >
                                Delete
                            </button>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', paddingRight: '4rem' }}>
                                <strong style={{ color: 'var(--accent-primary)' }}>{msg.subject}</strong>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                    {new Date(msg.timestamp).toLocaleString()}
                                </span>
                            </div>
                            <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                <strong>{msg.name}</strong> ({msg.email})
                                {msg.profession && <span style={{ color: 'var(--text-secondary)' }}> - {msg.profession}</span>}
                            </div>
                            <p style={{ whiteSpace: 'pre-wrap', color: 'var(--text-primary)' }}>{msg.message}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

const Dashboard = ({ initialData, onUpdate }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState('');
    const [data, setData] = useState(initialData);
    const [activeTab, setActiveTab] = useState('intro');
    const [status, setStatus] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (pin === 'Revathi@2912') {
            setIsAuthenticated(true);
        } else {
            alert('Invalid PIN');
        }
    };

    const handleSave = async () => {
        setStatus('saving');
        try {
            await api.updateData(data);
            setStatus('success');
            if (onUpdate) onUpdate();
            setTimeout(() => setStatus(''), 2000);
        } catch (error) {
            setStatus('error');
        }
    };

    const handleImageUpload = async (e, section, index, field) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('http://localhost:5000/api/upload', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();

            if (result.imageUrl) {
                // Update state with new image URL
                setData(prev => {
                    const newData = { ...prev };
                    if (section === 'intro') {
                        newData.intro.image = result.imageUrl;
                    } else if (Array.isArray(newData[section])) {
                        newData[section][index][field] = result.imageUrl;
                    }
                    return newData;
                });
            }
        } catch (error) {
            console.error('Upload failed', error);
            alert('Upload failed');
        }
    };

    const handleChange = (section, field, value) => {
        setData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    if (!isAuthenticated) {
        return (
            <div style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-primary)'
            }}>
                <form onSubmit={handleLogin} style={{
                    background: 'var(--bg-card)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center'
                }}>
                    <h2 style={{ marginBottom: '1rem' }}>Admin Access</h2>
                    <input
                        type="password"
                        value={pin}
                        onChange={e => setPin(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            marginBottom: '1rem',
                            width: '100%'
                        }}
                    />
                    <button type="submit" style={{
                        padding: '0.5rem 2rem',
                        background: 'var(--accent-primary)',
                        color: 'var(--bg-primary)',
                        fontWeight: 'bold',
                        borderRadius: 'var(--radius-sm)'
                    }}>Login</button>
                    <div style={{ marginTop: '1rem' }}>
                        <Link to="/" style={{ color: 'var(--text-secondary)' }}>Back to Home</Link>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', padding: '2rem' }}>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                borderBottom: '1px solid var(--bg-card)',
                paddingBottom: '1rem'
            }}>
                <h1>Dashboard</h1>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{
                        color: status === 'success' ? 'var(--accent-primary)' : status === 'error' ? 'red' : 'var(--text-secondary)'
                    }}>
                        {status === 'saving' ? 'Saving...' : status === 'success' ? 'Saved!' : ''}
                    </span>
                    <button onClick={handleSave} style={{
                        padding: '0.5rem 1.5rem',
                        background: 'var(--accent-primary)',
                        color: 'var(--bg-primary)',
                        fontWeight: 'bold',
                        borderRadius: 'var(--radius-sm)'
                    }}>Save Changes</button>
                    <Link to="/" style={{ color: 'var(--text-primary)' }}>View Site</Link>
                </div>
            </header>

            <div style={{ display: 'flex', gap: '2rem' }}>
                {/* Sidebar */}
                <aside style={{ width: '200px' }}>
                    {['intro', 'skills', 'projects', 'certifications', 'experience', 'messages'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                display: 'block',
                                width: '100%',
                                textAlign: 'left',
                                padding: '1rem',
                                background: activeTab === tab ? 'var(--bg-card)' : 'transparent',
                                color: activeTab === tab ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                borderRadius: 'var(--radius-sm)',
                                marginBottom: '0.5rem',
                                textTransform: 'capitalize'
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </aside>

                {/* Content Area */}
                <main style={{ flex: 1, background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                    {activeTab === 'intro' && (
                        <div>
                            <h3>Introduction</h3>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                                <input
                                    value={data.intro.name}
                                    onChange={e => handleChange('intro', 'name', e.target.value)}
                                    style={{ width: '100%', padding: '0.5rem' }}
                                />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Profile Image</label>
                                <input
                                    type="file"
                                    onChange={e => handleImageUpload(e, 'intro')}
                                    style={{ marginBottom: '0.5rem' }}
                                />
                                {data.intro.image && <img src={data.intro.image} alt="Preview" style={{ height: '100px' }} />}
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Description</label>
                                <textarea
                                    value={data.intro.description}
                                    onChange={e => handleChange('intro', 'description', e.target.value)}
                                    style={{ width: '100%', padding: '0.5rem', height: '100px' }}
                                />
                            </div>
                        </div>
                    )}

                    {activeTab === 'messages' && (
                        <MessagesView />
                    )}

                    {/* JSON Editors for complex arrays */}
                    {['skills', 'projects', 'certifications', 'experience'].includes(activeTab) && (
                        <div>
                            <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} (JSON Editor)</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                Edit the raw JSON below. For images, you can manually paste URLs or use the uploader below to generate a local URL.
                                <br />
                                <strong>Tip:</strong> For large files or reliability, consider using direct links to Google Drive images or other hosting services.
                            </p>

                            <div style={{ marginBottom: '1rem', padding: '1rem', border: '1px dashed var(--text-secondary)' }}>
                                <h4>Quick Image Uploader</h4>
                                <input type="file" onChange={async (e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        const formData = new FormData();
                                        formData.append('image', file);
                                        try {
                                            const res = await fetch('http://localhost:5000/api/upload', { method: 'POST', body: formData });
                                            const json = await res.json();
                                            alert('Image uploaded! URL: ' + json.imageUrl);
                                        } catch (err) {
                                            alert('Upload failed');
                                        }
                                    }
                                }} />
                            </div>

                            <textarea
                                value={JSON.stringify(data[activeTab], null, 2)}
                                onChange={e => {
                                    try {
                                        const parsed = JSON.parse(e.target.value);
                                        setData(prev => ({ ...prev, [activeTab]: parsed }));
                                    } catch (err) {
                                        // Ignore parse errors
                                    }
                                }}
                                style={{ width: '100%', height: '500px', fontFamily: 'monospace', padding: '1rem', background: 'var(--bg-primary)', color: 'var(--text-primary)', border: 'none' }}
                            />
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
