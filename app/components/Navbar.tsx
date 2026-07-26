import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Brand Logo */}
                <Link href="/" className="text-2xl font-extrabold tracking-tight text-gray-900">
                    OneCliq<span className="text-blue-600">.</span>
                </Link>

                {/* Navigation Links*/}
                <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600 text-sm">
                    <Link href="#features" className="hover:text-gray-900 transition-colors">
                        Features
                    </Link>
                    <Link href="#pricing" className="hover:text-gray-900 transition-colors">Pricing
                    </Link>
                    <Link href="#about" className="hover:text-gray-900 transition-colors"> About
                    </Link>
                </nav>

                {/* Call To Action Button */}
                <div className="flex items-center gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-smemibold text-sm px-4 py-2 rounded-lg transition-colors shadow-sm">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
}