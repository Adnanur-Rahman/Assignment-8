import Container from "./Container";
import {
  FaGooglePlay,
  FaApple,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] text-gray-400">
      <Container>
        <div className="py-12 border-b border-gray-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-white mb-3">
              HERO.IO
              </h2>

              <p className="text-sm leading-6">
                Discover thousands of amazing apps, games, and useful tools.
                Download your favorite applications quickly, safely, and
                effortlessly from one trusted platform.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-xl hover:bg-gray-200 transition cursor-pointer">
                <FaGooglePlay className="text-2xl" />

                <div className="text-left leading-tight">
                  <span className="block text-[10px] uppercase">
                    Get it on
                  </span>
                  <span className="font-semibold">
                    Google Play
                  </span>
                </div>
              </button>

              <button className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-xl hover:bg-gray-200 transition cursor-pointer">
                <FaApple className="text-2xl" />

                <div className="text-left leading-tight">
                  <span className="block text-[10px] uppercase">
                    Download on the
                  </span>
                  <span className="font-semibold">
                    App Store
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">
              Platform
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">
                All Apps
              </li>
              <li className="hover:text-white cursor-pointer">
                Trending Apps
              </li>
              <li className="hover:text-white cursor-pointer">
                Popular Apps
              </li>
              <li className="hover:text-white cursor-pointer">
                New Releases
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Categories
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">
                Education
              </li>
              <li className="hover:text-white cursor-pointer">
                Productivity
              </li>
              <li className="hover:text-white cursor-pointer">
                Entertainment
              </li>
              <li className="hover:text-white cursor-pointer">
                Games
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer">
                Our Mission
              </li>
              <li className="hover:text-white cursor-pointer">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Support
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">
                Report an Issue
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-3">
              <span className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                <FaXTwitter />
              </span>

              <span className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                <FaFacebookF />
              </span>

              <span className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                <FaLinkedinIn />
              </span>

              <span className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                <FaGithub />
              </span>
            </div>

            <p className="text-sm mt-5">
              support@appdownloader.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p>
            © 2025 App Downloader. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span className="hover:text-white cursor-pointer">
              Privacy
            </span>

            <span className="hover:text-white cursor-pointer">
              Terms
            </span>

            <span className="hover:text-white cursor-pointer">
              Cookies
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;