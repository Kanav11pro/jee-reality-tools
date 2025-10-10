import React, { useEffect, useRef, useState } from 'react';
import './AIFiesta.css';

const useScrollAnimation = (): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

interface ScrollSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children, delay = 0 }) => {
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

const AIFiestaPage: React.FC = () => {
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

      {/* Compare Section with STICKY STACKING CARDS */}
      <section className="sticky-section">
        <div className="sticky-container">
          <div className="text-column">
            <div className="sticky-text">
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
                one place.
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
                  <span>Never miss the most accurate answer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cards-column">
            <div className="sticky-card card-1">
              <div className="card-image-placeholder gradient-1">
                <h3>ChatGPT</h3>
                <p>Compare responses from OpenAI's most advanced model</p>
              </div>
            </div>
            <div className="sticky-card card-2">
              <div className="card-image-placeholder gradient-2">
                <h3>Claude</h3>
                <p>Get insights from Anthropic's powerful AI assistant</p>
              </div>
            </div>
            <div className="sticky-card card-3">
              <div className="card-image-placeholder gradient-3">
                <h3>Gemini</h3>
                <p>Leverage Google's latest AI technology</p>
              </div>
            </div>
            <div className="sticky-card card-4">
              <div className="card-image-placeholder gradient-4">
                <h3>Perplexity</h3>
                <p>Search-powered AI responses with citations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Super Fiesta Section with STICKY CARDS */}
      <section className="sticky-section green-section">
        <div className="sticky-container">
          <div className="cards-column">
            <div className="sticky-card card-1">
              <div className="card-image-placeholder gradient-5">
                <h3>🚀 Auto Select</h3>
                <p>Automatically chooses the best model for your query</p>
              </div>
            </div>
            <div className="sticky-card card-2">
              <div className="card-image-placeholder gradient-6">
                <h3>🔄 Switch Models</h3>
                <p>Seamlessly switch between AI models mid-conversation</p>
              </div>
            </div>
            <div className="sticky-card card-3">
              <div className="card-image-placeholder gradient-7">
                <h3>💬 Context Aware</h3>
                <p>Maintains conversation context across all models</p>
              </div>
            </div>
          </div>

          <div className="text-column">
            <div className="sticky-text">
              <div className="icon-badge">
                <span>🚀</span>
              </div>
              <h2 className="section-title">Introducing Super Fiesta</h2>
              <p className="section-description">
                Super Fiesta is designed to automatically select the most suitable AI
                model for your query, delivering a seamless and efficient experience.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Faster decisions via automatic selection</span>
                </div>
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Request alternatives instantly</span>
                </div>
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Unified context across models</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              all best-in-class AI models for just $12/month.
            </p>
            <button className="cta-button">
              Get Started Now <span>→</span>
            </button>
            <p className="pricing-tagline">
              Experience smarter & more accurate answers
            </p>
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
