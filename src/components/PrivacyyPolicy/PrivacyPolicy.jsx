import React, { useState } from "react";
import "../PrivacyyPolicy/privacypolicy.css";
import { Link } from "react-router-dom";
export const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <TopSection1 />
      <MidSection />
      <BottomSection />
    </div>
  );
};
const TopSection1 = () => {
  return (
    <div className="row-container">
      <div className="leftside-content">
        <div>
          <h1>Privacy Policy</h1>
          <h2>
            The Investment Adviser Public Disclosure database contains
            registration documents filed by investment adviser firms that
            register electronically using the Investment Adviser Registration
            Depository (IARD).
          </h2>
        </div>
      </div>
      <img src="./images/Safe-cuate 1.svg" className="main-img" />
    </div>
  );
};
const MidSection = () => {
  const privacyList = [
    {
      id: 1,
      paragraph:
        "The personal information you provide to Kalpatarumulti.com will be treated with the utmost confidentiality, and it will only be used in ways that will be advantageous to our clients. We value our relationship with you greatly and work hard to uphold and respect your right to privacy.To prevent unauthorized use, disclosure, or publication of the personal information we obtain from you, we will safeguard it with the same level of care—but no less than a reasonable level—with which we safeguard similarly sensitive information about ourselves.",
      title: "PRIVACY POLICY STATEMENT",
    },
    {
      id: 2,
      paragraph:
        "We will use the personal data to better serve you, keep you informed about new products, and provide you with information that may be of interest to you. Your information will only be used in the manner and context for which it was intended when it was acquired. We would process your trading request and complete the settlement of your obligations using your information.",
      title: "IMPART YOUR PERSONAL INFORMATION",
    },
    {
      id: 3,
      paragraph:
        "We, at Kalpatarumulti.com, acknowledge and accept that the personal details that you impart to us, is to be kept in strict confidentiality and to use the information only in the manner which would be beneficial to our customers. We consider our relationship with you as invaluable and strive to respect and safeguard your right to privacy.",
      title: "KALPATARU MULTIPLIER LTD",
    },
    {
      id: 4,
      paragraph:
        "We, at Kalpatarumulti.com, acknowledge and accept that the personal details that you impart to us, is to be kept in strict confidentiality and to use the information only in the manner which would be beneficial to our customers. We consider our relationship with you as invaluable and strive to respect and safeguard your right to privacy.",
      title: "INFORMATION SHARING AND DISCLOSURE",
    },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [modalToOpen, setModalToOpen] = useState(0);
  const openModal = (id) => {
    setModalToOpen(0);
    console.log(id);
    setModalOpen(!modalOpen);
    setModalToOpen(id);
  };
  return (
    <div className="column-contiainer">
      <div className="Column-Container">
        <h3>Attention Investors!</h3>
      </div>
      {privacyList.map((item) => (
        <>
          <div className="row-card" key={item.id}>
            <h1>{item.title}</h1>
            {modalOpen === true && modalToOpen === item.id ? (
              <img
                src="./images/Vector (3).svg"
                onClick={(e) => openModal(item.id)}
              />
            ) : (
              <img
                src="./images/Vector.svg"
                onClick={(e) => openModal(item.id)}
              />
            )}
          </div>
          {modalOpen == true && modalToOpen === item.id && (
            <div className="column-container contact-box openmodal op">
              <img src="./images/Ellipse 2.svg" alt="" />
              <p>{item.paragraph}</p>

              <img src="./images/Ellipse 2.svg" alt="" />
            </div>
          )}
        </>
      ))}
    </div>
  );
};
const BottomSection = () => {
  return (
    <div className="column-container contact-box pp">
      <img src="./images/Ellipse 2.svg" alt="" />
      <h1>Didn’t Find what you were Looking For?</h1>

      <Link to="/contact-us" className="contact-button">
        Contact Us
      </Link>
      <img src="./images/Ellipse 2.svg" alt="" />
    </div>
  );
};
export default PrivacyPolicy;
