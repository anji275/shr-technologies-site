import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ statusCode = 500, message = "Something went wrong" }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="error-page-container">
      <div className="error-page-wrapper">
        {/* Error Visual */}
        <div className="error-visual">
          <div className="error-code">{statusCode}</div>
          <div className="error-illustration">
            <i className="fas fa-bug"></i>
          </div>
        </div>

        {/* Error Content */}
        <div className="error-page-content">
          <h1 className="error-page-title">
            {statusCode === 404 && "Page Not Found"}
            {statusCode === 500 && "Server Error"}
            {statusCode === 503 && "Service Unavailable"}
            {!["404", "500", "503"].includes(statusCode.toString()) && "Error"}
          </h1>

          <p className="error-page-message">{message}</p>

          <div className="error-page-suggestions">
            <h3>What can you do?</h3>
            <ul>
              <li>
                <i className="fas fa-check"></i>
                Check your internet connection
              </li>
              <li>
                <i className="fas fa-check"></i>
                Try refreshing the page
              </li>
              <li>
                <i className="fas fa-check"></i>
                Clear your browser cache
              </li>
              <li>
                <i className="fas fa-check"></i>
                Contact support if the problem persists
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="error-page-actions">
            <button onClick={handleGoBack} className="btn-outline">
              <i className="fas fa-arrow-left"></i> Go Back
            </button>
            <button onClick={handleGoHome} className="btn-primary">
              <i className="fas fa-home"></i> Home Page
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="error-page-support">
          <div className="support-card">
            <i className="fas fa-headset"></i>
            <div>
              <h4>Still need help?</h4>
              <p>
                Contact us at <strong>support@shrtech.com</strong> or call{" "}
                <strong>+1 (437) 928-1901</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;