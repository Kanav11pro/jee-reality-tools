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

      {/* Compare Section with Horizontal Scroll Cards */}
      <section className="feature-section dark-section">
        <ScrollSection>
          <div className="section-content-vertical">
            <div className="section-header-center">
              <div className="model-icons-center">
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
              <p className="section-description-center">
                Free AI models often deliver restricted and inferior answers. With AI
                Fiesta, you get access to multiple top-tier premium models, all in
                one place. Compare their responses side-by-side to experience
                faster, smarter, and most accurate answers.
              </p>
            </div>

            {/* Horizontal Scroll Cards Container */}
            <div className="cards-scroll-container">
              <div className="card-item">
                <div className="card-content">
                  <div className="card-icon">✓</div>
                  <h3>Save hours of manual comparison</h3>
                  <p>Compare multiple AI responses instantly without switching between different platforms</p>
                </div>
              </div>
              <div className="card-item">
                <div className="card-content">
                  <div className="card-icon">⚡</div>
                  <h3>Customize your AI team instantly</h3>
                  <p>Select and customize which AI models you want to compare based on your needs</p>
                </div>
              </div>
              <div className="card-item">
                <div className="card-content">
                  <div className="card-icon">🎯</div>
                  <h3>Never miss the most accurate answer</h3>
                  <p>Get the best possible answer by comparing responses from top AI models</p>
                </div>
              </div>
              <div className="card-item">
                <div className="card-content">
                  <div className="card-icon">💡</div>
                  <h3>Smart Context Understanding</h3>
                  <p>All models understand your context and provide relevant, contextual answers</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollSection>
      </section>

      {/* Super Fiesta Section with Horizontal Cards */}
      <section className="feature-section green-section">
        <ScrollSection delay={200}>
          <div className="section-content-vertical">
            <div className="section-header-center">
              <div className="icon-badge-center">
                <span>🚀</span>
              </div>
              <h2 className="section-title">Introducing Super Fiesta</h2>
              <p className="section-description-center">
                Super Fiesta is designed to automatically select the most suitable AI
                model for your query, delivering a seamless and efficient
                experience. It keeps context and maintains a consistent tone.
              </p>
            </div>

            <div className="cards-scroll-container">
              <div className="card-item">
                <div className="card-content">
                  <div className="card-icon">🎯</div>
                  <h3>Automatic Model Selection</h3>
                  <p>Faster decisions via automatic best-model selection based on your query type</p>
                </div>
              </div>
              <div className="card-item">
                <div className="card-content">
                  <div className="card-icon">🔄</div>
                  <h3>Seamless Alternatives</h3>
                  <p>Request alternatives without leaving the conversation flow</p>
                </div>
              </div>
              <div className="card-item">
                <div className="card-content">
                  <div className="card-icon">💬</div>
                  <h3>Unified Context</h3>
                  <p>Unified context across models for a continuous dialogue experience</p>
                </div>
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
          </div>
        </ScrollSection>
      </section>

      {/* Prompt Boost Section with Cards */}
      <section className="feature-section gradient-section">
        <ScrollSection delay={200}>
          <div className="section-content-vertical">
            <div className="section-header-center">
              <div className="icon-badge-center">
                <span>⚡</span>
              </div>
              <h2 className="section-title">Prompt Boost – Instant Enhancement</h2>
              <p className="section-description-center">
                No need to craft the perfect question. Just write what you want, hit
                Enhance Prompt, and watch every AI respond with smarter, richer
                answers.
              </p>
            </div>

            <div className="cards-scroll-container">
              <div className="card-item">
                <div className="card-content">
                  <div className="card-icon">✨</div>
                  <h3>Perfect Prompts</h3>
                  <p>Turn rough ideas into perfect prompts automatically</p>
                </div>
              </div>
              <div className="card-item">
                <div className="card-content">
                  <div className="card-icon">10x</div>
                  <h3>Better Responses</h3>
                  <p>Get 10x better responses instantly with enhanced prompts</p>
                </div>
              </div>
              <div className="card-item">
                <div className="card-content">
                  <div className="card-icon">🎓</div>
                  <h3>No Skills Needed</h3>
                  <p>No prompt engineering skills needed - just write naturally</p>
                </div>
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
