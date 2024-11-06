import React, { useState } from "react";
import logo1 from "../Images/logo1.png";
import logo2 from "../Images/logo2.png";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay,
  Textarea
} from "@chakra-ui/react";

const Navbar = () => {
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();


  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose
  } = useDisclosure();

  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Message, setMessage] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);

  const sumbitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mvgoakgv",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json"
          },
          body: JSON.stringify({
            Name,
            Email,
            Phone,
            Message
          })
        });

      if (response.ok) {
        setSubmissionSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
      else {
        setSubmissionSuccess(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionSuccess(false);
    }
    finally {
      setIsSubmitting(false);
    }
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <>
      <div class="nav">
        <div class="logo">
          <div className="logo-div">
            <NavLink to="/" onClick={scrollToTop}>
              <div>
                <img loading="lazy" style={{ width: "2rem" }} src={logo2} alt="logo2" />
                <img loading="lazy" style={{ width: "2rem" }} src={logo1} alt="logo1" />
              </div>
            </NavLink>
          </div>
        </div>
        <ul className="navbar">
          <li>
            <NavLink to="/" onClick={scrollToTop}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={scrollToTop}>About</NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={scrollToTop}>gallery</NavLink>
          </li>
        </ul>
        <div class="btnGroup">
          <button onClick={onModalOpen}>Contact Us</button>
        </div>
      </div>

      {/* <!-- code for navbar for small phone --> */}
      <div class="nav-tab">
        <div class="logo">
          <div className="logo-div">
            <NavLink to="/">
              <div>
                <img loading="lazy" style={{ width: "2rem" }} src={logo2} alt="logo2" />
                <img loading="lazy" style={{ width: "2rem" }} src={logo1} alt="logo1" />
              </div>
            </NavLink>
          </div>
        </div>

        <div>
          <div class="openbtn" onClick={onDrawerOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path fill="black" d="M3 4h18v2H3zm6 7h12v2H9zm-6 7h18v2H3z" />
            </svg>
          </div>
        </div>
      </div>

      {/* CLose the Drwaer */}
      <Drawer placement="right" onClose={onDrawerClose} isOpen={isDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" padding="1.5rem"></DrawerHeader>
          <DrawerBody padding="1.5rem">
            <Accordion allowToggle>
              <AccordionItem border="none">
                <NavLink to="/" onClick={scrollToTop}>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Home
                    </Box>
                  </AccordionButton>
                </NavLink>
              </AccordionItem>


              <AccordionItem border="none">
                <NavLink to="/about" onClick={scrollToTop}>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      About Us
                    </Box>
                  </AccordionButton>
                </NavLink>
              </AccordionItem>

              <AccordionItem border="none">
                <NavLink to="/gallery" onClick={scrollToTop} >
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      gallery
                    </Box>
                  </AccordionButton>
                </NavLink>
              </AccordionItem>



              <AccordionItem border="none">
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" onClick={onModalOpen}>
                      Contact us
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>






      {/* Contact us Modal Come Here */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isModalOpen}
        onClose={onModalClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div className="modal-header">
              <h2 style={{ textAlign: "center" }}>Contact <span style={{ color: "orange" }}>Us</span></h2>
            </div>
            <form className="modal-form" onSubmit={sumbitForm}>
              <div className="form-group">
                <label htmlFor="Name">Name:</label>
                <input
                  className="form-control"
                  type="text"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email:</label>
                <input
                  className="form-control"
                  type="text"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  className="form-control"
                  type="text"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone no."
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Message">Message:</label>
                <Textarea
                  className="form-control"
                  type="text"
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message..."
                  required
                />
              </div>
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {submissionSuccess && <p className="success-message" style={{ color: "green" }}>Thank you! Your message has been sent.</p>}
              {submissionSuccess === false && <p className="error-message">Oops! Something went wrong. Please try again.</p>}
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

    </>
  );
};

export default Navbar;
