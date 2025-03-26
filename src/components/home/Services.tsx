import { serviceData } from "../../data/mock/serviceData.js";

const Services: React.FC = () => {
  return (
    <div className="py-20" id="services">
      <div className="container mx-auto px-2" data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-sm shadow-lg pt-3 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-primary group"
              data-aos="fade-up"
            >
              <div className="p-6">
                <div className="text-primary mb-4 transition-colors duration-500 group-hover:text-white">
                  {item.icon}
                </div>
                <h5 className="text-xl font-extrabold mb-2 transition-colors duration-500 group-hover:text-white">
                  {item.title}
                </h5>
                <p className="transition-colors duration-500 group-hover:text-white">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
