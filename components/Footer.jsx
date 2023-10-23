import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-fit px-2 py-4 md:px-4 flex border-t border-gray-300 justify-center gap-8 items-center">
      <div>
        <p className="text-[10px] md:text-[15px] text-gray-400 font-medium">
          © 2023 Sanjeev Kumar Singh
        </p>
      </div>
      <div className="flex justify-center items-center px-2 gap-4">
        <a
          href="https://github.com/sanjeevnode"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="text-[15px] md:text-[20px] text-gray-400 font-medium cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/sanjeev-singh-242122253"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="text-[15px] md:text-[20px] text-gray-400 font-medium cursor-pointer" />
        </a>
        <a
          href="https://me.sanjeevks@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillMail className="text-[15px] md:text-[20px] text-gray-400 font-medium cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
