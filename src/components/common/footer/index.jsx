import React from "react";

const FooterSection = () => {
  return (
    <footer className="w-full bg-[#FBF4EA] text-black font-['Saans-TRIAL',sans-serif] px-6 lg:px-16 pt-16 pb-8 relative overflow-hidden">
      {/* Outer rounded container border matching the design */}
      <div className="max-w-[1400px] mx-auto border border-[#ED1E29] rounded-[32px] p-8 lg:p-16 relative">
        
        {/* Top Newsletter / CTA Section */}
        <div className="max-w-md mx-auto text-center mb-20">
          <h2 className="text-[28px] lg:text-[40px] font-bold text-[#191919] mb-3 tracking-tight">
            Step in to our World
          </h2>
          <p className="text-[14px] lg:text-[15px] text-[#333333] mb-8 leading-relaxed">
            Sign up today and get 15% off your first full-price purchase and be the first to know about exclusive launches, news & offers.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
            <input
              type="tel"
              placeholder="+1 xxx xxx xxxx"
              className="w-full bg-transparent border border-[#707070] rounded-lg px-4 py-3 text-[14px] text-[#191919] placeholder-[#707070] focus:outline-none"
            />
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full bg-transparent border border-[#707070] rounded-lg px-4 py-3 text-[14px] text-[#191919] placeholder-[#707070] focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#191919] text-white font-medium py-3 rounded-lg text-[15px] hover:bg-black transition-colors"
            >
              Signup
            </button>
          </form>
          <p className="text-[12px] text-[#666666] mt-3">
            I confirm that I have read and understand the privacy policy
          </p>
        </div>

        {/* Middle Footer Links & Illustration Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 items-start mb-16 border-t border-[#E5E0DA] pt-16">
          
          {/* Reach Out Column */}
          <div className="lg:col-span-1">
            <h4 className="text-[12px] font-bold tracking-wider text-[#ED1E29] uppercase mb-4">
              REACH OUT
            </h4>
            <p className="text-[14px] font-bold text-[#191919] mb-3">
              + 44 (0)20 30020224
            </p>
            <p className="text-[14px] text-[#191919] mb-3">
              info@customfoodpackaging.com
            </p>
            <p className="text-[14px] text-[#191919] leading-relaxed mb-6">
              1631 Cottonwood School Rd<br />
              Rosenberg TX 77471 United States
            </p>

            {/* Social Icons (Inline SVGs) */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-[#191919] text-white flex items-center justify-center hover:opacity-80">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-[#191919] text-white flex items-center justify-center hover:opacity-80">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              {/* Pinterest */}
              <a href="#" aria-label="Pinterest" className="w-8 h-8 rounded-full bg-[#191919] text-white flex items-center justify-center hover:opacity-80">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.331 1.363-.053.225-.172.273-.399.165-1.493-.695-2.433-2.878-2.433-4.626 0-3.767 2.738-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373l-.746 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.522.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-[#191919] text-white flex items-center justify-center hover:opacity-80">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
            </div>
          </div>

          {/* Center Illustration Column */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center relative py-6">
            <div className="relative max-w-[280px] text-center">
              {/* Speech Bubble */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white border border-black rounded-full px-4 py-1 text-[12px] font-bold tracking-wide shadow-sm whitespace-nowrap">
                Think outside the box
              </div>
              {/* Placeholder for character on croissant/packaging shape */}
              <div className="w-48 h-36 bg-[#EFE9DF] rounded-2xl mx-auto flex items-center justify-center text-xs text-[#707070] border border-dashed border-[#707070]">
                [Illustration Asset]
              </div>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-2 grid grid-cols-3 gap-6">
            {/* Account */}
            <div>
              <h4 className="text-[12px] font-bold tracking-wider text-[#ED1E29] uppercase mb-4">
                ACCOUNT
              </h4>
              <ul className="flex flex-col gap-2.5 text-[14px] text-[#191919]">
                <li><a href="#" className="hover:underline">My Order</a></li>
                <li><a href="#" className="hover:underline">Track Order</a></li>
                <li><a href="#" className="hover:underline">My Profile</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[12px] font-bold tracking-wider text-[#ED1E29] uppercase mb-4">
                COMPANY
              </h4>
              <ul className="flex flex-col gap-2.5 text-[14px] text-[#191919]">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-[12px] font-bold tracking-wider text-[#ED1E29] uppercase mb-4">
                PRODUCTS
              </h4>
              <ul className="flex flex-col gap-2.5 text-[14px] text-[#191919]">
                <li><a href="#" className="hover:underline">Food Papers</a></li>
                <li><a href="#" className="hover:underline">Tissue Papers</a></li>
                <li><a href="#" className="hover:underline">Cups</a></li>
                <li><a href="#" className="hover:underline">Coffee Bags</a></li>
                <li><a href="#" className="hover:underline">Boxes</a></li>
                <li><a href="#" className="hover:underline">Bowls</a></li>
                <li><a href="#" className="hover:underline">Mailers</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E5E0DA] pt-6 flex flex-col md:flex-row items-center justify-between text-[13px] text-[#191919]">
          <div className="mb-4 md:mb-0 flex items-center gap-1 font-medium">
            <span>COUNTRY/REGION: PAKISTAN/PKR</span>
            <span className="text-xs">↗</span>
          </div>
          <div className="mb-4 md:mb-0 text-center font-medium">
            NYC/BOS 13:22:20
          </div>
          <div className="text-[#191919]">
            © CustomFoodPackaging 2026
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;