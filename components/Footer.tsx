import { Mail, Phone, MapPin } from "lucide-react";

// Dummy data for news
const news = [
  {
    image: "/advantage-of-boarding-school-for-international-students-1024x555-1.webp",
    title: "The Advantages of Boarding School for International Students",
    href: "#"
  },
  {
    image: "/top-5-boarding-school-in-west-bengal-1.webp",
    title: "Top 5 Boarding School In West Bengal",
    href: "#"
  }
];

const socialIcons = [
  { icon: "facebook", href: "https://www.facebook.com/srisriacademysilliguri/", color: "bg-[#442fc3]" },
  { icon: "instagram", href: "https://www.instagram.com/srisriacademysiliguri/", color: "bg-[#442fc3]" },
  // { icon: "x", href: "#", color: "bg-[#442fc3]" },
  { icon: "linkedin", href: "https://www.linkedin.com/in/srisriacademysiliguri/", color: "bg-[#442fc3]" }
];

export function Footer() {
  return (
    <footer className="bg-[#111c3b] pt-10 pb-6 text-white relative text-justify">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        {/* Top Row */}
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
  {/* Inline: Logo, Playstore, Applestore, Social Icons */}
   <div className="flex-1 flex justify-start items-center">
    <img
      src="/Logo.webp"
      alt="Sri Sri Academy Logo"
      className="w-32 md:w-36"
    />
  </div>
  {/* App Store Buttons: Center */}
  <div className="flex-1 flex justify-center items-center gap-6">
    <a href="https://play.google.com/store/apps/details?id=com.edunext.tsmv10&hl=en&gl=US" aria-label="Google Play" className="transition-transform hover:scale-105">
      <img src="/Google_Play_Store.png" alt="Google Play" className="h-10 md:h-12" />
    </a>
    <a href="https://apps.apple.com/in/app/edunext-parent/id1516241231" aria-label="App Store" className="transition-transform hover:scale-105">
      <img src="/images-removebg-preview-1.png" alt="App Store" className="h-10 md:h-12" />
    </a>
  </div>
  <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-start">
    
    {/* Social Icons */}
    <div className="flex items-center gap-2 md:gap-3 ml-2">
      {socialIcons.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${item.color} hover:bg-[#2e3673] transition-all duration-300 transform hover:scale-110`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.icon}
        >
         {item.icon === "facebook" && (
                    <svg width="16" height="16" fill="white" viewBox="0 0 24 24" className="md:w-5 md:h-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v9h4v-9h3.64l.36-4H14V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  )}
                  {item.icon === "instagram" && (
                    <svg width="16" height="16" fill="white" viewBox="0 0 24 24" className="md:w-5 md:h-5">
                      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm8 3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1 .001 6.001A3 3 0 0 1 12 9z"/>
                    </svg>
                  )}
                  {item.icon === "x" && (
                    <svg width="16" height="16" fill="white" viewBox="0 0 100 100" className="md:w-5 md:h-5">
                      <path d="M37,43L29,24h8l5,13l5-13h8L63,43l11,27h-8l-7-15l-7,15h-8L37,43z"/>
                    </svg>
                  )}
                  {item.icon === "linkedin" && (
                    <svg width="16" height="16" fill="white" viewBox="0 0 24 24" className="md:w-5 md:h-5">
                      <path d="M22 22h-4v-7c0-1.61-.37-2.37-1.35-2.37-1.24 0-1.65.83-1.65 2.37v7h-4V9h4v1.25c.47-.7 1.38-1.25 2.79-1.25 2.09 0 3.21 1.3 3.21 4.07v8zM7 22h-4V9h4v13zm-2-15A2 2 0 1 1 7 5a2 2 0 0 1-2 2z"/>
                    </svg>
                  )}
                
        </a>
      ))}
    </div>
  </div>
</div>

        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 pt-2">
          
          {/* About Us */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-3 text-[#8e85ff]">About Us</h4>
            <p className="text-white/90 mb-5 text-sm max-w-xs">
              A good system of education must instill self-esteem and creativity. The methodology of education needs to change to eliminate a lot of unwanted information.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" /> 
                <span>+91 9733566684, +91 9733566685</span>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" /> 
                <span>admission@srisriacademy.in</span>
              </span>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> 
                <span>Dhukuria, P.O. New Chumta, Dagapur, Siliguri-734009, West Bengal.</span>
              </span>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> 
                <span>Ram Niwash Group, Bhagat Singh Building, 2nd mile, Sevoke Road, Opposite Louis Philipe, Siliguri.</span>
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#8e85ff]">Explore</h4>
            <ul className="space-y-2 text-white/90 text-sm">
              <li><a href="/admission-procedure" className="hover:text-[#8e85ff] transition-colors">Admission Procedure</a></li>
              <li><a href="/book-a-school-tour" className="hover:text-[#8e85ff] transition-colors">Book a School Tour</a></li>
              <li><a href="/our-inspiration" className="hover:text-[#8e85ff] transition-colors">Our Inspiration</a></li>
              <li><a href="/the-sri-sri-edge" className="hover:text-[#8e85ff] transition-colors">The Sri Sri Edge</a></li>
              <li><a href="/school-calendar" className="hover:text-[#8e85ff] transition-colors">School Calendar 2026-27</a></li>
              <li><a href="/contact" className="hover:text-[#8e85ff] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#8e85ff]">Quick Links</h4>
            <ul className="space-y-2 text-white/90 text-sm">
              <li><a href="/blog" className="hover:text-[#8e85ff] transition-colors">Blogs</a></li>
              <li><a href="/https://srisriacademy.edunexttechnologies.com/Index" className="hover:text-[#8e85ff] transition-colors">ERP Login</a></li>
              <li><a href="/mandatory-public-disclosure" className="hover:text-[#8e85ff] transition-colors">Mandatory Public Disclosure</a></li>
            </ul>
          </div>

          {/* Recent news */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#8e85ff]">Recent news</h4>
            <div className="flex flex-col gap-4">
              {news.map((item, idx) => (
                <a key={idx} href={item.href} className="flex items-start gap-3 group">
                  <img src={item.image} alt={item.title} className="w-14 h-12 md:w-16 md:h-12 object-cover rounded flex-shrink-0" />
                  <span className="text-white group-hover:text-[#8e85ff] text-xs md:text-sm leading-tight transition-colors">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-[#202c52] pt-6 text-center text-sm text-white/70">
          © 2025 Sri Sri Academy. All rights reserved.
        </div>
      </div>
      
      {/* Floating action buttons (mobile only) */}
      {/* <div className="fixed bottom-4 right-4 md:hidden flex flex-col gap-3 z-10">
        <a 
          href="tel:+919733566684" 
          className="w-12 h-12 rounded-full bg-[#442fc3] flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>
        <a 
          href="mailto:admission@srisriacademy.in" 
          className="w-12 h-12 rounded-full bg-[#8e85ff] flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          aria-label="Email us"
        >
          <Mail className="w-5 h-5 text-white" />
        </a>
      </div> */}
    </footer>
  );
}