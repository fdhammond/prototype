export default function Nav() {
  return (
    <nav className="flex flex-col ml-8 md:flex-row md:items-start justify-between p-4">
      <div className="flex items-center">
        <img src="your-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="text-lg font-semibold">Your Logo</span>
      </div>

      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <li className="mb-2 md:mb-0">Home</li>
        <li className="mb-2 md:mb-0">About</li>
        <li className="mb-2 md:mb-0">Service</li>
        <li className="mb-2 md:mb-0">Pages</li>
        <li className="mb-2 md:mb-0">Contact</li>
        <li className="mb-2 md:mb-0">Twitter</li>
        <li className="mb-2 md:mb-0">Facebook</li>
        <li className="mb-2 md:mb-0">Mail</li>
      </ul>
    </nav>
  );
}
