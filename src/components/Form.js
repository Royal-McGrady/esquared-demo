import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sections = [
    "General Information",
    "Business Metrics & Overview",
    "Core Product Metrics",
    "Market Opportunity",
    "Financials Metrics",
    "Team",
    "Future Plans",
    "Operational Efficiency",
    "Future Projections & Analytics",
    "Attachments & Supporting Data",
  ];

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return (
          <div>
            <h2 className="form-section-title">General </h2>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter full name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" placeholder="Enter company name" />
            </div>
            <div className="form-group">
              <label>Website or Online Profile</label>
              <input type="url" placeholder="Enter website or LinkedIn profile" />
            </div>
            <div className="form-group">
              <label>Industry</label>
              <select>
                <option value="">Select industry</option>
                <option value="Tech">Tech</option>
                <option value="Software">Software</option>
                <option value="B2B SaaS">B2B SaaS</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
              </select>
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" placeholder="City, Province, Country" />
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h2 className="form-section-title">Business Metrics & Overview</h2>
            <div className="form-group">
              <label>Year Founded</label>
              <input type="number" placeholder="Enter year founded" />
            </div>
            <div className="form-group">
              <label>Ownership Split</label>
              <input type="text" placeholder="Enter ownership split" />
            </div>
            <div className="form-group">
              <label>Stage of the Business</label>
              <select>
                <option value="">Select stage</option>
                <option value="Idea/Concept">Idea/Concept</option>
                <option value="Pre-Seed">Pre-Seed</option>
                <option value="Seed">Seed</option>
                <option value="Series A">Series A</option>
                <option value="Series B">Series B</option>
                <option value="Growth/Expansion">Growth/Expansion</option>
              </select>
            </div>
            <div className="form-group">
              <label>Annual Recurring Revenue (ARR)</label>
              <input type="number" placeholder="Enter ARR (ZAR)" />
            </div>
            <div className="form-group">
              <label>Monthly Recurring Revenue (MRR)</label>
              <input type="number" placeholder="Enter MRR (ZAR)" />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="form-section-title">Core Product Metrics</h2>
            <div className="form-group">
              <label>Monthly Active Users (MAU)</label>
              <input type="number" placeholder="Enter MAU" />
            </div>
            <div className="form-group">
              <label>Daily Active Users (DAU)</label>
              <input type="number" placeholder="Enter DAU" />
            </div>
            <div className="form-group">
              <label>User Retention Rate (%)</label>
              <input type="number" placeholder="Enter retention rate" />
            </div>
            <div className="form-group">
              <label>Conversion Rate (%)</label>
              <input type="number" placeholder="Enter conversion rate" />
            </div>
            <div className="form-group">
              <label>MVP Developed</label>
              <select>
                <option value="">Select option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Patents or Proprietary IP</label>
              <select>
                <option value="">Select option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="form-section-title">Market Opportunity</h2>
            <div className="form-group">
              <label>Competitors</label>
              <input type="text" placeholder="Enter competitors" />
            </div>
            <div className="form-group">
              <label>Current Go-to-Market Strategy</label>
              <input type="text" placeholder="Enter strategy" />
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="form-section-title">Financials Metrics</h2>
            <div className="form-group">
              <label>Runway (Months)</label>
              <input type="number" placeholder="Enter runway" />
            </div>
            <div className="form-group">
              <label>Burn Rate (ZAR)</label>
              <input type="number" placeholder="Enter burn rate" />
            </div>
            <div className="form-group">
              <label>Gross Margins (%)</label>
              <input type="number" placeholder="Enter gross margins" />
            </div>
            <div className="form-group">
              <label>Operating Margins (%)</label>
              <input type="number" placeholder="Enter operating margins" />
            </div>
            <div className="form-group">
              <label>Funding Raised to Date (ZAR)</label>
              <input type="number" placeholder="Enter funding" />
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h2 className="form-section-title">Team</h2>
            <div className="form-group">
              <label>Founders/Leadership Team Details</label>
              <textarea placeholder="Enter names, roles, backgrounds" />
            </div>
            <div className="form-group">
              <label>Team’s Relevant Experience</label>
              <textarea placeholder="Enter experience details" />
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <h2 className="form-section-title">Future Plans</h2>
            <div className="form-group">
              <label>Key Milestones Achieved</label>
              <textarea placeholder="Enter milestones" />
            </div>
            <div className="form-group">
              <label>Planned Milestones (Next 12-24 Months)</label>
              <textarea placeholder="Enter planned milestones" />
            </div>
          </div>
        );
      case 7:
        return (
          <div>
            <h2 className="form-section-title">Operational Efficiency</h2>
            <div className="form-group">
              <label>Average Deal Size (ZAR)</label>
              <input type="number" placeholder="Enter deal size" />
            </div>
            <div className="form-group">
              <label>Sales Cycle Length (Days)</label>
              <input type="number" placeholder="Enter cycle length" />
            </div>
            <div className="form-group">
              <label>COGS (ZAR)</label>
              <input type="number" placeholder="Enter COGS" />
            </div>
          </div>
        );
      case 8:
        return (
          <div>
            <h2 className="form-section-title">Future Projections & Analytics</h2>
            <div className="form-group">
              <label>Revenue Milestone (Next 12 Months)</label>
              <input type="number" placeholder="Enter revenue milestone" />
            </div>
            <div className="form-group">
              <label>Customer Growth Target (%)</label>
              <input type="number" placeholder="Enter growth target" />
            </div>
          </div>
        );
      case 9:
        return (
          <div>
            <h2 className="form-section-title">Attachments & Supporting Data</h2>
            <div className="form-group">
              <label>Pitch Deck</label>
              <input type="file" />
            </div>
            <div className="form-group">
              <label>Historical Financials</label>
              <input type="file" />
            </div>
            <div className="form-group">
              <label>Cap Table</label>
              <input type="file" />
            </div>
          </div>
        );
      default:
        return <div className="form-error">Section not found</div>;
    }
  };

  return (
    <div className="form-container">
      {formSubmitted ? (
        <div className="form-success">
          <h1>Form Successfully Submitted</h1>
          <p>Thank you for submitting the form. We will reach out to you in 3-5 working days.</p>
        </div>
      ) : (
        <>
          <h1 className="form-title">Multi-Section Form</h1>
          {renderSection()}
          <div className="form-navigation">
            {currentSection > 0 && (
              <button
                onClick={handlePrevious}
                className="btn btn-previous"
              >
                Previous
              </button>
            )}
            {currentSection < sections.length - 1 ? (
              <button onClick={handleNext} className="btn btn-next">
                Next
              </button>
            ) : (
              <button onClick={handleSubmit} className="btn btn-submit">
                Submit
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Form;


