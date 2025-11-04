import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-screen-xl mx-auto px-4 w-full py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Kolom 1 */}
          <div>
            <Link href="/" className="mb-10 block">
              <Image
                src="/logo.png"
                width={128}
                height={49}
                alt="logo"
                className="mb-4"
              />
            </Link>
            <p>Ayo check-in, nikmati pengalaman terbaik bersama kami 💫</p>
          </div>

          {/* Kolom 2 */}
          <div className="flex gap-20">
            <div className="flex-1 md:flex-none">
              <h4 className="mb-6 text-xl font-semibold text-white">Links</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/room" className="hover:text-white">
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 md:flex-none">
              <h4 className="mb-6 text-xl font-semibold text-white">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="hover:text-white">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Payment Method
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Kolom 3 */}
          <div>
            <h4 className="mb-6 text-xl font-semibold text-white">Newsletter</h4>
            <p>
              Dapatkan update dan promo menarik langsung ke email kamu ✨
            </p>
            <form action="" className="mt-5">
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 rounded-sm bg-white text-gray-800"
                  placeholder="Email kamu..."
                />
              </div>
              <button
                type="submit"
                className="bg-orange-400 p-3 font-bold text-white w-full rounded-sm hover:bg-orange-500 transition-colors"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-700 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} | Muhamad Yusril | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
