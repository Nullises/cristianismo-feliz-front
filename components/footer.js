import { Typography } from "@material-tailwind/react";
const Footer = ({}) => {
  return (
    <footer className="flex justify-center border-t border-blue-gray-50 py-6">
      <Typography color="blue-gray" className="font-normal text-center">
        &copy; 2023 Hecho con <i className="fas fa-heart" /> para la Gloria de
        Nuestro Señor Jesucristo
      </Typography>
    </footer>
  );
};

export default Footer;
