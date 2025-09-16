"use client";
import { useState } from "react";
import { ChevronDown, Menu, X, GraduationCap } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4">
  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center">
    <Image
      src="/Untitled_design__2_-removebg-preview.webp"
      alt="Shree Swaminarayan Academy"
      width={96}   // 96px for w-24
      height={96}
      className="rounded-full object-contain"
      priority
    />
  </div>
            {/* <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">Shree Swaminarayan Academy</h1>
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Home
            </a>
            
            {/* About Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors">
                About <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full min-w-[240px] bg-white shadow-lg rounded-b-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2 text-sm">
                  <li>
                    <a href="/our-inspiration" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Our Inspiration
                    </a>
                  </li>
                  <li>
                    <a href="/the-sri-sri-edge" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      The Sri Sri Edge
                    </a>
                  </li>
                  <li>
                    <a href="/message-from-the-principal" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Message from the Principal
                    </a>
                  </li>
                  <li>
                    <a href="/advisory-council" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Advisory Council
                    </a>
                  </li>
                  <li>
                    <a href="/management-body" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Management Body
                    </a>
                  </li>
                  <li>
                    <a href="/our-team" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Our Team
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors">
                Academics <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full min-w-[240px] bg-white shadow-lg rounded-b-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2 text-sm">
                  <li>
                    <a href="/curriculum" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                       Curriculum
                    </a>
                  </li>
                  <li>
                    <a href="/house-system" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      House System
                    </a>
                  </li>
                  <li>
                    <a href="/initiatives" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Initiatives
                    </a>
                  </li>
                  <li>
                    <a href="/school-calendar" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      School Calendar
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>

             <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors">
                Admission <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full min-w-[240px] bg-white shadow-lg rounded-b-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2 text-sm">
                  <li>
                    <a href="/admission-procedure" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Admission Procedure
                    </a>
                  </li>
                  <li>
                      <a
                        href="/prospectus-2025.pdf"
                        target="_blank"
                        rel="noopener"
                        className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                      >
                        E-Brochure
                      </a>
                  </li>

                  <li>
                    <a href="/book-a-school-tour" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Book a School Tour
                    </a>
                  </li> 
                </ul>
              </div>
            </div>

               <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors">
                Facilities <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full min-w-[240px] bg-white shadow-lg rounded-b-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2 text-sm">
                  <li>
                    <a href="/boarding" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Boarding
                    </a>
                  </li>
                  <li>
                    <a href="/classrooms" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Classrooms
                    </a>
                  </li>
                  <li>
                    <a href="/laboratories" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Laboratories
                    </a>
                  </li> 
                  <li>
                    <a href="/music-and-dance-art-craft" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Music and Dance / Art & Craft
                    </a>
                  </li> 
                   <li>
                    <a href="/sports-facility" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Sports Facility
                    </a>
                  </li>
                   <li>
                    <a href="/safety-and-security" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Safety and Security
                    </a>
                  </li> 
                   <li>
                    <a href="/hostel" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Hostel
                    </a>
                  </li> 
                   <li>
                    <a href="/food-menu" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Food Menu
                    </a>
                  </li> 
                   <li>
                    <a href="/transport" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Transport
                    </a>
                  </li> 
                   <li>
                    <a href="/dmit-career-counselling" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                     DMIT & Career Counselling
                    </a>
                  </li> 
                </ul>
              </div>
            </div>

              <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors">
                Programs <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full min-w-[240px] bg-white shadow-lg rounded-b-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2 text-sm">
                  <li>
                    <a href="/little-officer" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Little Office
                    </a>
                  </li>
                  <li>
                    <a href="/skills-safari" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Skills Safari
                    </a>
                  </li>
                  <li>
                    <a href="/retro-streets" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Retro Streets
                    </a>
                  </li> 
                  <li>
                    <a href="/tough-kids" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Tough Kids
                    </a>
                  </li> 
                   <li>
                    <a href="/restorative-justice" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Restoractive Justice
                    </a>
                  </li>
                   <li>
                    <a href="/discovery-trails" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Discovery Trails
                    </a>
                  </li> 
                   <li>
                    <a href="/compass-trails" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Compass Trails
                    </a>
                  </li> 
                   <li>
                    <a href="/connect-ed" className="block px-6 py-3 hover:bg-gray-50 transition-colors">
                      Connect-ed
                    </a>
                  </li> 
                </ul>
              </div>
            </div>
            {/* Other Dropdowns */}
                       
           
            
            <a href="https://srisriacademy.edunexttechnologies.com/Index" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors whitespace-nowrap">
              ERP Login
            </a>
            
            <a href="/mandatory-public-disclosure" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors whitespace-nowrap text-sm">
              Mandatory Public Disclosure
            </a>
            
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
            onClick={() => window.location.href = '/contact'}>
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          {/* <button
            onClick={toggleMobileMenu}
            className="xl:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button> */}
         <button
  onClick={toggleMobileMenu}
  className="xl:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
  aria-label="Toggle menu"
>
  {isMobileMenuOpen ? (
    // Show this SVG when the menu is open
    <svg
      aria-hidden="true"
      tabIndex="0"
      className="w-7 h-7 text-indigo-900"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"></path>
    </svg>
  ) : (
    // Show this SVG when the menu is closed
    <svg
      aria-hidden="true"
      className="w-7 h-7 text-indigo-900"
      viewBox="0 0 576 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
    </svg>
  )}
</button>


        </div>

      {/* Mobile Navigation */}
{isMobileMenuOpen && (
  <div className="xl:hidden border-t border-gray-200 bg-white">
    <nav className="py-4 space-y-2">
      <a
        href="/"
        className="block px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
      >
        Home
      </a>

      {/* Mobile About Dropdown */}
      <div>
        <button
          onClick={() => toggleDropdown('about')}
          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
        >
          About
          <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
        </button>
        {openDropdown === 'about' && (
          <div className="mt-2 ml-4 space-y-1 border-l-2 border-gray-100 pl-4">
            <a href="/our-inspiration" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Our Inspiration
            </a>
            <a href="/the-sri-sri-edge" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              The Sri Sri Edge
            </a>
            <a href="/message-from-the-principal" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Message from the Principal
            </a>
            <a href="/advisory-council" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Advisory Council
            </a>
            <a href="/management-body" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Management Body
            </a>
            <a href="/our-team" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Our Team
            </a>
          </div>
        )}
      </div>

      {/* Mobile Academics Dropdown */}
      <div>
        <button
          onClick={() => toggleDropdown('academics')}
          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
        >
          Academics
          <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'academics' ? 'rotate-180' : ''}`} />
        </button>
        {openDropdown === 'academics' && (
          <div className="mt-2 ml-4 space-y-1 border-l-2 border-gray-100 pl-4">
            <a href="/curriculum" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Curriculum
            </a>
            <a href="/house-system" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              House System
            </a>
            <a href="/initiatives" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Initiatives
            </a>
            <a href="/school-calendar" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              School Calendar
            </a>
          </div>
        )}
      </div>

      {/* Mobile Admission Dropdown */}
      <div>
        <button
          onClick={() => toggleDropdown('admission')}
          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
        >
          Admission
          <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'admission' ? 'rotate-180' : ''}`} />
        </button>
        {openDropdown === 'admission' && (
          <div className="mt-2 ml-4 space-y-1 border-l-2 border-gray-100 pl-4">
            <a href="/admission-procedure" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Admission Procedure
            </a>
           <a
                        href="/prospectus-2025.pdf"
                        target="_blank"
                        rel="noopener"
                        className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                      >
              E-Brochure
            </a>
            <a href="/book-a-school-tour" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Book a School Tour
            </a>
          </div>
        )}
      </div>

      {/* Mobile Facilities Dropdown */}
      <div>
        <button
          onClick={() => toggleDropdown('facilities')}
          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
        >
          Facilities
          <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'facilities' ? 'rotate-180' : ''}`} />
        </button>
        {openDropdown === 'facilities' && (
          <div className="mt-2 ml-4 space-y-1 border-l-2 border-gray-100 pl-4">
            <a href="/boarding" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Boarding
            </a>
            <a href="/classrooms" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Classrooms
            </a>
            <a href="/laboratories" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Laboratories
            </a>
            <a href="/music-and-dance-art-craft" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Music and Dance / Art & Craft
            </a>
            <a href="/sports-facility" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Sports Facility
            </a>
            <a href="/safety-and-security" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Safety and Security
            </a>
            <a href="/hostel" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Hostel
            </a>
            <a href="/food-menu" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Food Menu
            </a>
            <a href="/transport" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Transport
            </a>
            <a href="/dmit-career-counselling" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              DMIT & Career Counselling
            </a>
          </div>
        )}
      </div>

      {/* Mobile Programs Dropdown */}
      <div>
        <button
          onClick={() => toggleDropdown('programs')}
          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
        >
          Programs
          <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'programs' ? 'rotate-180' : ''}`} />
        </button>
        {openDropdown === 'programs' && (
          <div className="mt-2 ml-4 space-y-1 border-l-2 border-gray-100 pl-4">
            <a href="/little-officer" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Little Office
            </a>
            <a href="/skills-safari" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Skills Safari
            </a>
            <a href="/retro-streets" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Retro Streets
            </a>
            <a href="/tough-kids" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Tough Kids
            </a>
            <a href="/restorative-justice" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Restoractive Justice
            </a>
            <a href="/discovery-trails" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Discovery Trails
            </a>
            <a href="/compass-trails" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Compass Trails
            </a>
            <a href="/connect-ed" className="block py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Connect-ed
            </a>
          </div>
        )}
      </div>

      <a
        href="https://srisriacademy.edunexttechnologies.com/Index" target="_blank"
        className="block px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
      >
        ERP Login
      </a>

      <a
        href="/mandatory-public-disclosure"
        className="block px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
      >
        Mandatory Public Disclosure
      </a>

      {/* Mobile Contact Button */}
      <div className="pt-4 px-4">
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-3 rounded-md font-medium transition-colors"
        onClick={ () => window.location.href = '/contact'}>
          Contact Us
        </button>
      </div>
    </nav>
  </div>
)}

      </div>
    </header>
  );
}