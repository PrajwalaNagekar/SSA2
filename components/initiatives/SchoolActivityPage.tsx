import React from 'react';

export default function SchoolActivityPage() {
  return (
    <div className="px-[5vw] py-10 max-w-[1300px] mx-auto font-sans  text-justify">
      {/* Header */}
      <div className="text-center mb-9 text-[#484848] text-base md:text-[15px]">
School life is not all about academics, games, friends and fun. It is also about learning to interact with other people, being aware of social issues and being involved in initiatives that go beyond academic goals.        <br />
<br/>
At Sri Sri Academy Residential School in Siliguri, students participate in activities which are designed to improve student engagement and family involvement . Beyond making our school an aesthetically vibrant and environmentally friendly place, our ultimate goal is to instill in the children a sense of wonder as well as responsibility for the environment and everything around them.


      </div>

      {/* Go Green Section */}
      <div className="flex flex-wrap justify-between items-start mb-14 md:mb-16">
        <div className="flex-1 min-w-[330px] max-w-[330px] mr-8 mb-8 md:mb-0">
          <img 
            src="/IMG_20241124_140731-scaled.webp" 
            alt="Go Green Activity" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        
        <div className="flex-[2_1_400px] min-w-[270px] max-w-[750px]">
          <h2 className="text-[#2b217a] text-xl md:text-2xl font-semibold mb-2 tracking-tight">
            Go Green : Nurturing Environmental Awareness among Children
          </h2>
          <div className="w-12 h-1 bg-[#ed55ab] rounded mb-4"></div>
          <p className="text-[#444] text-base md:text-[15px] leading-relaxed mb-3">
            We are taking steps to create a 'clean and green consciousness' among students by enabling them to Reduce, Reuse, Recycle by conducting various activities like conserving water, electricity, food, waste management, sensitivity towards plants and animals etc.
          </p>
          <p className="text-[#444] text-base md:text-[15px] leading-relaxed">
            Plastic is an environmental hazard. Polythene bags are polluting, land, water, and air as they are non-biodegradable. Students and parents are encouraged to reduce the use of plastic. Children paint on cloth bags and give it to their parents and encourage family and friends to use cloth bags instead of plastic bags. Children are also encouraged to bring in old objects like plastic bottles, plates and upcycle them into a new creation.
          </p>
        </div>
      </div>

      {/* Community Service Section */}
      <div className="flex flex-wrap justify-between items-start mb-14 md:mb-16">
        <div className="flex-[2_1_400px] min-w-[270px] max-w-[750px] order-2 md:order-1">
          <h2 className="text-[#2b217a] text-xl md:text-2xl font-semibold mb-2 tracking-tight">
            Community Service
          </h2>
          <div className="w-12 h-1 bg-[#ed55ab] rounded mb-4"></div>
          <p className="text-[#444] text-base md:text-[15px] leading-relaxed mb-3">
            When students get involved in community service, they not only help others, they expand their worldview, develop empathy and leadership skills, and realize how their actions can have a positive impact.
          </p>
          <p className="text-[#444] text-base md:text-[15px] leading-relaxed mb-3">
            Our students are encouraged to make handmade cards, vases, frames, paintings etc in the Art and Craft classes and the same is sold during the school annual 'Carnival for a Cause'. The proceeds from the sale is used to support a neighbourhood school to buy supplies for the students like books, toys, sports equipment, water filter etc. The students visit the school, interact with the children and also organise games and competitions for the children.
          </p>
          <p className="text-[#444] text-base md:text-[15px] leading-relaxed">
            The students are able to help other children in their own little way and they benefit greatly—both academically and emotionally from volunteering their time to help and make other children happy.
          </p>
        </div>
        
        <div className="flex-1 min-w-[330px] max-w-[330px] ml-0 md:ml-8 mb-8 md:mb-0 order-1 md:order-2">
          <img 
            src="/WhatsApp-Image-2024-05-11-at-12.37.37-PM-1.webp" 
            alt="Community Service" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-[#333] text-sm md:text-[13px] text-left max-w-[980px] mx-auto mt-9">
        TThe school in collaboration with the Art Of Living foundation organize cleanliness drive to spread awareness among residents around the school about health, hygiene and keeping their surrounding clean. The students interact with the people to educate them on the importance of keeping the surrounding clean and hygienic. They even urge them to use paper bags instead of plastic, keep a dustbin so that the waste isn’t littered around
        <br /><br/>
       We believe that you are never too young to make a difference in the community to make someone’s life a little better and to make people happy.


      </div>
    </div>
  );
}