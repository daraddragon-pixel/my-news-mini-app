import React from 'react';
import { Search, Facebook, Twitter, Instagram, Youtube, Rss, Calendar, User, ChevronDown, Play } from 'lucide-react';

const ImgPlaceholder = ({ className = '', text = '' }) => (
  <div className={`bg-gray-300 flex items-center justify-center text-gray-500 text-xs overflow-hidden ${className}`}>
    {text ? text : <Play className="opacity-20" />}
  </div>
);

const BlockHeader = ({ title, variant = 'text' }: { title: string, variant?: 'text' | 'box' }) => {
  if (variant === 'box') {
    return (
      <div className="border-b-2 border-black mb-4 flex">
        <h2 className="bg-black text-white text-[11px] font-bold uppercase py-1.5 px-3 tracking-wider">
          {title}
        </h2>
      </div>
    );
  }
  return (
    <div className="border-b-[3px] border-black mb-4">
      <h2 className="text-lg font-bold uppercase text-black pb-1 tracking-tight">
        {title}
      </h2>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 font-sans">
      <div className="max-w-[1200px] mx-auto bg-white min-h-screen shadow-2xl flex flex-col">
        
        {/* Top Bar */}
        <div className="bg-black text-gray-400 text-[10px] sm:text-[11px] py-2 px-4 sm:px-6 flex justify-between items-center uppercase font-semibold">
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Sample Sites</a>
            <a href="#" className="hover:text-white transition-colors">Joomla.org</a>
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <Rss size={13} className="hover:text-white cursor-pointer transition-colors" />
            <Facebook size={13} className="hover:text-white cursor-pointer transition-colors" />
            <Twitter size={13} className="hover:text-white cursor-pointer transition-colors" />
            <Instagram size={13} className="hover:text-white cursor-pointer transition-colors" />
            <Youtube size={13} className="hover:text-white cursor-pointer transition-colors" />
          </div>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Log in</a>
            <a href="#" className="hover:text-white transition-colors">Register</a>
          </div>
        </div>

        {/* Breaking News & Search */}
        <div className="bg-gray-100 border-b border-gray-200 flex justify-between items-center py-1.5 px-2 sm:px-6">
          <div className="flex items-center gap-3 overflow-hidden flex-1">
            <span className="bg-red-600 text-white font-bold px-3 py-1 uppercase whitespace-nowrap text-[10px] tracking-wider">
              Breaking News
            </span>
            <span className="text-gray-700 text-xs truncate hover:text-red-600 cursor-pointer transition-colors">
              How Tom Brady Found Peace: Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
            </span>
          </div>
          <div className="hidden lg:flex items-center bg-white border border-gray-300 ml-4 overflow-hidden h-7">
            <input type="text" placeholder="Search..." className="px-3 py-1 outline-none text-xs w-48 text-gray-700" />
            <button className="bg-red-600 hover:bg-red-700 transition-colors text-white h-full px-2 flex items-center justify-center">
              <Search size={14} />
            </button>
          </div>
        </div>

        {/* Header (Logo & Ad) */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 sm:px-6 bg-white gap-6">
          <div className="shrink-0 text-center md:text-left cursor-pointer">
            <h1 className="text-5xl sm:text-6xl font-black tracking-tighter uppercase font-serif flex items-center justify-center md:justify-start">
              <span>ERA</span><span className="text-red-600">NEWS</span>
            </h1>
            <p className="text-red-600 text-[11px] font-bold tracking-widest uppercase mt-1">News and Magazine Template</p>
          </div>
          <div className="w-full md:w-auto overflow-hidden">
            <div className="bg-black text-white w-full md:w-[450px] h-[80px] flex items-center justify-center relative cursor-pointer group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity">
                <Play size={48} />
              </div>
              <div className="text-center z-10">
                <h3 className="text-2xl font-bold italic tracking-wider flex items-center gap-2">
                  <Play size={20} className="text-white" fill="white" />
                  LEADING<span className="text-gray-400">NEWS</span>
                </h3>
                <p className="text-xs tracking-[0.2em] font-light mt-1">ONLY $ 70.00 / Month</p>
              </div>
              <div className="absolute right-0 top-0 h-full w-28 bg-white flex items-center justify-center text-gray-900 text-sm font-bold text-center p-2 border-l-[6px] border-red-600 leading-tight">
                Your News<br/>Channel
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t-[3px] border-b border-gray-200 bg-white sticky top-0 z-50">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 px-4 sm:px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-800">
            <li className="flex items-center gap-1 text-red-600 cursor-pointer">Home <ChevronDown size={14} /></li>
            <li className="flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer">Site Map <ChevronDown size={14} /></li>
            <li className="flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer">Pages <ChevronDown size={14} /></li>
            <li className="flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer">Blog <ChevronDown size={14} /></li>
            <li className="flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer">Portfolio <ChevronDown size={14} /></li>
            <li className="hover:text-red-600 transition-colors cursor-pointer">Videos</li>
          </ul>
        </div>

        {/* Main Layout Structure */}
        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-8 bg-white">
          
          {/* --- LEFT COLUMN --- */}
          <div className="md:col-span-12 lg:col-span-7 xl:col-span-7 flex flex-col gap-10">
            
            {/* Hero Article */}
            <div className="relative group cursor-pointer">
              <ImgPlaceholder className="w-full aspect-[4/3] sm:aspect-[16/9]" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-24 text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 uppercase leading-tight group-hover:text-red-500 transition-colors">
                  Duis Autem Vel Eum Iriure Dolor
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed max-w-3xl">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                </p>
              </div>
              <div className="flex gap-1 mt-1">
                <ImgPlaceholder className="flex-1 aspect-[3/2]" />
                <ImgPlaceholder className="flex-1 aspect-[3/2]" />
                <ImgPlaceholder className="flex-1 aspect-[3/2]" />
                <ImgPlaceholder className="flex-1 aspect-[3/2]" />
                <div className="flex-1 bg-black text-white text-[10px] sm:text-xs flex items-center justify-center font-bold uppercase cursor-pointer hover:bg-red-600 transition-colors">
                  More
                </div>
              </div>
            </div>

            {/* World News */}
            <div>
              <BlockHeader title="World News" variant="text" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ImgPlaceholder className="w-full aspect-[4/3] mb-4" />
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-3 uppercase font-semibold">
                    <Calendar size={12} /> 11-SEP-2018 <User size={12} className="ml-2" /> BY ADMIN
                  </div>
                  <h3 className="text-[15px] font-bold uppercase mb-3 hover:text-red-600 cursor-pointer leading-snug">
                    Ex-Senator Urges New York Dems
                  </h3>
                  <p className="text-[13px] text-gray-600 mb-4 line-clamp-4 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetuer adipiscing elit sedet diames nonumiere nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                  </p>
                  <a href="#" className="text-xs font-bold uppercase text-gray-800 hover:text-red-600 flex justify-end transition-colors">
                    Read More
                  </a>
                </div>
                
                <div className="flex flex-col justify-between gap-4">
                  {[
                    "Trump Is The First President To Pal It",
                    "Some Candidates Feeling The Midterm",
                    "Papadopoulos On What He Wants For",
                    "GoFundMe Account For Homeless Man"
                  ].map((title, i) => (
                    <div key={i} className={`flex flex-col gap-1.5 pb-4 ${i < 3 ? 'border-b border-gray-100' : ''}`}>
                      <h4 className="text-[13px] font-bold uppercase hover:text-red-600 cursor-pointer leading-snug transition-colors">{title}</h4>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetuer adipiscing elit sedet diames nonummy nibh...
                      </p>
                      <div className="flex items-center gap-2 text-[9px] text-gray-400 uppercase font-semibold mt-1">
                        <Calendar size={10} /> 11-SEP-2018 <User size={10} className="ml-2" /> BY ADMIN
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top News & Featured */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Top News */}
              <div>
                <BlockHeader title="Top News" variant="text" />
                <ImgPlaceholder className="w-full aspect-[4/3] mb-4" />
                <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-2 uppercase font-semibold">
                  <Calendar size={12} /> 11-SEP-2018 <User size={12} className="ml-2" /> BY ADMIN
                </div>
                <h3 className="text-sm font-bold uppercase mb-3 hover:text-red-600 cursor-pointer leading-snug transition-colors">
                  Football Turns To Rugby Tackling
                </h3>
                <p className="text-xs text-gray-600 mb-5 line-clamp-4 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetuer adipiscing elit sedet diames nonummy nibh euismod tincidunt ut laoreet dolor magna aliquam.
                </p>
                
                <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                  {[
                    { title: "Action On Asphalt Roads" },
                    { title: "Dem Opponent Responses" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <ImgPlaceholder className="w-20 h-14 shrink-0" />
                      <div className="flex flex-col justify-center">
                        <h4 className="text-[11px] font-bold uppercase group-hover:text-red-600 transition-colors leading-snug mb-1.5">{item.title}</h4>
                        <div className="flex items-center gap-1.5 text-[9px] text-gray-400 uppercase font-semibold">
                          <Calendar size={10} /> 11-SEP-2018 <User size={10} className="ml-1" /> BY ADMIN
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured */}
              <div>
                <BlockHeader title="Featured" variant="text" />
                <ImgPlaceholder className="w-full aspect-[4/3] mb-4" />
                <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-2 uppercase font-semibold">
                  <Calendar size={12} /> 11-SEP-2018 <User size={12} className="ml-2" /> BY ADMIN
                </div>
                <h3 className="text-sm font-bold uppercase mb-3 hover:text-red-600 cursor-pointer leading-snug transition-colors">
                  Track Florence As It On Carolinas
                </h3>
                <p className="text-xs text-gray-600 mb-5 line-clamp-4 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetuer adipiscing elit sedet diames nonummy nibh euismod tincidunt ut laoreet dolor magna aliquam erat volutpat. Ut wisi.
                </p>
                
                <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                  {[
                    { title: "Liberal Media Rips Kamala" },
                    { title: "Autumn On Fifth Avenue" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <ImgPlaceholder className="w-20 h-14 shrink-0" />
                      <div className="flex flex-col justify-center">
                        <h4 className="text-[11px] font-bold uppercase group-hover:text-red-600 transition-colors leading-snug mb-1.5">{item.title}</h4>
                        <div className="flex items-center gap-1.5 text-[9px] text-gray-400 uppercase font-semibold">
                          <Calendar size={10} /> 11-SEP-2018 <User size={10} className="ml-1" /> BY ADMIN
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fashion & Technology */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <BlockHeader title="Fashion" variant="text" />
                <ImgPlaceholder className="w-full aspect-[4/3]" />
              </div>
              <div>
                <BlockHeader title="Technology" variant="text" />
                <ImgPlaceholder className="w-full aspect-[4/3]" />
              </div>
            </div>

          </div>
          
          {/* --- MIDDLE COLUMN --- */}
          <div className="md:col-span-6 lg:col-span-2 xl:col-span-2 flex flex-col gap-10">
            
            {/* Spotlight */}
            <div>
              <BlockHeader title="Spotlight" variant="box" />
              <div className="flex flex-col gap-5">
                {[
                  { title: "Vote for Your Favorite Artists", imgRatio: "aspect-square" },
                  { title: "How Tom Brady Found Peace", imgRatio: "aspect-[4/3]" },
                  { title: "How Effective Scateboard on Ice", imgRatio: "aspect-[4/3]" },
                  { title: "Cars Abandoned on Icy Roads", imgRatio: "aspect-[4/3]" },
                  { title: "Discover Amazing Underwater", imgRatio: "aspect-[4/3]" }
                ].map((item, i) => (
                  <div key={i} className={`pb-5 ${i < 4 ? 'border-b border-gray-100' : ''}`}>
                    <ImgPlaceholder className={`w-full ${item.imgRatio} mb-3`} />
                    <h4 className="text-sm font-bold text-gray-900 hover:text-red-600 cursor-pointer mb-2 leading-snug transition-colors">{item.title}</h4>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-gray-400 uppercase font-semibold">Sep 11 2018 <span className="mx-1">&bull;</span> By Admin</span>
                    </div>
                    <div className="mt-2">
                       <a href="#" className="text-[10px] font-bold text-black hover:text-red-600 uppercase transition-colors">Read More</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <BlockHeader title="Newsletter" variant="text" />
              <div className="bg-white">
                <p className="text-[13px] text-gray-600 mb-4">Subscribe to our newsletter</p>
                <input type="text" placeholder="Name" className="w-full border border-gray-300 p-2.5 text-xs mb-3 outline-none focus:border-black transition-colors" />
                <input type="email" placeholder="E-mail" className="w-full border border-gray-300 p-2.5 text-xs mb-4 outline-none focus:border-black transition-colors" />
                <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase py-2.5 px-6 transition-colors shadow-sm">
                  Subscribe
                </button>
              </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="md:col-span-6 lg:col-span-3 xl:col-span-3 flex flex-col gap-10">
            
            {/* Celebrity News */}
            <div>
              <BlockHeader title="Celebrity News" variant="box" />
              <div className="flex flex-col gap-4">
                {[
                  "Demi Moore Steals The Show",
                  "Prince William Laugh on Day Date",
                  "Reviewers Confirm This Is the Best"
                ].map((title, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <ImgPlaceholder className="w-[75px] h-[75px] shrink-0" />
                    <div className="flex flex-col justify-center">
                      <h4 className="text-[13px] font-bold text-gray-900 group-hover:text-red-600 mb-1.5 leading-snug transition-colors">{title}</h4>
                      <div className="flex items-center gap-1.5 text-[9px] text-gray-400 uppercase font-semibold mb-1">
                        <Calendar size={10} /> Sep 02 2018 <User size={10} className="ml-1" /> By Admin
                      </div>
                      <p className="text-[11px] text-gray-500 line-clamp-1">Integer euismod ultrices facilisi</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent News */}
            <div>
              <BlockHeader title="Recent News" variant="box" />
              <div className="flex flex-col gap-4">
                {[
                  "TripAdvisor Users Reviews",
                  "Fashion designer Badgley Mischka",
                  "California Blocks Proposal To Split"
                ].map((title, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <ImgPlaceholder className="w-[75px] h-[75px] shrink-0" />
                    <div className="flex flex-col justify-center">
                      <h4 className="text-[13px] font-bold text-gray-900 group-hover:text-red-600 mb-1.5 leading-snug transition-colors">{title}</h4>
                      <div className="flex items-center gap-1.5 text-[9px] text-gray-400 uppercase font-semibold mb-1">
                        <Calendar size={10} /> Sep 02 2018 <User size={10} className="ml-1" /> By Admin
                      </div>
                      <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">Lorem ipsum dolor sit amet consectu</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs Widget */}
            <div className="border border-gray-200">
              <div className="flex text-[10px] font-bold uppercase text-center bg-gray-50 border-b border-gray-200">
                <div className="flex-1 py-3 border-r border-gray-200 cursor-pointer hover:bg-white bg-white text-black border-t-2 border-t-black -mt-[1px]">Lifestyle</div>
                <div className="flex-1 py-3 border-r border-gray-200 cursor-pointer hover:bg-white text-gray-500 hover:text-black transition-colors">Magazine</div>
                <div className="flex-1 py-3 border-r border-gray-200 cursor-pointer hover:bg-white text-gray-500 hover:text-black transition-colors">Travel</div>
                <div className="flex-1 py-3 cursor-pointer hover:bg-white text-gray-500 hover:text-black transition-colors">World</div>
              </div>
              <div className="p-5 flex flex-col gap-5">
                {[
                  "Bringing Cartoons Back Life",
                  "Mountain Top Strings To Climb",
                  "Carbonated Ice Cream In Can"
                ].map((title, i) => (
                  <div key={i} className={`flex gap-4 pb-4 ${i < 2 ? 'border-b border-gray-100' : ''}`}>
                    <ImgPlaceholder className="w-[65px] h-[55px] shrink-0" />
                    <div className="flex flex-col justify-center">
                      <h4 className="text-[12px] font-bold text-gray-900 hover:text-red-600 cursor-pointer mb-1.5 leading-snug transition-colors">{title}</h4>
                      <div className="flex items-center gap-1.5 text-[9px] text-gray-400 uppercase font-semibold mb-1">
                        <Calendar size={10} /> Sep 02 2018
                      </div>
                      <p className="text-[10px] text-gray-500 line-clamp-1">Integer euismod ultrices fac</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Picture News */}
            <div>
              <BlockHeader title="Picture News" variant="box" />
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <ImgPlaceholder key={i} className="aspect-square cursor-pointer hover:opacity-80 transition-opacity bg-gray-200" />
                ))}
              </div>
            </div>

            {/* Popular News */}
            <div>
              <BlockHeader title="Popular News" variant="box" />
              <div className="flex flex-col gap-5">
                {[
                  "49 Years ago we stepped on te moon",
                  "If you think you understand depression, listen to",
                  "All The People: We need to lose weight,"
                ].map((title, i) => (
                  <div key={i} className={`pb-4 ${i < 2 ? 'border-b border-gray-100' : ''}`}>
                    <h4 className="text-[12px] font-bold text-gray-900 hover:text-red-600 cursor-pointer mb-2 leading-snug transition-colors">{title}</h4>
                    <div className="flex items-center gap-1.5 text-[9px] text-gray-400 uppercase font-semibold mb-1.5">
                      <Calendar size={10} /> Sep 02 2018 <User size={10} className="ml-1" /> By Admin
                    </div>
                    <p className="text-[11px] text-gray-500 line-clamp-1">{title}. I</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Promo Block */}
            <div className="bg-black text-white p-8 flex flex-col items-center justify-center text-center mt-2">
              <h2 className="text-[42px] font-black tracking-tighter mb-1">2017</h2>
              <h3 className="text-[15px] uppercase font-light tracking-[0.2em] leading-relaxed">
                Business<br/>Conference
              </h3>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

