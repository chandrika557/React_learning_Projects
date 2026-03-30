import React from "react";
import InputField from "./InputField";
import "./Form.css";

const Form = () => {

const policyTypeOptions = [
    "Select options",
    "Personal",
    "Business",
    "Health",
    "Auto",
  ];
const businessOwnershipTypes = [
    "Sole Proprietor",
    "Partnership",
    "Corporation",
    "LLC",
  ];

const coverageOptions = [
    "Property Damage",
    "Liability Coverage",
    "Equipment Breakdown",
    "Cyber Protection",
  ];
    return (
      <form className="form-container">
        <h2>Customer Information</h2>
          <div className="grid-2">
          <InputField type="text" label="Full Name" id="fullname" placeholder="Enter full name"/>
          <InputField type="email" label="Email Address" id="email" placeholder="Enter email"/>
          </div>
          <InputField type="tel" label="Phone Number" id="phone"placeholder="(555) 123-4567"/>
          <InputField type="date" label="Date of Birth" id="dob" />

         <InputField type="select" label="Policy Type" id="policyType" name="policyType" options={policyTypeOptions} />

        <div className="form-group">
        <label>Business Ownership Type</label>
        <div className="radio-group">
          {businessOwnershipTypes.map((type, index) => (
            <label key={index} className="radio-option">
              <input type="radio" name="ownershipType" value={type} /> {type}
            </label>
          ))}
        </div>
        </div>

        <div className="form-group">
        <label>Coverage Options</label>
        <div className="checkbox-group">
          {coverageOptions.map((option, index) => (
            <label key={index} className="checkbox-option">
              <input type="checkbox" value={option} /> {option}
            </label>
          ))}
        </div>
        </div>

        <InputField type="number" label="Number of Employees" id="numEmployees" name="numEmployees" placeholder="0" />
        
        <InputField type="textarea" label="Business Description" id="businessDescription" name="businessDescription" placeholder="Describe your business..." rows={4} />

        <div className="form-group">
          <label htmlFor="businessDescription">Business Description</label>
          <textarea id="businessDescription" name="businessDescription" placeholder="Describe your business..." rows={4} />
        </div>

      <div className="form-group">
        <label>Upload Supporting Documents</label>
        <div className="file-upload-area">
          <p className="upload-icon">⬆</p>
          <p className="upload-text">Click to upload or drag and drop</p>
          <p className="upload-hint">PDF, DOC, DOCX (max. 10MB)</p>
        </div>
      </div>
        <div className="insurance-check">
          <label>Do you have previous insurance?</label>
          <div className="toggle-switch">
            <div className="toggle-thumb" />
          </div>
        </div>
        <hr />
        <div className="form-buttons">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="button" className="save-draft-btn">Save Draft</button>
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    );
  }

export default Form;