import logo from "../../public/images/Logo.png";
import { RiArrowUpSLine } from "react-icons/ri";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-screen h-32 bg-grey-0 pt-11 pb-11 place-content-around flex space-x-[18rem] content-center items-center">
      <img src={logo} alt="logo" className="w-36 h-7" />
      <small className="text-[#FFFFFF]">
        © 2022 - Todos os direitos reservados.
      </small>
      <button
        onClick={scrollToTop}
        className="bg-grey-1 w-14 h-12 p-4 rounded border-none"
      >
        <RiArrowUpSLine className="fill-[#FFFFFF] w-full h-full" />
      </button>
    </footer>
  );
};
// teste