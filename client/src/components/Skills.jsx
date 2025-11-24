// import React, { useState, useEffect } from 'react';

// const Skills = ({ data }) => {
//     const [activeCategory, setActiveCategory] = useState('languages');
//     const categories = ['languages', 'technologies', 'tools'];

//     // Auto-cycle if user hasn't interacted recently
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveCategory(prev => {
//                 const currentIndex = categories.indexOf(prev);
//                 const nextIndex = (currentIndex + 1) % categories.length;
//                 return categories[nextIndex];
//             });
//         }, 5000);

//         return () => clearInterval(interval);
//     }, []);

//     if (!data) return null;

//     return (
//         <section id="skills" style={{
//             padding: 'var(--spacing-xl) 0',
//             background: 'var(--bg-secondary)',
//             position: 'relative',
//             overflow: 'hidden'
//         }}>
//             <div className="container">
//                 <h2 className="section-title">Skill Arsenal</h2>

//                 <div className="skill-arena" style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     minHeight: '500px'
//                 }}>
//                     {/* Interactive Tabs */}
//                     <div style={{
//                         display: 'flex',
//                         gap: 'var(--spacing-md)',
//                         marginBottom: 'var(--spacing-lg)',
//                         zIndex: 10
//                     }}>
//                         {categories.map(cat => (
//                             <button
//                                 key={cat}
//                                 onClick={() => setActiveCategory(cat)}
//                                 style={{
//                                     padding: '0.8rem 2rem',
//                                     borderRadius: 'var(--radius-lg)',
//                                     background: activeCategory === cat ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
//                                     color: activeCategory === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
//                                     border: `1px solid ${activeCategory === cat ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)'}`,
//                                     textTransform: 'uppercase',
//                                     fontWeight: 'bold',
//                                     fontSize: '1rem',
//                                     transition: 'all 0.3s ease',
//                                     cursor: 'pointer'
//                                 }}
//                             >
//                                 {cat}
//                             </button>
//                         ))}
//                     </div>

//                     {/* Stack Overflow Animation Container */}
//                     <div style={{
//                         display: 'flex',
//                         flexWrap: 'wrap',
//                         justifyContent: 'center',
//                         gap: 'var(--spacing-md)',
//                         width: '100%',
//                         maxWidth: '1000px',
//                         perspective: '1000px'
//                     }}>
//                         {data[activeCategory]?.map((skill, index) => (
//                             <div key={`${activeCategory}-${skill.name}`} style={{
//                                 background: 'var(--bg-card)',
//                                 padding: '1.5rem',
//                                 borderRadius: 'var(--radius-md)',
//                                 textAlign: 'center',
//                                 border: '1px solid rgba(255,255,255,0.1)',
//                                 animation: `fade-in-up 0.5s ease forwards`,
//                                 animationDelay: `${index * 0.1}s`,
//                                 opacity: 0,
//                                 transform: 'translateY(50px)',
//                                 boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 width: '140px',
//                                 height: '140px',
//                                 transition: 'transform 0.3s ease'
//                             }}
//                                 onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)'}
//                                 onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
//                             >
//                                 <div style={{
//                                     width: '50px',
//                                     height: '50px',
//                                     marginBottom: '1rem',
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center'
//                                 }}>
//                                     {skill.logo ? (
//                                         <img src={skill.logo} alt={skill.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
//                                     ) : (
//                                         <span style={{ fontSize: '2.5rem' }}>⚡</span>
//                                     )}
//                                 </div>
//                                 <span style={{
//                                     fontWeight: 'bold',
//                                     fontSize: '1rem',
//                                     color: 'var(--text-primary)'
//                                 }}>{skill.name}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Skills;
// ================================================================================================================================================================
import React, { useState, useEffect } from 'react';

const Skills = ({ data }) => {
    const [activeCategory, setActiveCategory] = useState('languages');
    const categories = ['languages', 'technologies', 'tools'];

    // Auto-cycle if user hasn't interacted recently
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCategory(prev => {
                const currentIndex = categories.indexOf(prev);
                const nextIndex = (currentIndex + 1) % categories.length;
                return categories[nextIndex];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    if (!data) return null;

    return (
        <section
            id="skills"
            style={{
                padding: 'var(--spacing-xl) 0',
                background: 'var(--bg-secondary)',
                position: 'relative',
                overflow: 'hidden',
                width: '100%'
            }}
        >
            <div className="container" style={{ width: '100%', padding: '0 1.2rem' }}>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    Skill Arsenal
                </h2>

                <div
                    className="skill-arena"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minHeight: '480px',
                        width: '100%'
                    }}
                >
                    {/* Interactive Tabs */}
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',                // ⭐ Allows wrapping on small screens
                            justifyContent: 'center',
                            gap: 'var(--spacing-md)',
                            marginBottom: 'var(--spacing-lg)',
                            width: '100%',
                            maxWidth: '600px',
                            zIndex: 10
                        }}
                    >
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '0.8rem 2rem',
                                    borderRadius: 'var(--radius-lg)',
                                    background:
                                        activeCategory === cat
                                            ? 'var(--accent-primary)'
                                            : 'rgba(255,255,255,0.05)',
                                    color:
                                        activeCategory === cat
                                            ? 'var(--bg-primary)'
                                            : 'var(--text-secondary)',
                                    border: `1px solid ${
                                        activeCategory === cat
                                            ? 'var(--accent-primary)'
                                            : 'rgba(255,255,255,0.1)'
                                    }`,
                                    textTransform: 'uppercase',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    minWidth: '140px',           // ⭐ Prevents button squishing
                                    textAlign: 'center'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Skill Card Container */}
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: 'var(--spacing-md)',
                            width: '100%',
                            maxWidth: '1100px',
                            perspective: '1000px'
                        }}
                    >
                        {data[activeCategory]?.map((skill, index) => (
                            <div
                                key={`${activeCategory}-${skill.name}`}
                                style={{
                                    background: 'var(--bg-card)',
                                    padding: '1.5rem',
                                    borderRadius: 'var(--radius-md)',
                                    textAlign: 'center',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    animation: `fade-in-up 0.5s ease forwards`,
                                    animationDelay: `${index * 0.1}s`,
                                    opacity: 0,
                                    transform: 'translateY(50px)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',

                                    width: '140px',
                                    height: '140px',

                                    transition: 'transform 0.3s ease',

                                    /* ⭐ Responsive sizing */
                                    flex: '1 1 120px',
                                    maxWidth: '150px'
                                }}
                                onMouseOver={(e) =>
                                    (e.currentTarget.style.transform =
                                        'translateY(-10px) scale(1.05)')
                                }
                                onMouseOut={(e) =>
                                    (e.currentTarget.style.transform =
                                        'translateY(0) scale(1)')
                                }
                            >
                                <div
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {skill.logo ? (
                                        <img
                                            src={skill.logo}
                                            alt={skill.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    ) : (
                                        <span style={{ fontSize: '2.5rem' }}>⚡</span>
                                    )}
                                </div>

                                <span
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', // ⭐ Text scales with screen size
                                        color: 'var(--text-primary)',
                                        wordBreak: 'break-word',
                                        textAlign: 'center'
                                    }}
                                >
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
