import React from 'react';

const Footer = () => (
  <footer className="text-center">
    <div className="footer-above">
      <div className="container">
        <div className="row">
          <div className="footer-col col-md-4">
            <h3>Main Location</h3>
            <p>
              <span>1 Fore Stree</span>
              <br />
              <span>London, EC2Y 5EJ</span>
            </p>
          </div>
          <div className="footer-col col-md-4">
            <h3>Around the Web</h3>
            <ul className="list-inline">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/leanjscom" className="btn-social btn-outline"><i className="fa fa-fw fa-github"></i></a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/leanjscom" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/leanjscom/" className="btn-social btn-outline"><i className="fa fa-fw fa-instagram"></i></a>
              </li>
            </ul>
          </div>
          <div className="footer-col col-md-4">
            <h3>About LeanJS</h3>
            <p>
              <a href="https://leanjs.com/">LeanJS </a>
              <span>
                is a boutique of excellence focused on Lean, JavaScript, UX, Agile, and people.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-below">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span>Copyright &copy;</span> <a href="https://leanjs.com/" target="_blank" rel="noopener noreferrer">LeanJS</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
