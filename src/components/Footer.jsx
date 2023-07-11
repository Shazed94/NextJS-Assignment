const Footer = () => {
  return (
    <div className="footer">
      <h1>Footer</h1>
      <div className="footer_wrapper">
        <div className="left_section">
          <h3>About Me</h3>
          <p>
              Hello, this is Md. Shazed Ashraf and i am from Mirpur, Dhaka.
              I&apos;ve completed my graduation in CSE from United International
              University. Currently i am working as a react developer in an
              agency at Mohakhali. I signed up for this course to improve my
              learning curve in this sector and get to know new technologies as
              well. So far the journey has been great. I&apos;m looking forward
              to some awesome stuff.
          </p>
        </div>
        <div className="right_section">
          <h3>Contact Information</h3>
          <div className="contact_details">
            <p>
              Email:{" "}
              <a target="_blank" rel="noreferrer" href="mailto:ashraf.shazed@gmail.com">
                ashraf.shazed@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shazed94">
                www.linkedin.com/in/shazed94
              </a>
            </p>
            <p>
              Website:{" "}
              <a target="_blank" rel="noreferrer" href="https://shazed-portfolio.netlify.app/">
             shazed-portfolio.netlify.app
              </a>
            </p>
            <address>
              Address: House#187,Road#5,South Bishil,Mirpur-1,Dhaka
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
