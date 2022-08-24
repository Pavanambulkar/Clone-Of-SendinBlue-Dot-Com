import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img
                alt="logo"
                src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo-color.svg"
                width="170px"
              />
              {/* <span className="ml-3 h5 font-weight-bold">Devwares</span> */}
            </a>
            <p className="my-3" style={{ width: "250px" }}>
              Email, SMS, Facebook, Chat, CRM, and more, all-in-one platform to
              help you grow your business through building stronger customer
              relationships.
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Solutions
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBFooterLink href="/">Features</CDBFooterLink>
              <CDBFooterLink href="/">Enterprise offer</CDBFooterLink>
              <CDBFooterLink href="/">Sendinblue vs. Mailchimp</CDBFooterLink>
              <CDBFooterLink href="/">Service Lab</CDBFooterLink>
              <CDBFooterLink href="/">Partner with us</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Company
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBFooterLink href="/">About us</CDBFooterLink>
              <CDBFooterLink href="/">Jobs</CDBFooterLink>
              <CDBFooterLink href="/">Press</CDBFooterLink>
              <CDBFooterLink href="/">Our carbon footprint</CDBFooterLink>
              <CDBFooterLink href="/">Contact us</CDBFooterLink>
              <CDBFooterLink href="/">GDPR</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Resources
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
              <CDBFooterLink href="/">Help center</CDBFooterLink>
              <CDBFooterLink href="/">Sendinblue Academy</CDBFooterLink>
              <CDBFooterLink href="/">Glossary</CDBFooterLink>
              <CDBFooterLink href="/">Plugins</CDBFooterLink>
              <CDBFooterLink href="/">API docs</CDBFooterLink>
              <CDBFooterLink href="/">Status</CDBFooterLink>
              <CDBFooterLink href="/">Find an Expert</CDBFooterLink>
              <CDBFooterLink href="/">Product Updates</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
        © 2022 Sendinblue. All rights reserved

        </small>
      </CDBBox>
    </CDBFooter>
  );
};
