import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200"></div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social as */}

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            &copy; Cruip.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
