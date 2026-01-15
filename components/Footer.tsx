export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center text-gray-500 space-y-2">
        <p className="text-xs">
          <a href="mailto:hello@sereniti.my" className="text-purple-600 hover:text-purple-700">
            hello@sereniti.my
          </a>
        </p>
        <p className="text-xs">&copy; {new Date().getFullYear()} SERENITILABS SDN. BHD. All rights reserved.</p>
        <p className="text-xs text-gray-400">Registration No: 202601000377 (1662475-P)</p>
      </div>
    </footer>
  );
}
