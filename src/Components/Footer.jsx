import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-400 pt-20 px-6 border-t border-white overflow-hidden">
      {/*Maroon Bottom-Left Glow */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-maroon-400 via-red-500 to-black-900 rounded-full opacity-20 blur-[160px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start md:justify-between gap-10">
        
 
        <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-auto">
          <img src={logo} alt="WicketWise Logo" className="w-[300px] h-[300px] object-contain rounded-full" />
        </div>

        
        <div className="flex-grow w-full">
         
          <h2 className="text-white text-4xl font-bold mb-6 text-center">Wicket Wise</h2>

          <div className="flex flex-col md:flex-row md:justify-end gap-8 md:gap-16 text-center text-lg md:text-left">

            <div>
              <h4 className="text-white font-semibold mb-2">About</h4>
              <ul className="space-y-1">
                <li>Our Vision</li>
                <li>Meet the Team</li>
                <li>Press & Media</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-2">Support</h4>
              <ul className="space-y-1">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Report a Bug</li>
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            
            <div>
              <h4 className="text-white font-semibold mb-2">Professionals</h4>
              <ul className="space-y-1">
                <li>Coach Dashboard</li>
                <li>Analyst Tools</li>
                <li>Upload Guide</li>
                <li>CSV Format Help</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <div className="relative z-10 text-center text-sm text-gray-500 mt-10 pb-6">
        © 2025 Wicket Wise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
