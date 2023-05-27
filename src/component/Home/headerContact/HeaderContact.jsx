import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
const HeaderContact = ({ contact }) => {
  return (
    <div className={`container py-2`}>
      <div className="d-flex justify-content-center align-items-center gap-2">
        <a
          target="_blank"
          href={`mailto:${contact.email}`}
          className="d-flex align-items-center text-black gap-1 fw-bold"
        >
          <AiTwotoneMail size={20} />
          <p className="p-0 m-0">{contact.email}</p>
        </a>
        <a
          href={`tel:${contact.phone}`}
          className="d-flex align-items-center text-black gap-1 fw-bold"
        >
          <BsFillTelephoneFill size={20} />
          <p className="p-0 m-0">{contact.phone}</p>
        </a>
      </div>
    </div>
  );
};

export default HeaderContact;
