import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div>
            <h4 className="section-title ff-secondary text-start text-primary mb-4">
              {siteConfig?.name}
            </h4>
            <nav className="flex flex-col space-y-2">
              {siteConfig.footer.navItems.map((item, index) => (
                <Link
                  key={`${item.label}-${index}`}
                  href={item.href}
                  className="text-white hover:text-primary transition duration-300 flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="section-title ff-secondary text-start text-primary mb-4">
              Contacto
            </h4>
            <p className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              {`${siteConfig.address.street}, ${siteConfig.address.locality}, ${siteConfig.address.country}`}
            </p>
            <p className="flex items-center mb-2">
              <Phone className="w-5 h-5 mr-2 text-primary" />
              {siteConfig.contact.phone}
            </p>
            <p className="flex items-center mb-4">
              <Mail className="w-5 h-5 mr-2 text-primary" />
              {siteConfig.contact.email}
            </p>
          </div>
          <div>
            <h4 className="section-title ff-secondary text-start text-primary mb-4">
              Horarios
            </h4>
            {siteConfig.schedules.map((item, index) => (
              <div key={`${item.day}-${index}`}>
                <h5 className="text-white font-normal">{item.day}</h5>
                <p className="mb-4">{item.schedule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            &copy;{" "}
            <Link href="#" className="text-primary hover:underline">
              {siteConfig.name}
            </Link>
            , Todos los derechos reservados. Desarrollado por Denise Aguirre
            <br />
          </div>
          <div className="flex space-x-4">
            {siteConfig.footer.links.map((item, index) => (
              <Link
                key={`${item.label}-${index}`}
                href={item.href}
                className="hover:text-primary transition duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
