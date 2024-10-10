import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300 py-10 mt-10">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">About Lore Olympus</h2>
          <p className="leading-relaxed text-gray-400">
            Lore Olympus, created by Rachel Smythe, is a modern webcomic based on the myth of Hades and Persephone. With its unique art style and contemporary take on ancient myths, it has captivated a worldwide audience on Webtoon.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="leading-relaxed text-gray-400">
            Have questions or feedback? Get in touch:
          </p>
          <p className="mt-3">
            <strong>Email:</strong>{" "}
            <a href="mailto:support@loreolympus.com" className="text-indigo-400 hover:underline">
              support@loreolympus.com
            </a>
          </p>
          <p className="mt-1">
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890" className="text-indigo-400 hover:underline">
              +1 234 567 890
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-10 pt-5 text-center text-gray-500">
        <p>&copy; 2024 Lore Olympus. All rights reserved.</p>
        <p>
          Website by{" "}
          <a
            href="https://yourportfolio.com"
            className="text-indigo-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arnav Kumar
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
