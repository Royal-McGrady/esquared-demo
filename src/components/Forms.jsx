import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // State to hold form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    website: '',
    industry: '',
    location: '',
    yearFounded: '',
    ownershipSplit: '',
    stageOfBusiness: '',
    arr: '',
    mrr: '',
    mau: '',
    dau: '',
    userRetentionRate: '',
    conversionRate: '',
    mvpDeveloped: '',
    patentsOrIP: '',
    competitors: '',
    goToMarketStrategy: '',
    runway: '',
    burnRate: '',
    grossMargins: '',
    operatingMargins: '',
    fundingRaised: '',
    foundersDetails: '',
    teamExperience: '',
    keyMilestones: '',
    plannedMilestones: '',
    averageDealSize: '',
    salesCycleLength: '',
    cogs: '',
    revenueMilestone: '',
    customerGrowthTarget: '',
    pitchDeck: null,
    historicalFinancials: null,
    capTable: null,
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0], // Store the file object
    });
  };

  const handleSubmit = async () => {
    console.log("Submitting form with data:", formData); // Log form data
  
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
  
    try {
      const response = await fetch('http://localhost:1433/api/data', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

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

  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return (
          <div>
            <h2 className="form-section-title">General Information</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email" // Changed to type="email" for better validation
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter company name"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Website or Online Profile</label>
              <input
                type="url" // Changed to type="url" for better validation
                name="website"
                placeholder="Enter website or LinkedIn profile"
                value={formData.website}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Industry</label>
              <select
                name="industry" // Added name attribute
                value={formData.industry} // Added value binding
                onChange={handleInputChange} // Added onChange handler
              >
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
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      
        case 1:
          return (
            <div>
              <h2 className="form-section-title">Market Opportunity Overview</h2>
              <div className="form-group">
                <label>Year Founded</label>
                <input
                  type="number"
                  name="yearFounded"
                  placeholder="Enter year founded"
                  value={formData.yearFounded}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Ownership Split</label>
                <input
                  type="text"
                  name="ownershipSplit"
                  placeholder="Enter ownership split"
                  value={formData.ownershipSplit}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Stage of the Business</label>
                <select
                  name="stageOfBusiness" // Added name attribute
                  value={formData.stageOfBusiness} // Added value binding
                  onChange={handleInputChange} // Added onChange handler
                >
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
                <input
                  type="number"
                  name="arr"
                  placeholder="Enter ARR (ZAR)"
                  value={formData.arr}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Monthly Recurring Revenue (MRR)</label>
                <input
                  type="number"
                  name="mrr"
                  placeholder="Enter MRR (ZAR)"
                  value={formData.mrr}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          );


          case 2:
            return (
              <div>
                <h2 className="form-section-title">Core Product Metrics</h2>
                <div className="form-group">
                  <label>Monthly Active Users (MAU)</label>
                  <input
                    type="number"
                    name="mau"
                    placeholder="Enter MAU"
                    value={formData.mau}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Daily Active Users (DAU)</label>
                  <input
                    type="number"
                    name="dau"
                    placeholder="Enter DAU"
                    value={formData.dau}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>User Retention Rate (%)</label>
                  <input
                    type="number"
                    name="userRetentionRate"
                    placeholder="Enter retention rate"
                    value={formData.userRetentionRate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Conversion Rate (%)</label>
                  <input
                    type="number"
                    name="conversionRate"
                    placeholder="Enter conversion rate"
                    value={formData.conversionRate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>MVP Developed</label>
                  <select
                    name="mvpDeveloped" // Added name attribute
                    value={formData.mvpDeveloped} // Added value binding
                    onChange={handleInputChange} // Added onChange handler
                  >
                    <option value="">Select option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Patents or Proprietary IP</label>
                  <select
                    name="patentsOrIP" // Added name attribute
                    value={formData.patentsOrIP} // Added value binding
                    onChange={handleInputChange} // Added onChange handler
                  >
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
                    <input
                      type="text"
                      name="competitors" // Added name attribute
                      placeholder="Enter competitors"
                      value={formData.competitors}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Current Go-to-Market Strategy</label>
                    <input
                      type="text"
                      name="goToMarketStrategy" // Added name attribute
                      placeholder="Enter strategy"
                      value={formData.goToMarketStrategy}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              );


      case 4:
        return (
          <div>
            <h2 className="form-section-title">Financials Metrics</h2>
            <div className="form-group">
              <label>Runway (Months)</label>
              <input
                type="number"
                placeholder="Enter runway"
                value={formData.runway}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Burn Rate (ZAR)</label>
              <input
                type="number"
                placeholder="Enter burn rate"
                value={formData.burnRate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Gross Margins (%)</label>
              <input
                type="number"
                placeholder="Enter gross margins"
                value={formData.grossMargins}
                onChange={handleInputChange}
              />            
              </div>
            <div className="form-group">
              <label>Operating Margins (%)</label>
              <input
                type="number"
                placeholder="Enter operating margins"
                value={formData.operatingMargins}
                onChange={handleInputChange}
              />           
               </div>
            <div className="form-group">
              <label>Funding Raised to Date (ZAR)</label>
              <input
                type="number"
                placeholder="Enter funding raised"
                value={formData.fundingRaised}
                onChange={handleInputChange}
              />            
              </div>
          </div>
        );

        case 5:
          return (
            <div>
              <h2 className="form-section-title">Team</h2>
              <div className="form-group">
                <label>Founders/Leadership Team Details</label>
                <textarea
                  name="foundersDetails" // Added name attribute
                  placeholder="Enter names, roles, backgrounds"
                  value={formData.foundersDetails} // Added value binding
                  onChange={handleInputChange} // Added onChange handler
                />
              </div>
              <div className="form-group">
                <label>Team’s Relevant Experience</label>
                <textarea
                  name="teamExperience" // Added name attribute
                  placeholder="Enter experience details"
                  value={formData.teamExperience} // Added value binding
                  onChange={handleInputChange} // Added onChange handler
                />
              </div>
            </div>
          );


          case 6:
            return (
              <div>
                <h2 className="form-section-title">Future Plans</h2>
                <div className="form-group">
                  <label>Key Milestones Achieved</label>
                  <textarea
                    name="keyMilestones" // Added name attribute
                    placeholder="Enter milestones"
                    value={formData.keyMilestones} // Added value binding
                    onChange={handleInputChange} // Added onChange handler
                  />
                </div>
                <div className="form-group">
                  <label>Planned Milestones (Next 12-24 Months)</label>
                  <textarea
                    name="plannedMilestones" // Added name attribute
                    placeholder="Enter planned milestones"
                    value={formData.plannedMilestones} // Added value binding
                    onChange={handleInputChange} // Added onChange handler
                  />
                </div>
              </div>
            );


      case 7:
        return (
          <div>
            <h2 className="form-section-title">Operational Efficiency</h2>
            <div className="form-group">
              <label>Average Deal Size (ZAR)</label>
              <input
                type="number"
                placeholder="Enter deal size"
                value={formData.averageDealSize}
                onChange={handleInputChange}
              />            
              
            </div>
            <div className="form-group">
              <label>Sales Cycle Length (Days)</label>
              <input
                type="number"
                placeholder="Enter sales cycle length"
                value={formData.salesCycleLength}
                onChange={handleInputChange}
              />            
            
            </div>
            <div className="form-group">
              <label>COGS (ZAR)</label>
              <input
                type="number"
                placeholder="Enter COGS"
                value={formData.cogs}
                onChange={handleInputChange}
              />            
              </div>
          </div>
        );
      case 8:
        return (
          <div>
            <h2 className="form-section-title">Future Projections & Analytics</h2>
            <div className="form-group">
              <label>Revenue Milestone (Next 12 Months)</label>
              <input
                type="number"
                placeholder="Enter revenue milestone"
                value={formData.revenueMilestone}
                onChange={handleInputChange}
              />            
              </div>
            <div className="form-group">
              <label>Customer Growth Target (%)</label>
              <input
                type="number"
                placeholder="Enter growth target"
                value={formData.customerGrowthTarget}
                onChange={handleInputChange}
              />            
              </div>
          </div>
        );
      case 9:
        return (
          <div>
            <h2 className="form-section-title">Attachments & Supporting Data</h2>
            <div className="form-group">
              <label>Pitch Deck</label>
              <input
                type="file"
                name="pitchDeck"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group">
              <label>Historical Financials</label>
              <input
                type="file"
                name="historicalFinancials"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group">
              <label>Cap Table</label>
              <input
                type="file"
                name="capTable"
                onChange={handleFileChange}
              />
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
          <h1 className="form-title">Sign Up Form</h1>
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