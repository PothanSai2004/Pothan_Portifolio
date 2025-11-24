// import React from 'react';

// const Projects = ({ data }) => {
//     if (!data) return null;

//     return (
//         <section id="projects" style={{
//             padding: 'var(--spacing-xl) 0',
//             background: 'var(--bg-primary)'
//         }}>
//             <div className="container">
//                 <h2 className="section-title">Masterpieces</h2>

//                 <div className="projects-grid" style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                     gap: 'var(--spacing-lg)',
//                     justifyContent: 'center'
//                 }}>
//                     {data.map((project, index) => (
//                         <div key={project.id} style={{
//                             display: 'flex',
//                             flexDirection: 'column',
//                             background: 'var(--bg-card)',
//                             borderRadius: 'var(--radius-lg)',
//                             overflow: 'hidden',
//                             border: '1px solid rgba(255,255,255,0.05)',
//                             height: 'auto',
//                             minHeight: '400px',
//                             animation: 'fade-in-up 0.6s ease forwards',
//                             animationDelay: `${index * 0.2}s`,
//                             opacity: 0,
//                             transform: 'translateY(30px)',
//                             transition: 'transform 0.3s ease, box-shadow 0.3s ease'
//                         }}
//                             onMouseOver={(e) => {
//                                 e.currentTarget.style.transform = 'translateY(-10px)';
//                                 e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
//                             }}
//                             onMouseOut={(e) => {
//                                 e.currentTarget.style.transform = 'translateY(0)';
//                                 e.currentTarget.style.boxShadow = 'none';
//                             }}
//                         >
//                             {/* Image Area */}
//                             <div style={{
//                                 height: '250px',
//                                 overflow: 'hidden'
//                             }}>
//                                 <img
//                                     src={project.image}
//                                     alt={project.title}
//                                     style={{
//                                         width: '100%',
//                                         height: '100%',
//                                         objectFit: 'cover',
//                                         transition: 'transform 0.5s ease'
//                                     }}
//                                     onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
//                                     onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
//                                 />
//                             </div>

//                             {/* Content Area */}
//                             <div style={{
//                                 padding: '1.5rem',
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 flex: 1
//                             }}>
//                                 <h3 style={{
//                                     fontSize: '1.8rem',
//                                     marginBottom: '0.5rem',
//                                     color: 'var(--accent-primary)'
//                                 }}>{project.title}</h3>

//                                 <p style={{
//                                     fontSize: '1rem',
//                                     color: 'var(--text-secondary)',
//                                     marginBottom: '1.5rem',
//                                     lineHeight: '1.6',
//                                     flex: 1
//                                 }}>{project.description}</p>

//                                 <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
//                                     display: 'inline-flex',
//                                     alignItems: 'center',
//                                     gap: '0.5rem',
//                                     color: 'var(--text-primary)',
//                                     fontSize: '1rem',
//                                     fontWeight: 'bold',
//                                     transition: 'color 0.2s',
//                                     marginTop: 'auto'
//                                 }}
//                                     onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
//                                     onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
//                                 >
//                                     <svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" style={{ fill: 'currentColor' }}>
//                                         <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
//                                     </svg>
//                                     View Source
//                                 </a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Projects;
// ================================================================================================================================================================

import React from 'react';

const Projects = ({ data }) => {
    if (!data) return null;

    return (
        <section id="projects" style={{
            padding: 'var(--spacing-xl) 0',
            background: 'var(--bg-primary)',
            width: '100%'
        }}>
            <div className="container" style={{ width: '100%', padding: '0 1.5rem' }}>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    Masterpieces
                </h2>

                <div
                    className="projects-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: 'var(--spacing-lg)',
                        justifyItems: 'center',
                        alignItems: 'stretch',
                        width: '100%',
                        marginInline: 'auto'
                    }}
                >
                    {data.map((project, index) => (
                        <div
                            key={project.id}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'var(--bg-card)',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.05)',
                                width: '100%',
                                maxWidth: '500px',
                                minHeight: '420px',

                                /* Animation */
                                animation: 'fade-in-up 0.6s ease forwards',
                                animationDelay: `${index * 0.2}s`,
                                opacity: 0,
                                transform: 'translateY(30px)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}

                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                            }}

                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* IMAGE SECTION */}
                            <div
                                style={{
                                    height: '230px',
                                    width: '100%',
                                    overflow: 'hidden',
                                    background: '#111'
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>

                            {/* CONTENT SECTION */}
                            <div
                                style={{
                                    padding: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexGrow: 1
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: 'clamp(1.4rem, 2vw, 1.8rem)',
                                        marginBottom: '0.5rem',
                                        color: 'var(--accent-primary)',
                                        wordBreak: 'break-word'
                                    }}
                                >
                                    {project.title}
                                </h3>

                                <p
                                    style={{
                                        fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                                        color: 'var(--text-secondary)',
                                        marginBottom: '1.5rem',
                                        lineHeight: '1.6',
                                        flexGrow: 1
                                    }}
                                >
                                    {project.description}
                                </p>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        transition: 'color 0.2s',
                                        marginTop: 'auto'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                >
                                    <svg
                                        height="24"
                                        width="24"
                                        viewBox="0 0 16 16"
                                        style={{ fill: 'currentColor' }}
                                    >
                                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 
                                        0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 
                                        1.78-.2 3.65-.88 3.65-3.95 
                                        0-.88-.31-1.59-.82-2.15 
                                        0.08-.2 0.36-1.02-.08-2.12 
                                        0 0-.67-.22-2.2.82 
                                        -0.64-.18-1.32-.27-2-.27 
                                        -0.68 0-1.36.09-2 .27 
                                        -1.53-1.03-2.2-.82-2.2-.82 
                                        -0.44 1.1-.16 1.92-.08 2.12 
                                        -0.51.56-.82 1.28-.82 2.15 
                                        0 3.06 1.86 3.75 3.64 3.95 
                                        -0.23.2-0.44.55-0.51 1.07 
                                        -0.46.21-1.61.55-2.33-.66 
                                        -0.15-.24-.6-.83-1.23-.82 
                                        -0.67 0.01-0.27.38.01.53 
                                        0.34.19.73.9.82 1.13 
                                        0.16.45 0.68 1.31 2.69.94 
                                        0 .67.01 1.3.01 1.49 
                                        0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8 
                                        c0-4.42 3.58-8 8-8Z" />
                                    </svg>

                                    View Source
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
