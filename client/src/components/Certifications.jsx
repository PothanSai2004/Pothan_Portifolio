// import React from 'react';

// const Certifications = ({ data }) => {
//     if (!data) return null;

//     return (
//         <section id="certifications" style={{
//             padding: 'var(--spacing-xl) 0',
//             background: 'var(--bg-secondary)'
//         }}>
//             <div className="container">
//                 <h2 className="section-title">Achievements & Certifications</h2>

//                 <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//                     gap: 'var(--spacing-lg)',
//                     justifyContent: 'center'
//                 }}>
//                     {data.map((cert, index) => (
//                         <div key={cert.id} style={{
//                             background: 'var(--bg-card)',
//                             borderRadius: 'var(--radius-md)',
//                             overflow: 'hidden',
//                             border: '1px solid rgba(255,255,255,0.05)',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             height: '350px', // Fixed height for square-ish look
//                             animation: 'fade-in-up 0.6s ease forwards',
//                             animationDelay: `${index * 0.1}s`,
//                             opacity: 0,
//                             transform: 'translateY(20px)',
//                             transition: 'transform 0.3s ease, box-shadow 0.3s ease'
//                         }}
//                             onMouseOver={(e) => {
//                                 e.currentTarget.style.transform = 'translateY(-5px)';
//                                 e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
//                             }}
//                             onMouseOut={(e) => {
//                                 e.currentTarget.style.transform = 'translateY(0)';
//                                 e.currentTarget.style.boxShadow = 'none';
//                             }}
//                         >
//                             {/* Top Half: Image/Logo */}
//                             <div style={{
//                                 height: '50%',
//                                 background: 'rgba(255,255,255,0.02)',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 padding: '1rem',
//                                 borderBottom: '1px solid rgba(255,255,255,0.05)'
//                             }}>
//                                 <img
//                                     src={cert.image}
//                                     alt={cert.title}
//                                     style={{
//                                         maxWidth: '100%',
//                                         maxHeight: '100%',
//                                         objectFit: 'contain',
//                                         filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))'
//                                     }}
//                                 />
//                             </div>

//                             {/* Bottom Half: Details */}
//                             <div style={{
//                                 height: '50%',
//                                 padding: '1.5rem',
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 justifyContent: 'space-between',
//                                 textAlign: 'center'
//                             }}>
//                                 <div>
//                                     <h3 style={{
//                                         fontSize: '1.2rem',
//                                         marginBottom: '0.5rem',
//                                         color: 'var(--text-primary)',
//                                         lineHeight: '1.3'
//                                     }}>{cert.title}</h3>
//                                     <p style={{
//                                         fontSize: '0.9rem',
//                                         color: 'var(--accent-secondary)',
//                                         fontWeight: 'bold'
//                                     }}>{cert.issuer}</p>
//                                     <p style={{
//                                         fontSize: '0.8rem',
//                                         color: 'var(--text-secondary)',
//                                         marginTop: '0.25rem'
//                                     }}>{cert.date}</p>
//                                 </div>

//                                 {cert.link && (
//                                     <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{
//                                         display: 'inline-block',
//                                         padding: '0.5rem 1rem',
//                                         background: 'var(--accent-primary)',
//                                         color: 'var(--bg-primary)',
//                                         borderRadius: 'var(--radius-sm)',
//                                         textDecoration: 'none',
//                                         fontWeight: 'bold',
//                                         fontSize: '0.9rem',
//                                         marginTop: '1rem',
//                                         transition: 'opacity 0.2s'
//                                     }}
//                                         onMouseOver={(e) => e.target.style.opacity = '0.9'}
//                                         onMouseOut={(e) => e.target.style.opacity = '1'}
//                                     >
//                                         View Credential
//                                     </a>
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Certifications;
// =========================================================================================================
import React from 'react';

const Certifications = ({ data }) => {
    if (!data) return null;

    return (
        <section
            id="certifications"
            style={{
                padding: 'var(--spacing-xl) 0',
                background: 'var(--bg-secondary)',
                position: 'relative'
            }}
        >
            <div className="container">
                <h2 className="section-title">Achievements & Certifications</h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: 'var(--spacing-lg)',
                        alignItems: 'stretch'
                    }}
                >
                    {data.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="cert-card"
                            style={{
                                background: 'var(--bg-card)',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.06)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '380px',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
                                animation: 'fade-in-up 0.7s ease forwards',
                                animationDelay: `${index * 0.15}s`,
                                opacity: 0,
                                transform: 'translateY(30px)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow =
                                    '0 12px 30px rgba(0,0,0,0.35)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow =
                                    '0 10px 25px rgba(0,0,0,0.25)';
                            }}
                        >
                            {/* Image */}
                            <div
                                style={{
                                    height: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '1rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderBottom: '1px solid rgba(255,255,255,0.06)'
                                }}
                            >
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        filter:
                                            'drop-shadow(0 0 12px rgba(0,0,0,0.3))'
                                    }}
                                />
                            </div>

                            {/* Details */}
                            <div
                                style={{
                                    padding: '1.4rem',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '50%'
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            fontSize: '1.25rem',
                                            marginBottom: '0.4rem',
                                            color: 'var(--text-primary)',
                                            fontWeight: '600'
                                        }}
                                    >
                                        {cert.title}
                                    </h3>

                                    <p
                                        style={{
                                            fontSize: '0.95rem',
                                            color: 'var(--accent-primary)',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {cert.issuer}
                                    </p>

                                    <p
                                        style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--text-secondary)',
                                            marginTop: '0.25rem'
                                        }}
                                    >
                                        {cert.date}
                                    </p>
                                </div>

                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-block',
                                            marginTop: '1rem',
                                            padding: '0.6rem 1rem',
                                            background: 'var(--accent-primary)',
                                            color: 'var(--bg-primary)',
                                            borderRadius: 'var(--radius-sm)',
                                            fontWeight: 'bold',
                                            fontSize: '0.92rem',
                                            textDecoration: 'none',
                                            transition: 'opacity 0.25s'
                                        }}
                                        onMouseOver={(e) =>
                                            (e.target.style.opacity = '0.85')
                                        }
                                        onMouseOut={(e) =>
                                            (e.target.style.opacity = '1')
                                        }
                                    >
                                        View Credential
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive + Animations */}
            <style>
                {`
                @media (max-width: 768px) {
                    .cert-card {
                        height: auto !important;
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
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

export default Certifications;
