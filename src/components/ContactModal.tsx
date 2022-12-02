const ContactModal = ({
  visible,
  closeModal,
}: {
  visible: boolean;
  closeModal: () => void;
}) => {
  if (!visible) return <></>;

  return (
    <div
      className={`fixed top-0 left-0 z-20 flex h-screen w-screen  items-center justify-center overscroll-contain transition-colors delay-500 ${
        visible ? "bg-[#1a1a1a66]" : "bg-[#1a1a1a01]"
      }`}
      onClick={() => closeModal()}
    >
      <div className="prose relative z-30 flex w-1/2 flex-col rounded-lg bg-slate-50 p-8 opacity-100 transition-opacity dark:bg-slate-600 dark:prose-invert">
        <h1>Contact Me</h1>
        <hr className="my-4" />

        <h4>
          Send me an{" "}
          <a className="font-bold" href="mailto:elliott@rho-technologies.com">
            email
          </a>
        </h4>

        <h4>
          Check out my{" "}
          <a className="font-bold" href="https://github.com/ottelli">
            GitHub
          </a>{" "}
          page
        </h4>

        <h4>
          Connect with me on{" "}
          <a
            className="font-bold"
            href="https://linkedin.com/in/elliott-cheesman"
          >
            LinkedIn
          </a>
        </h4>

        <div
          className="absolute top-2 right-4 cursor-pointer font-bold opacity-50"
          onClick={() => closeModal()}
        >
          X
        </div>

        <h4>
          <a href="/cv" className="font-bold">
            My CV
          </a>
        </h4>
      </div>
    </div>
  );
};

export default ContactModal;
