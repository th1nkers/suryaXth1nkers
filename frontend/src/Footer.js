import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Footer.css";
import { FooterContext } from './shared/context/footer-link-context';
import SuccessModal from './shared/components/uiElements/SuccessModal';
import { ModalContext } from './shared/context/modal-context';
import up from './assets/work-assets/freelance-form/up.gif'

const Footer = () => {

  const footerLink = useContext(FooterContext);
  const modal = useContext(ModalContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/freelance-service") {
      footerLink.noFooterLink(true);
    } else {
      footerLink.noFooterLink(false);
    }

    if (location.pathname === "/contact-up") {
      footerLink.toggleHomeLink(false)
    } else {
      footerLink.toggleHomeLink(true)
    }

  }, [location, footerLink]);


  let content;

  if (!footerLink.isHome && !footerLink.isNoFooterLinks) {
    content = (
      <Link className='pages-link' to="/" >
        Back To Home Page .
      </Link>
    )
  }

  else if (footerLink.isHome && !footerLink.isNoFooterLinks) {
    content = (<Link className='pages-link' to="/contact-up" >
      Contact Me.
    </Link>)
  }

  let footerLinkContent = (
    footerLink.isNoFooterLinks ? (
      <div className="footer-links footer-freelance">
        <img src={up} alt="up-arrow" />
        <h1>MY FREELANCE SERVICE</h1>
      </div>
    ) : (
      <div className="footer-links">
        <Link to="freelance-service" id="freelance-service">Freelance Service</Link>
        {content}
      </div>)
  )

  return (
    <div className='footer'>
      {modal.showSuccessModal ? (
        <div className="footer-modal">
          <SuccessModal
            onCancel={() => modal.showModalHandler(false)}
          />
        </div>
      ) : (
        <div className='footer-main'>
          <span id="footer-copyright">©</span>
          <h3>suryaXth1nkers</h3>
        </div>
      )}

      {footerLinkContent}
    </div>
  )
}

export default Footer
