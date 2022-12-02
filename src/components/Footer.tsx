import { useState } from "react";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [contactVisible, setContactVisible] = useState(false);

  return (
    <footer className="prose flex max-w-none flex-col justify-start border-t-2 border-violet-800 px-12 py-4 dark:bg-slate-700 dark:prose-invert">
      <h3 onClick={() => setContactVisible(true)} className="cursor-pointer">
        Contact Me
      </h3>
      <ContactModal
        visible={contactVisible}
        closeModal={() => setContactVisible(false)}
      />
      <hr className="my-2 text-slate-400" />
      <img
        src="assets/brand-limited.svg"
        alt="Rho Technologies Limited"
        width="200"
        className="dark:invert"
      />
      <p className="dark:text-white">Registered in England, United Kingdom</p>
    </footer>
  );
};

export default Footer;
