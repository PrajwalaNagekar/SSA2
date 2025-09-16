import React from "react";

const BoardingSchoolTips = () => (
  <div className="flex flex-col lg:flex-row lg:gap-8 p-4 lg:p-10 max-w-screen-2xl mx-auto bg-white text-justify">
    {/* Main Content */}
    <main className="flex-1 min-w-0">
      <h1 className="text-xl lg:text-2xl font-semibold mb-4">
        Tips for Preparing Your Child for Boarding School Life
      </h1>
      <div className="relative mb-6">
        <img
          src="/WhatsApp-Image-2025-07-03-at-13.56.12_f0545b22-1.webp"
          alt="Boarding School Tips Banner"
          className="w-full h-56 md:h-72 object-cover rounded-md"
        />
        {/* <div className="absolute top-4 left-4 bg-black/60 p-4 rounded-md">
          <h2 className="text-white text-lg font-bold">
            Tips for Preparing Your Child for Boarding School Life
          </h2>
        </div> */}
      </div>
      <section className="mb-6">
        <p className="text-gray-700">
          Are you looking to prepare your child for boarding school? Boarding school helps in academic excellence, independence, time management, and building relationships. Here are key tips to help your child prepare.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">How to prepare your child for boarding school</h2>
        <ol className="list-decimal ml-5 space-y-2 text-gray-800">
          <li><span className="font-bold">Free Exchange of Information:</span> Start by discussing your sentiments with your child and letting them know that they are normal, whether they are excitement, nervousness, or homesickness. Tell them about the routine, shared living arrangements, and the new duties that are assigned to the students of the boarding school.</li>
          <li><span className="font-bold">Instruct in Respect for Relationships and Rules:</span> Clarify why it is essential to adhere to school policies, particularly regarding privacy and communal living. Additionally, promote considerate actions such as tidying up after oneself, looking after communal areas, and fostering good connections with dorm heads.</li>
          <li><span className="font-bold">Create Practice Routines:</span> You can implement daily structures at home, such as wake-up times, schoolwork, and meals, in order to build a boarding schedule and consistency. This is an important part of <b>Preparing your child for boarding school.</b></li>
          <li><span className="font-bold">Promote Self-Sufficiency:</span> Teach them self-sufficiency by telling them how to do the important activities, such as doing laundry, bed making, bag packing, meal preparation, and time management for sure. It is very crucial to spend life in a boarding school.</li>
          <li><span className="font-bold">Get to Know the Environment:</span> Organize a school tour or orientation visit for your child to explore the dorms, meet staff and future classmates, and build confidence for Day One.</li>
          <li><span className="font-bold">Prepare them emotionally:</span> Tell them about the homesickness, and provide them with some comforting items such as photos, a cherished blanket, or a little memento. Tell them to make contact without disrespecting the guidelines of the school. Inform them to initiate with the frequent communication first, and then adjust properly.</li>
          <li><span className="font-bold">Make their place personalized :</span> Allow your child to bring personal items for themselves, such as photos, posters, and keepsakes, in order to let them make their dorm feel welcoming and homely. </li>
          <li><span className="font-bold">Encourage social engagement :</span> Let your child be involved in sports, clubs, and dorm activities. If your child builds a relationship with the housemasters, then it will be beneficial for them. </li>
          <li><span className="font-bold">Establish Post-Arrival Plans :</span> Organize a small “treat” or home-visit weekend for the first break, so your child has something to look forward to. Motivate them to look for assistance—from colleagues, guides, or personnel—if they find it difficult.</li>
        </ol>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">What are the benefits of boarding school?</h2>
        <span>There are various kinds of benefits that you can look for after enrolling your child in the boarding school. Here are some of the benefits mentioned below. </span>
        <ul className="list-disc ml-5 space-y-2 text-gray-800">
          <li> It provides academic excellence to the child</li>
          <li>It allows the child to be independent and handle things on their own</li>
          <li>Students get the chance to build lifelong relationships with other students</li>
          <li>At boarding school, you get the chance to participate in extracurricular activities</li>
          <li>It develops the child holistically</li>
          <li>The school provides a structured and disciplined environment for the child</li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold mb-2">Sum Up!</h2>
        <p className="text-gray-700">
          This is all about the preparation tips for sending your child to a boarding school. If you are looking to enroll your child in a boarding school, then you can look at all the Boarding school preparation tips mentioned in this blog. It will help you to understand how to send your child properly in the boarding school without any issue. It will help your child build a great career and personality there. If you are searching for a boarding school, then you can look for Sri Sri Academy. It is one of the renowned and best boarding schools, providing the best education and facilities at an affordable price. You can connect with the staff there and ask about your concern related to the same.
        </p>
      </section>
    </main>

    {/* Sidebar */}
    <aside className="lg:w-[420px] flex-shrink-0 bg-gray-50 rounded-md p-4 mt-10 lg:mt-0">
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-1">About Us</h3>
        <p className="text-gray-600 text-sm">
          A good system of education must instill self-esteem and creativity. The methodology of education needs to adapt to eliminate irrelevant information.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Most Recent Posts</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <img src="/advantage-of-boarding-school-for-international-students-1024x555-1.webp" alt="Post 1" className="w-12 h-12 object-cover rounded-md" />
            <span className="text-sm text-gray-700 flex-1">The Advantages of Boarding School for International Students</span>
          </li>
          <li className="flex items-center gap-3">
            <img src="/top-5-boarding-school-in-west-bengal-1.webp" alt="Post 2" className="w-12 h-12 object-cover rounded-md" />
            <span className="text-sm text-gray-700 flex-1">Top 5 Boarding Schools in West Bengal</span>
          </li>
          <li className="flex items-center gap-3">
            <img src="/difference-between-day-school-and-residential-school.webp" alt="Post 3" className="w-12 h-12 object-cover rounded-md" />
            <span className="text-sm text-gray-700 flex-1">7 Differences Between Day School and Boarding School You Should Know</span>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/7clB1HxUTCI"
  title="YouTube video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="rounded"
/>

      </div>
      <div>
        <h4 className="font-semibold text-md mb-2">Category</h4>
        <ul className="flex flex-wrap gap-2 text-gray-600 text-sm mb-4">
          <li>Academics</li>
          <li>Admission</li>
          <li>Campus Life</li>
          <li>News</li>
        </ul>
        <h4 className="font-semibold text-md mb-2">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {/* Example tags */}
          <span className="bg-gray-200 px-2 py-1 rounded text-xs">BoardingSchool</span>
          <span className="bg-gray-200 px-2 py-1 rounded text-xs">Preparation</span>
        </div>
      </div>
    </aside>
  </div>
);

export default BoardingSchoolTips;
