import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FooterContext } from './shared/context/footer-link-context';
import SuccessModal from './shared/components/uiElements/SuccessModal';
import { ModalContext } from './shared/context/modal-context';
import up from './assets/work-assets/freelance-form/up.gif';
import { IoArrowBackCircle } from "react-icons/io5";
import "./Footer.css";

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


  useEffect(() => {
    if (modal.showSuccessModal) {
      modal.showModalHandler(true);
      setTimeout(() => {
        modal.showModalHandler(false);
      }, 3000);
    }
  }, [modal]);


  let content;

  if (!footerLink.isHome && !footerLink.isNoFooterLinks) {
    content = (
      <Link className='pages-link' to="/" >
        HOME
      </Link>
    )
  }

  else if (footerLink.isHome && !footerLink.isNoFooterLinks) {
    content = (<>
      <Link className='pages-link' to="/contact-up" >
        CONTACT ME
      </Link>
    </>
    )
  }

  let footerLinkContent = (
    footerLink.isNoFooterLinks ? (
      <div className="footer-links footer-freelance">
        <img src={up} alt="up-arrow" />
        <h1>MY FREELANCE SERVICE</h1>
      </div>
    ) : (
      <div className="footer-links">
        {/* <Link to="freelance-service" id="freelance-service">
          <span>Freelance</span>{" "}
          <span>Service</span>
        </Link> */}
        {content}
      </div>
    )
  )

  return (
    <>
      <SuccessModal show={modal.showSuccessModal} />
      <div className="footer-section">
        <div className='footer'>
          <div className='footer-main'>
            <h3>suryaXth1nkers 2©24</h3>
          </div>
          {footerLinkContent}
        </div>
      </div>
    </>
  )
}

export default Footer
