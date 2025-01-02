import React from "react";

const TermsOfUse = () => {
  return (
    <div className="terms-container" style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Terms of Use Agreement</h1>
      <div
        className="terms-content"
        style={{
          overflowY: "auto",
          maxHeight: "80vh",
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <p>
          <strong>
            THIS AGREEMENT CONTAINS A MANDATORY ARBITRATION PROVISION, WAIVER OF JURY TRIAL & CLASS ACTION.
          </strong>{" "}
          PLEASE REVIEW ALL PROVISIONS CONTAINED HEREIN. If you do not agree to these provisions, do not use this
          platform/site or services. By accessing, browsing, or using this platform/site and its services, through any
          direct or indirect means, or by using the goods or services provided and offered in or through this platform,
          by any alternative methods (including, for example, telephone, mail, text, email, or facsimile), you accept
          and agree to be bound by this Agreement, these Services, and our Privacy Policy, which is incorporated by
          reference.
        </p>
        <p>
          GetAContractorNow.com, a Pennsylvania limited liability company, and its affiliates and subsidiaries
          (collectively “GetAContractorNow.com”, “we”, “us”, “our”, or “Company”) encourage all users of this platform
          and service to review this Terms of Use Agreement (“Agreement”).
        </p>
        <h2>Platform/Services</h2>
        <p>
          This platform offers a combination of marketing and technology services which are utilized by small to large
          brands for marketing purposes, consent management, and client acquisition/retention (collectively
          “Services”). Services through this platform/site are for the benefit of Third Parties only. This
          platform/service is intended for United States residents only.
        </p>
        <p>
          You understand and agree that if you provide an inquiry for additional information on this platform, the
          information you provided will be purchased by the client network, affiliates, and/or vendors in order to
          provide such services. Some business partners include companies who provide business services for us or on
          our behalf in order to deliver marketing services to you.
        </p>
        {/* The rest of your content here */}
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => alert("You accepted the terms!")}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Accept Terms
        </button>
      </div>
    </div>
  );
};

export default TermsOfUse;
