import { Typography } from "@material-tailwind/react";
const Footer = ({}) => {
  return (
    <footer className="flex justify-center border-t border-blue-gray-50 py-6">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Hecho con <i className="fas fa-heart" /> para la Gloria de
        Nuestro Señor Jesucristo por
      </Typography>
      <Typography
        as="a"
        href="#"
        color="blue-gray"
        className="ml-1 font-normal underline transition-colors hover:text-blue-500 focus:text-blue-500"
      >
        {" "}
        Nullises
      </Typography>
    </footer>
  );
};

export default Footer;
