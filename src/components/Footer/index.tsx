import { defaultFooterClassName } from "@constants/classes";

const Footer = () => {
  return (
    <div className={defaultFooterClassName}>
      created with ♥ by
      <a
        className="mx-1 hover: "
        target="_blank"
        href="https://www.danieliosifmorohoschi.me"
      >
        Daniel-Iosif Morohoschi
      </a>
    </div>
  );
};

export default Footer;
