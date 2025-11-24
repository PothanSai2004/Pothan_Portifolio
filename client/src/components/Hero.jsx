import React from 'react';

const Hero = ({ data }) => {
    if (!data) return null;

    return (
        <section
            className="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '6rem 1.5rem 2rem', // ⭐ fixes navbar overlap + mobile spacing
                background: `linear-gradient(135deg, var(--bg-secondary), var(--bg-primary))`
            }}
        >
            <div
                className="container hero-container"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap', // ⭐ mobile responsive
                    zIndex: 2,
                    maxWidth: '1300px',
                    width: '100%'
                }}
            >
                {/* LEFT CONTENT */}
                <div
                    className="hero-content"
                    style={{
                        flex: '1 1 350px',
                        minWidth: '300px',
                        textAlign: 'center', // ⭐ mobile friendly
                        animation: 'slide-in-right 1s ease'
                    }}
                >
                    <h1
                        className="hero-title"
                        style={{
                            fontSize: 'clamp(2.2rem, 6vw, 4rem)', // ⭐ fully responsive
                            fontWeight: 900,
                            lineHeight: 1.15,
                            marginBottom: 'var(--spacing-sm)'
                        }}
                    >
                        Hi, I'm{' '}
                        <span style={{ color: 'var(--accent-primary)' }}>{data.name}</span>
                    </h1>

                    <h2
                        className="hero-subtitle"
                        style={{
                            fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                            color: 'var(--text-secondary)',
                            marginBottom: 'var(--spacing-md)',
                            fontWeight: 500
                        }}
                    >
                        {data.title}
                    </h2>

                    <p
                        style={{
                            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                            maxWidth: '600px',
                            margin: '0 auto var(--spacing-md)',
                            opacity: 0.9
                        }}
                    >
                        {data.description}
                    </p>

                    <button
                        style={{
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            background: 'var(--accent-primary)',
                            color: 'var(--bg-primary)',
                            borderRadius: 'var(--radius-md)',
                            transition: 'transform 0.2s',
                            marginTop: '10px',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
                        onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                        onClick={() =>
                            document
                                .getElementById('contact')
                                .scrollIntoView({ behavior: 'smooth' })
                        }
                    >
                        Let's Talk
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div
                    className="hero-image"
                    style={{
                        flex: '1 1 350px',
                        minWidth: '300px',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '1rem'
                    }}
                >
                    <div
                        style={{
                            width: 'min(330px, 70vw)',
                            height: 'min(330px, 70vw)',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid var(--accent-primary)',
                            animation: 'pulse-glow 3s infinite',
                            boxShadow: '0 0 30px rgba(var(--accent-primary-rgb), 0.3)',
                            background: 'var(--bg-secondary)'
                        }}
                    >
                        <img
                            src={data.image}
                            alt={data.name}
                            style={{
                                width: '100%',
                                height: '130%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Background Glow Elements */}
            <div
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: '100px',
                    height: '100px',
                    background: 'var(--accent-secondary)',
                    filter: 'blur(80px)',
                    opacity: 0.5,
                    animation: 'float 6s infinite ease-in-out'
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '10%',
                    width: '150px',
                    height: '150px',
                    background: 'var(--accent-tertiary)',
                    filter: 'blur(100px)',
                    opacity: 0.4,
                    animation: 'float 8s infinite ease-in-out reverse'
                }}
            />
        </section>
    );
};

export default Hero;
