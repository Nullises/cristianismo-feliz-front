import { Typography } from "@material-tailwind/react";
const Footer = ({}) => {
  return (
    <footer className="flex flex-col justify-center border-t border-blue-gray-50 py-6">
      <Typography color="blue-gray" className="font-normal text-center mb-2">
        &copy; 2023 Hecho con <i className="fas fa-heart" /> para la Gloria de
        Nuestro Señor Jesucristo
      </Typography>
      <Typography
        color="blue-gray"
        className="text-xs font-normal text-center mt-2"
      >
        A menos que se indique lo contrario, las citas bíblicas hacen referencia
        a la Reina Valera 1960 (RV-1960).
      </Typography>
      <Typography color="blue-gray" className="text-xs font-normal text-center">
        A menos que se indique lo contrario, todas las fotos son tomadas de
        Unsplash y no están sujetas a Copyright
      </Typography>
    </footer>
  );
};

export default Footer;
