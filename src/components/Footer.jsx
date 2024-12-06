import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer  ()  {
  return (
    <footer className="bg-[#A36589] text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Advertising Agency</h3>
            <p className="text-sm">Your partner in effective advertising solutions.</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Advertising Agency. All rights reserved.</p>
        </div>
        <div className="mt-2 text-center">
          <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;