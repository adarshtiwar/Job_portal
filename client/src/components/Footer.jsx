const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-600 py-6 mt-10">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-gray-800 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800 transition">Terms</a>
            <a href="#" className="hover:text-gray-800 transition">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  