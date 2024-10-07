
import PropTypes from 'prop-types';


const GlassCard = ({ image, subheading, heading, detail,buttonIcon,buttonIconSize }) => {
  return (
    <div className=" cursor-pointer hover:from-[#C77DFF]/10   flex flex-col items-center gap-2 md:gap-6 md:flex-row bg-gradient-to-l from-[#C77DFF]/0 to-[#7B2CBF]/10  backdrop-blur-md rounded-xl shadow-lg p-6 md:p-8  m-4   border border-white border-opacity-30 ">
      {/* Image Section */}
      <div className="md:w-1/3 w-full sm:w-2/4 flex-shrink-0 mb-4 md:mb-0 ">
        <img
          src={image}
          alt="Card Image"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center md:w-2/3 w-full space-y-1">
        <p className="text-gray-200 text-sm md:text-base font-medium text-center md:text-left">{subheading}</p>
        <h2 className="text-[#C77DFF] text-2xl md:text-6xl font-bold  text-center md:text-left">{heading}</h2>
        <p className="text-gray-300 text-sm text-center md:text-left">{detail}</p>
      </div>

      {/* Button on Right */}
      <div className="md:absolute mt-4 md:mt-0  md:right-8 md:bottom-4">
        <button className="  bg-gradient-to-l from-cyan-500/0 to-blue-500/10 p-2 md:px-4 md:py-2 rounded-full md:hover:bg-[#C77DFF] md:drop-shadow-3xl transition">
          <img src={buttonIcon}   style={{ width: buttonIconSize, height:buttonIconSize }}></img>
         
        </button>
      </div>
    </div>
  );
};


GlassCard.propTypes = {
    subheading: PropTypes.string,
    heading: PropTypes.string,
    buttonIcon: PropTypes.string,
    detail: PropTypes.string,
    buttonText: PropTypes.string,
    hoverGradient: PropTypes.string,
    className: PropTypes.string,
    image: PropTypes.string,            // Prop for the image URL
    buttonIconSize: PropTypes.string,        // Size of the image
    onClick: PropTypes.func,
  };

export default GlassCard;
