import { faChevronUp, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function LayoutPage({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <div className="fixed z-50 bottom-[20px] right-[30px]">
        <div>
          <BackToTopButton
            children={
              <FontAwesomeIcon
                icon={faChevronUp}
                style={{ fontSize: "20px", marginRight: "30px" }}
              />
            }
          />
          <FontAwesomeIcon icon={faQuestion} style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
  );
}
