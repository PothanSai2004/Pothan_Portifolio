// import React from 'react';

// const Experience = ({ data }) => {
//     if (!data) return null;

//     return (
//         <section id="experience" style={{
//             padding: 'var(--spacing-xl) 0',
//             background: 'var(--bg-primary)'
//         }}>
//             <div className="container">
//                 <h2 className="section-title">Journey So Far</h2>

//                 <div className="timeline" style={{
//                     position: 'relative',
//                     maxWidth: '800px',
//                     margin: '0 auto'
//                 }}>
//                     {/* Vertical Line */}
//                     <div style={{
//                         position: 'absolute',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         width: '2px',
//                         height: '100%',
//                         background: 'var(--accent-secondary)',
//                         opacity: 0.3
//                     }} />

//                     {data.map((item, index) => (
//                         <div key={item.id} style={{
//                             display: 'flex',
//                             justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
//                             marginBottom: 'var(--spacing-lg)',
//                             position: 'relative'
//                         }}>
//                             {/* Dot */}
//                             <div style={{
//                                 position: 'absolute',
//                                 left: '50%',
//                                 top: '0',
//                                 transform: 'translate(-50%, 0)',
//                                 width: '16px',
//                                 height: '16px',
//                                 borderRadius: '50%',
//                                 background: 'var(--accent-primary)',
//                                 boxShadow: `0 0 10px var(--accent-primary)`,
//                                 zIndex: 2
//                             }} />

//                             {/* Content Card */}
//                             <div style={{
//                                 width: '45%',
//                                 background: 'var(--bg-card)',
//                                 padding: 'var(--spacing-md)',
//                                 borderRadius: 'var(--radius-md)',
//                                 border: '1px solid rgba(255,255,255,0.05)',
//                                 transition: 'transform 0.3s ease',
//                                 cursor: 'default'
//                             }}
//                                 onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
//                                 onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
//                             >
//                                 <span style={{
//                                     color: 'var(--accent-primary)',
//                                     fontSize: '0.9rem',
//                                     fontWeight: 'bold',
//                                     display: 'block',
//                                     marginBottom: '0.5rem'
//                                 }}>{item.duration}</span>
//                                 <h3 style={{
//                                     fontSize: '1.5rem',
//                                     marginBottom: '0.2rem'
//                                 }}>{item.role}</h3>
//                                 <h4 style={{
//                                     fontSize: '1.1rem',
//                                     color: 'var(--text-secondary)',
//                                     marginBottom: '1rem'
//                                 }}>{item.company}</h4>
//                                 <p style={{
//                                     color: 'var(--text-secondary)',
//                                     fontSize: '0.95rem'
//                                 }}>{item.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Experience;
// =============================================================================
import React from 'react';

const Experience = ({ data }) => {
    if (!data) return null;

    return (
        <section
            id="experience"
            style={{
                padding: 'var(--spacing-xl) 0',
                background: 'var(--bg-primary)',
                position: 'relative'
            }}
        >
            <div className="container">
                <h2 className="section-title">Journey So Far</h2>

                <div
                    className="timeline"
                    style={{
                        position: 'relative',
                        maxWidth: '900px',
                        margin: '0 auto',
                        padding: '2rem 0'
                    }}
                >
                    {/* Vertical Line */}
                    <div
                        className="timeline-line"
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: 0,
                            transform: 'translateX(-50%)',
                            width: '3px',
                            height: '100%',
                            background: 'var(--accent-secondary)',
                            opacity: 0.2
                        }}
                    />

                    {data.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={item.id}
                                className="timeline-item"
                                style={{
                                    display: 'flex',
                                    justifyContent: isLeft ? 'flex-end' : 'flex-start',
                                    marginBottom: 'var(--spacing-xl)',
                                    position: 'relative',
                                }}
                            >
                                {/* DOT (now centered vertically beside the card) */}
                                <div
                                    className="timeline-dot"
                                    style={{
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '18px',
                                        height: '18px',
                                        borderRadius: '50%',
                                        background: 'var(--accent-primary)',
                                        boxShadow: `0 0 15px var(--accent-primary)`,
                                        zIndex: 5
                                    }}
                                />

                                {/* CARD */}
                                <div
                                    className="experience-card"
                                    style={{
                                        width: '45%',
                                        background: 'var(--bg-card)',
                                        padding: '1.5rem',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                                        animation: 'fade-in-up 0.7s ease forwards',
                                        animationDelay: `${index * 0.2}s`,
                                        opacity: 0,
                                        transform: 'translateY(40px)',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseOver={(e) =>
                                        (e.currentTarget.style.transform = 'translateY(-8px)')
                                    }
                                    onMouseOut={(e) =>
                                        (e.currentTarget.style.transform = 'translateY(0)')
                                    }
                                >
                                    <span
                                        style={{
                                            color: 'var(--accent-primary)',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            display: 'block',
                                            marginBottom: '0.6rem'
                                        }}
                                    >
                                        {item.duration}
                                    </span>

                                    <h3
                                        style={{
                                            fontSize: '1.6rem',
                                            marginBottom: '0.4rem'
                                        }}
                                    >
                                        {item.role}
                                    </h3>

                                    <h4
                                        style={{
                                            fontSize: '1.15rem',
                                            color: 'var(--text-secondary)',
                                            marginBottom: '1rem'
                                        }}
                                    >
                                        {item.company}
                                    </h4>

                                    <p
                                        style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CSS: Responsive Fixes */}
            <style>
                {`
                @media (max-width: 768px) {
                    .timeline-line {
                        left: 20px !important;
                    }

                    .timeline-item {
                        justify-content: flex-start !important;
                        padding-left: 50px;
                    }

                    .experience-card {
                        width: 100% !important;
                    }

                    .timeline-dot {
                        left: 20px !important;
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}
            </style>
        </section>
    );
};

export default Experience;
