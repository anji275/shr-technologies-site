import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  resetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} onReset={this.resetError} />;
    }

    return this.props.children;
  }
}

const ErrorFallback = ({ error, onReset }) => {
  return (
    <div className="error-boundary-container">
      <div className="error-content">
        <div className="error-icon">
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        <h1 className="error-title">Oops! Something Went Wrong</h1>
        <p className="error-description">
          We encountered an unexpected error. Please try refreshing the page or contact support.
        </p>
        
        <div className="error-details">
          <details className="error-toggle">
            <summary>Technical Details</summary>
            <pre className="error-stack">
              {error && error.toString()}
            </pre>
          </details>
        </div>

        <div className="error-actions">
          <button onClick={onReset} className="btn-primary">
            <i className="fas fa-redo"></i> Try Again
          </button>
          <button onClick={() => window.location.href = "/"} className="btn-secondary">
            <i className="fas fa-home"></i> Go Home
          </button>
        </div>

        <div className="error-support">
          <p>
            Need help? <a href="mailto:support@shrtech.com">Contact our support team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;