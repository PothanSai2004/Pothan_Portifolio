// import React, { useState } from 'react';
// import { api } from '../services/api';

// const Contact = ({ data }) => {
//     const [formState, setFormState] = useState({
//         name: '',
//         email: '',
//         profession: '',
//         subject: '',
//         message: ''
//     });
//     const [status, setStatus] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus('sending');
//         try {
//             await api.sendMessage(formState);
//             setStatus('success');
//             setFormState({ name: '', email: '', profession: '', subject: '', message: '' });
//         } catch (error) {
//             setStatus('error');
//         }
//     };

//     if (!data) return null;

//     return (
//         <section id="contact" style={{
//             padding: 'var(--spacing-xl) 0',
//             background: 'var(--bg-primary)'
//         }}>
//             <div className="container">
//                 <h2 className="section-title">Get In Touch</h2>

//                 <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: '1fr 1fr',
//                     gap: 'var(--spacing-lg)',
//                     alignItems: 'start'
//                 }}>
//                     {/* Contact Info */}
//                     <div>
//                         <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's Connect</h3>
//                         <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
//                             Based in {data.location}. Always open to discussing new projects, creative ideas or opportunities.
//                         </p>

//                         <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
//                             <a href={`mailto:${data.email}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem' }}>
//                                 <span style={{ fontSize: '1.5rem' }}>📧</span> {data.email}
//                             </a>
//                             <a href={`tel:${data.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem' }}>
//                                 <span style={{ fontSize: '1.5rem' }}>📱</span> {data.phone}
//                             </a>

//                             <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
//                                 <a href={data.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
//                                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{ width: '40px', height: '40px' }} />
//                                 </a>
//                                 <a href={data.github} target="_blank" rel="noopener noreferrer" title="GitHub">
//                                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{ width: '40px', height: '40px', filter: 'invert(1)' }} />
//                                 </a>
//                                 <a href={data.youtube} target="_blank" rel="noopener noreferrer" title="YouTube">
//                                     <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" style={{ width: '40px', height: '40px' }} />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Form */}
//                     <form onSubmit={handleSubmit} style={{
//                         background: 'var(--bg-card)',
//                         padding: '2rem',
//                         borderRadius: 'var(--radius-md)',
//                         border: '1px solid rgba(255,255,255,0.05)'
//                     }}>
//                         <div style={{ marginBottom: '1rem' }}>
//                             <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
//                             <input
//                                 type="text"
//                                 required
//                                 value={formState.name}
//                                 onChange={e => setFormState({ ...formState, name: e.target.value })}
//                                 style={{
//                                     width: '100%',
//                                     padding: '1rem',
//                                     background: 'var(--bg-primary)',
//                                     border: '1px solid var(--bg-secondary)',
//                                     color: 'var(--text-primary)',
//                                     borderRadius: 'var(--radius-sm)'
//                                 }}
//                             />
//                         </div>

//                         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
//                             <div>
//                                 <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
//                                 <input
//                                     type="email"
//                                     required
//                                     value={formState.email}
//                                     onChange={e => setFormState({ ...formState, email: e.target.value })}
//                                     style={{
//                                         width: '100%',
//                                         padding: '1rem',
//                                         background: 'var(--bg-primary)',
//                                         border: '1px solid var(--bg-secondary)',
//                                         color: 'var(--text-primary)',
//                                         borderRadius: 'var(--radius-sm)'
//                                     }}
//                                 />
//                             </div>
//                             <div>
//                                 <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Profession/Profile</label>
//                                 <input
//                                     type="text"
//                                     value={formState.profession}
//                                     onChange={e => setFormState({ ...formState, profession: e.target.value })}
//                                     style={{
//                                         width: '100%',
//                                         padding: '1rem',
//                                         background: 'var(--bg-primary)',
//                                         border: '1px solid var(--bg-secondary)',
//                                         color: 'var(--text-primary)',
//                                         borderRadius: 'var(--radius-sm)'
//                                     }}
//                                 />
//                             </div>
//                         </div>

//                         <div style={{ marginBottom: '1rem' }}>
//                             <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Subject</label>
//                             <input
//                                 type="text"
//                                 required
//                                 value={formState.subject}
//                                 onChange={e => setFormState({ ...formState, subject: e.target.value })}
//                                 style={{
//                                     width: '100%',
//                                     padding: '1rem',
//                                     background: 'var(--bg-primary)',
//                                     border: '1px solid var(--bg-secondary)',
//                                     color: 'var(--text-primary)',
//                                     borderRadius: 'var(--radius-sm)'
//                                 }}
//                             />
//                         </div>

//                         <div style={{ marginBottom: '1.5rem' }}>
//                             <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Message</label>
//                             <textarea
//                                 required
//                                 rows="4"
//                                 value={formState.message}
//                                 onChange={e => setFormState({ ...formState, message: e.target.value })}
//                                 style={{
//                                     width: '100%',
//                                     padding: '1rem',
//                                     background: 'var(--bg-primary)',
//                                     border: '1px solid var(--bg-secondary)',
//                                     color: 'var(--text-primary)',
//                                     borderRadius: 'var(--radius-sm)',
//                                     resize: 'vertical'
//                                 }}
//                             />
//                         </div>

//                         <button type="submit" disabled={status === 'sending'} style={{
//                             width: '100%',
//                             padding: '1rem',
//                             background: status === 'success' ? 'var(--accent-primary)' : 'var(--accent-secondary)',
//                             color: 'white',
//                             fontWeight: 'bold',
//                             borderRadius: 'var(--radius-sm)',
//                             opacity: status === 'sending' ? 0.7 : 1
//                         }}>
//                             {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;
// =====================================================================================================================================
import React, { useState } from 'react';
import { api } from '../services/api';

const Contact = ({ data }) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        profession: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await api.sendMessage(formState);
            setStatus('success');
            setFormState({ name: '', email: '', profession: '', subject: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    if (!data) return null;

    return (
        <section
            id="contact"
            style={{
                padding: 'var(--spacing-xl) 0',
                background: 'var(--bg-primary)'
            }}
        >
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                {/* GRID WRAPPER */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 'var(--spacing-lg)',
                        alignItems: 'start',

                        /* MOBILE RESPONSIVE */
                        maxWidth: '100%',
                    }}
                >
                    {/* CONTACT INFO */}
                    <div
                        style={{
                            width: '100%',
                        }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's Connect</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Based in {data.location}. Always open to discussing new projects, creative ideas or opportunities.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <a
                                href={`mailto:${data.email}`}
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem' }}
                            >
                                <span style={{ fontSize: '1.5rem' }}>📧</span> {data.email}
                            </a>

                            <a
                                href={`tel:${data.phone}`}
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem' }}
                            >
                                <span style={{ fontSize: '1.5rem' }}>📱</span> {data.phone}
                            </a>

                            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                                <a href={data.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                        alt="LinkedIn"
                                        style={{ width: '35px', height: '35px' }}
                                    />
                                </a>
                                <a href={data.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt="GitHub"
                                        style={{ width: '35px', height: '35px', filter: 'invert(1)' }}
                                    />
                                </a>
                                <a href={data.youtube} target="_blank" rel="noopener noreferrer" title="YouTube">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                                        alt="YouTube"
                                        style={{ width: '35px', height: '35px' }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            background: 'var(--bg-card)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            width: '100%',
                        }}
                    >
                        {/* NAME */}
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                value={formState.name}
                                onChange={e => setFormState({ ...formState, name: e.target.value })}
                                style={inputStyle}
                            />
                        </div>

                        {/* EMAIL + PROFESSION */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1rem',
                                marginBottom: '1rem',

                                /* MOBILE STACK */
                                ...(window.innerWidth < 768 && {
                                    gridTemplateColumns: '1fr',
                                }),
                            }}
                        >
                            <div>
                                <label
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        color: 'var(--text-secondary)'
                                    }}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        color: 'var(--text-secondary)'
                                    }}
                                >
                                    Profession/Profile
                                </label>
                                <input
                                    type="text"
                                    value={formState.profession}
                                    onChange={e => setFormState({ ...formState, profession: e.target.value })}
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        {/* SUBJECT */}
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                                Subject
                            </label>
                            <input
                                type="text"
                                required
                                value={formState.subject}
                                onChange={e => setFormState({ ...formState, subject: e.target.value })}
                                style={inputStyle}
                            />
                        </div>

                        {/* MESSAGE */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                                Message
                            </label>
                            <textarea
                                required
                                rows="4"
                                value={formState.message}
                                onChange={e => setFormState({ ...formState, message: e.target.value })}
                                style={{
                                    ...inputStyle,
                                    resize: 'vertical'
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: status === 'success' ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                                color: 'white',
                                fontWeight: 'bold',
                                borderRadius: 'var(--radius-sm)',
                                opacity: status === 'sending' ? 0.7 : 1
                            }}
                        >
                            {status === 'sending'
                                ? 'Sending...'
                                : status === 'success'
                                ? 'Message Sent!'
                                : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            {/* RESPONSIVE STYLES */}
            <style>
                {`
                @media (max-width: 768px) {
                    #contact .container > div {
                        grid-template-columns: 1fr !important;
                    }
                }
                `}
            </style>
        </section>
    );
};

const inputStyle = {
    width: '100%',
    padding: '1rem',
    background: 'var(--bg-primary)',
    border: '1px solid var(--bg-secondary)',
    color: 'var(--text-primary)',
    borderRadius: 'var(--radius-sm)'
};

export default Contact;
