import React from 'react';

const Footer = () => {
  const footerStyles = {
    backgroundColor: '#fff', // White background
    color: '#000',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    borderTop: '4px solid black', // Add a black border on top
    margin: '60px 0 40px 0', // Increase margin for a thicker and stronger margin
  };

  const contactStyles = {
    // backgroundColor: 'black', // Black background for the contact div
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px', // Add padding for spacing
  };

  const contactInfoStyles = {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    background: '#f8f8f8',
  };

  const contactInfoParagraphStyles = {
    margin: '5px 0',
  };

  const messageBoxStyles = {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    transition: 'background-color 0.3s',
  };

  const sendButtonStyles = {
    background: 'linear-gradient(to right, pink, violet)',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background 0.3s',
  };

  const messageTextAreaStyles = {
    marginBottom: '10px',
    padding: '5px',
    width: '100%',
    height: '60px',
  };

  const logoStyles = {
    maxWidth: '150px',
    maxHeight: '150px',
    margin: '0 auto',
  };

  return (
    <footer style={footerStyles}>
      <div style={contactStyles}>
        <h3>Contact Us</h3>
        <div style={contactInfoStyles}>
          <p style={contactInfoParagraphStyles}>Company: PSK Traders</p>
          <p style={contactInfoParagraphStyles}>Owner: R. Mohankumar</p>
          <p style={contactInfoParagraphStyles}>Qualification: B.Com</p>
          <p style={contactInfoParagraphStyles}>Phone: 9080168896, 7010271208</p>
          <p style={contactInfoParagraphStyles}>Email: psktradersnkl@gmail.com</p>
        </div>
      </div>

      <div style={messageBoxStyles}>
        <h3>Send us a message</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" placeholder="From" style={{ marginBottom: '10px', padding: '5px' }} />
          <input type="text" placeholder="Subject" style={{ marginBottom: '10px', padding: '5px' }} />
        </div>
        <textarea
          placeholder="Your message"
          style={messageTextAreaStyles}
        ></textarea>
        <button style={sendButtonStyles}>Send</button>
      </div>

      <div>
        <img
          src="./logo.png"
          alt="Company Logo"
          style={logoStyles}
        />
        <p>
          PSK Traders is a company that specializes in selling poultry food raw materials. Founded by R. Mohankumar in 2003 in Namakkal, the company is committed to providing high-quality products for the poultry industry.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
  