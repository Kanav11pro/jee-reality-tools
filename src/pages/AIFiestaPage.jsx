import React, { useEffect, useRef, useState } from 'react';
import './AIFiesta.css';

// Custom scroll animation hook (no external library needed)
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const ScrollSection = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`scroll-section ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const AIFiestaPage = () => {
  return (
    <div className="ai-fiesta-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 5L25 15L35 20L25 25L20 35L15 25L5 20L15 15L20 5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="logo-text">AI Fiesta</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faqs">FAQs</a>
          </div>
          <button className="login-btn">
            Log In <span>→</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <ScrollSection>
          <div className="hero-content">
            <h1 className="hero-title">
              One Window. Six Perspectives.
              <br />
              Achieve Optimal Efficiency.
            </h1>
            <p className="hero-subtitle">
              Every feature is designed to amplify your AI-powered productivity
            </p>
          </div>
        </ScrollSection>
      </section>

      {/* Compare Section */}
      <section className="feature-section dark-section">
        <ScrollSection>
          <div className="section-content">
            <div className="section-header">
              <div className="model-icons">
                <div className="icon-circle"><span>🌀</span></div>
                <div className="icon-circle"><span>⚡</span></div>
                <div className="icon-circle"><span>🔮</span></div>
                <div className="icon-circle"><span>💎</span></div>
                <div className="icon-circle"><span>🌟</span></div>
                <div className="icon-circle"><span>🔄</span></div>
              </div>
              <h2 className="section-title">
                Compare All Premium AIs at Once
              </h2>
              <p className="section-description">
                Free AI models often deliver restricted and inferior answers. With AI
                Fiesta, you get access to multiple top-tier premium models, all in
                one place. Compare their responses side-by-side to experience
                faster, smarter, and most accurate answers.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Save hours of manual comparison</span>
                </div>
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Customize your AI team instantly</span>
                </div>
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Never miss the most accurate answer again</span>
                </div>
              </div>
            </div>
            <div className="mockup-container">
              <div className="mockup-placeholder">
                <p>🖥️ AI Comparison Interface</p>
              </div>
            </div>
          </div>
        </ScrollSection>
      </section>

      {/* Super Fiesta Section */}
      <section className="feature-section green-section">
        <ScrollSection delay={200}>
          <div className="section-content reverse">
            <div className="section-header">
              <div className="icon-badge">
                <span>🚀</span>
              </div>
              <h2 className="section-title">Introducing Super Fiesta</h2>
              <p className="section-description">
                Super Fiesta is designed to automatically select the most suitable AI
                model for your query, delivering a seamless and efficient
                experience. It keeps context and maintains a consistent tone.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Faster decisions via automatic best-model selection.</span>
                </div>
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Request alternatives without leaving the conversation.</span>
                </div>
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Unified context across models for a continuous dialogue.</span>
                </div>
              </div>
            </div>
            <div className="mockup-container">
              <div className="mockup-placeholder">
                <p>💬 Super Fiesta Chat</p>
              </div>
            </div>
          </div>
        </ScrollSection>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <ScrollSection>
          <div className="pricing-content">
            <div className="pricing-badge">Built by Y Combinator Alumni</div>
            <h2 className="pricing-title">
              World's Most Powerful AIs.
              <br />
              One Subscription.
            </h2>
            <p className="pricing-description">
              Stop juggling tabs and subscriptions - AI Fiesta gives you access to
              all best-in-class AI models for just $12/month. That's almost half of
              what you'd pay for a single premium AI chat subscription.
            </p>
            <button className="cta-button">
              Get Started Now <span>→</span>
            </button>
            <p className="pricing-tagline">
              Experience smarter & more accurate answers
            </p>
            <div className="mockup-container">
              <div className="mockup-placeholder pricing-mockup">
                <p>💰 Pricing Dashboard</p>
              </div>
            </div>
          </div>
        </ScrollSection>
      </section>

      {/* Prompt Boost Section */}
      <section className="feature-section gradient-section">
        <ScrollSection delay={200}>
          <div className="section-content">
            <div className="section-header">
              <div className="icon-badge">
                <span>⚡</span>
              </div>
              <h2 className="section-title">Prompt Boost – Instant Enhancement</h2>
              <p className="section-description">
                No need to craft the perfect question. Just write what you want, hit
                Enhance Prompt, and watch every AI respond with smarter, richer
                answers.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Turn rough ideas into perfect prompts</span>
                </div>
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Get 10x better responses instantly</span>
                </div>
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>No prompt engineering skills needed</span>
                </div>
              </div>
            </div>
            <div className="mockup-container">
              <div className="mockup-placeholder">
                <p>✨ Prompt Boost Tool</p>
              </div>
            </div>
          </div>
        </ScrollSection>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 AI Fiesta. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AIFiestaPage;
