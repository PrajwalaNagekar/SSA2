import React from "react";

const Top5School = () => (
  <div className="flex flex-col lg:flex-row gap-0 lg:gap-8 p-4 lg:p-10 max-w-screen-2xl mx-auto bg-white text-justify">
    {/* Main Content */}
    <main className="flex-1 min-w-0">
      <h1 className="text-2xl font-bold mb-3 text-gray-800">
        Top 5 Boarding Schools in West Bengal
      </h1>
      <div className="relative mb-5">
        <img
          src="/top-5-boarding-school-in-west-bengal-1.webp"
          alt="Boarding School Tips Banner"
          className="w-full h-56 md:h-72 object-cover rounded-md"
        />
      </div>
      <section className="mb-5">
        <p className="text-gray-700 leading-relaxed">
          Whenever we think about a child’s education and how to engage them in a good environment to learn and grow, boarding school is always a strong option. Boarding schools expose students to wide opportunities, nurture academic excellence, cultivate discipline, and allow for lifelong friendships.
        </p>
        <p className="mt-3 text-gray-700">
          If you are in West Bengal and looking for the right boarding school, here are the top 5 boarding schools you can consider to ensure your child’s bright future.
        </p>
      </section>

      {/* Schools Section */}
      <section>
        <h2 className="text-xl font-semibold mb-3 text-gray-800">
          Best Boarding Schools In West Bengal: Pick The Right One
        </h2>
        <p className="text-gray-700 mb-4">
          Through thorough research, we've gathered 5 top boarding schools in West Bengal that offer basic amenities, experienced faculty, a healthy environment, easy admission, excellent curriculum, and more—all in one place.
        </p>
        <div className="flex justify-center mb-6">
          <img
            src="/Class1.webp"
            alt="Classroom at Sri Sri Academy, boarding school in West Bengal"
            className="rounded shadow-lg max-w-full h-auto"
          />
        </div>

        {/* School Details */}
        <div className="space-y-8">

          {/* 1. Sri Sri Academy */}
          <div className="text-gray-800">
            <h3 className="text-lg font-semibold mb-1">
              1. Sri Sri Academy
            </h3>
            <p>
              A perfect school situated in the foothills of the Himalayas, Sri Sri Academy is one of the renowned and <span className="text-pink-600 font-semibold">best boarding schools in Siliguri</span>. It is an English-medium educational school nurturing growth, leadership, and holistic learning. The school offers both day and boarding options, sports, extracurriculars, and a secure, engaging environment.
            </p>
            <ul className="mt-2 text-sm space-y-0.5">
              <li><span className="font-semibold">Annual fees:</span> NA</li>
              <li><span className="font-semibold">Location:</span> Dhukuria, P.O. New Chumta, Dagapur, Siliguri – 734009, West Bengal</li>
              <li><span className="font-semibold">Board:</span> CBSE</li>
              <li><span className="font-semibold">Year of establishment:</span> 1999</li>
              <li><span className="font-semibold">Admission fees:</span> NA</li>
              <li><span className="font-semibold">Transportation:</span> Yes</li>
            </ul>
          </div>

          {/* 2. North Point Senior Secondary Boarding School */}
          <div className="text-gray-800">
            <h3 className="text-lg font-semibold mb-1">
              2. North Point Senior Secondary Boarding School – Bolpur (Shantiniketan)
            </h3>
            <p>
              Ranked among the region’s top boarding schools, North Point Senior Secondary Boarding School provides quality education and well-rounded development through sports, academics, and extracurricular activities.
            </p>
            <ul className="mt-2 text-sm space-y-0.5">
              <li><span className="font-semibold">Annual fees:</span> INR 2,00,000</li>
              <li><span className="font-semibold">Location:</span> Shantiniketan Road, Village – Mahidapur, West Bengal, 731236</li>
              <li><span className="font-semibold">Board:</span> CBSE</li>
              <li><span className="font-semibold">Year of establishment:</span> 2019</li>
              <li><span className="font-semibold">Admission fees:</span> INR 39,000</li>
              <li><span className="font-semibold">Transportation:</span> Yes</li>
            </ul>
          </div>

          {/* 3. Pailan World School */}
          <div className="text-gray-800">
            <h3 className="text-lg font-semibold mb-1">3. Pailan World School</h3>
            <p>
              One of the first international boarding schools in the state. Pailan World School spreads over 40 acres, is affiliated with Cambridge International Examinations, and provides K-12 education with day and full boarding options, exceptional academics, meals, and a rich co-curricular program.
            </p>
            <ul className="mt-2 text-sm space-y-0.5">
              <li><span className="font-semibold">Annual fees:</span> INR 2,76,000</li>
              <li><span className="font-semibold">Location:</span> Plot B, 187-206, phase III, Bengal Pailan Park, Joka 700104</li>
              <li><span className="font-semibold">Year of establishment:</span> 2005</li>
              <li><span className="font-semibold">Admission fees:</span> 20000</li>
              <li><span className="font-semibold">Transportation:</span> Yes</li>
            </ul>
          </div>

          {/* 4. Burdwan Model School */}
          <div className="text-gray-800">
            <h3 className="text-lg font-semibold mb-1">4. Burdwan Model School</h3>
            <p>
              With a focus on both day and residential programs, Burdwan Model School boasts modern facilities, security, and a nurturing education for overall development. Activities and sports are abundant.
            </p>
            <ul className="mt-2 text-sm space-y-0.5">
              <li><span className="font-semibold">Annual fees:</span> 1,56,000</li>
              <li><span className="font-semibold">Location:</span> Mirzapur (Dewandighi), Katwa Road. Purba Bardhaman, Mirzapur</li>
              <li><span className="font-semibold">Year of establishment:</span> NA</li>
              <li><span className="font-semibold">Admission fees:</span> NA</li>
              <li><span className="font-semibold">Transportation:</span> NA</li>
            </ul>
          </div>

          {/* 5. AGPN Convent And Eklabya Residential School */}
          <div className="text-gray-800">
            <h3 className="text-lg font-semibold mb-1">
              5. AGPN Convent And Eklabya Residential School
            </h3>
            <p>
              Established in 2000, this CBSE-affiliated co-ed school is run by Purulia Acharya Guru Pranaba Nanda Society. It offers modern teaching, a 40:1 student-teacher ratio, daycare, and a focus on sports and holistic growth.
            </p>
            <ul className="mt-2 text-sm space-y-0.5">
              <li><span className="font-semibold">Annual fees:</span> 96,000</li>
              <li><span className="font-semibold">Location:</span> Opp-b.l and l.r.o office, block-1, p.o-kotloi, Chakdam West Bengal – 723102</li>
              <li><span className="font-semibold">Year of establishment:</span> NA</li>
              <li><span className="font-semibold">Admission fees:</span> NA</li>
              <li><span className="font-semibold">Transportation:</span> Yes</li>
            </ul>
          </div>
        </div>

        {/* Final Thoughts Section */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-gray-800">
          <h3 className="text-lg font-semibold mb-2">Final Thoughts!</h3>
          <p>
            We hope this list of <span className="font-semibold">West Bengal boarding schools</span> helps you pick the very best for your child’s learning and future. All these <span className="font-semibold">top 5 boarding schools in West Bengal</span> are unique. Take your pick with confidence!
          </p>
        </div>
      </section>
    </main>

    {/* Sidebar */}
    <aside className="lg:w-[410px] flex-shrink-0 bg-gray-50 rounded-md p-4 mt-8 lg:mt-0">
      <div className="mb-5">
        <h3 className="text-md font-semibold mb-1">About Us</h3>
        <p className="text-gray-600 text-sm">
          A good system of education must instill self-esteem and creativity. The methodology of education needs to adapt to eliminate irrelevant information.
        </p>
      </div>
      <div className="mb-5">
        <h3 className="text-md font-semibold mb-2">Most Recent Posts</h3>
        <ul className="space-y-3">
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
      <div className="mb-5">
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
        <ul className="flex flex-wrap gap-2 text-gray-600 text-sm mb-3">
          <li>Academics</li>
          <li>Athetics</li>
          <li>Campus Life</li>
          <li>News</li>
          <li>Events</li>
        </ul>
        <h4 className="font-semibold text-md mb-2">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {/* Example tags */}
          {/* <span className="bg-gray-200 px-2 py-1 rounded text-xs">BoardingSchool</span>
          <span className="bg-gray-200 px-2 py-1 rounded text-xs">Preparation</span> */}
        </div>
      </div>
    </aside>
  </div>
);

export default Top5School;
