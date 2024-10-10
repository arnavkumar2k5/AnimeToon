import React from "react";

function ReadMore() {
  return (
    <div className="md:w-[90%] mx-auto bg-slate-600 p-10 md:rounded-2xl shadow-xl pt-20 mt-10" id="readmore">
      <h1 className="text-lg md:text-4xl font-bold text-white text-center mb-10 uppercase">
        Lore Olympus Season 1 Review: The Most Fascinating Mythological Manhwa
      </h1>
      <div className="border-b border-gray-300 mx-auto mb-20"></div>
      <img
        src="back2.jpeg"
        alt="Lore Olympus cover"
        className="w-full h-auto mb-6 rounded-lg shadow-md object-cover"
      />
      <div className="mb-10 mt-20">
        <h2 className="text-2xl md:text-5xl font-semibold text-white mb-3">Review of Lore Olympus</h2>
        <div className="border-b border-gray-300 mb-6"></div>
        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">
          Lore Olympus, created by Rachel Smythe, is a modern retelling of the
          ancient Greek myth of Hades and Persephone, presented in a webcomic
          format on Webtoon. The series has gained significant popularity for
          its engaging storytelling, stunning artwork, and relatable characters,
          transforming the classic myth into a contemporary narrative that
          resonates with today’s audience.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl md:text-5xl font-semibold text-white mb-3">Plot Overview</h2>
        <div className="border-b border-gray-300 mb-6"></div>
        <div className={`flex flex-col md:flex-row gap-6 ${window.innerWidth < 768 ? 'order-1' : ''}`}>
          <img src="/Read/1.jpg" alt="Plot overview" className="w-full md:w-1/3 h-[20vh] object-cover rounded-lg shadow-md mb-5" loading="lazy" />
          <p className="text-gray-300 text-lg md:text-2xl leading-relaxed text-justify w-auto">
            The story begins with Persephone, a young goddess, navigating her
            way through the complexities of life in Olympus. As she enters the
            world of gods and mortals, she encounters Hades, the god of the
            Underworld. Their relationship blossoms amid societal expectations,
            power dynamics, and personal struggles. The narrative explores
            themes of love, consent, identity, and self-discovery while
            intertwining the lives of various other deities, such as Aphrodite,
            Ares, and Apollo.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl md:text-5xl font-semibold text-white mb-3">Artwork</h2>
        <div className="border-b border-gray-300 mb-6"></div>
        <div className={`flex flex-col-reverse md:flex-row gap-6 ${window.innerWidth < 768 ? 'order-2' : ''}`}>
          <p className="text-gray-300 text-lg md:text-2xl text-justify leading-relaxed md:w-3/4">
            The visual style of Lore Olympus is one of its standout features.
            The vibrant colors, expressive character designs, and intricate
            backgrounds create an immersive reading experience. Smythe’s use of
            color not only enhances the storytelling but also reflects the
            characters' emotions and the overall tone of the narrative. Each
            panel is thoughtfully crafted, capturing the essence of the
            characters and their surroundings.
          </p>
          <img
            src="/Read/2.jpg"
            alt="Artwork"
            className="w-full md:w-[30%] h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl md:text-5xl font-semibold text-white mb-3">Themes</h2>
        <div className="border-b border-gray-300 mb-6"></div>
        <div className={`flex flex-col-reverse md:flex-row gap-6 ${window.innerWidth < 768 ? 'order-3' : ''}`}>
          <img
            src="/Read/3.jpg"
            alt="Themes"
            className="w-full md:w-[30%] h-auto object-cover rounded-lg shadow-md mb-5"
          />
          <div className="md:w-2/3">
            <p className="text-gray-300 text-xl md:text-3xl font-bold underline mb-3">
              Lore Olympus delves into numerous themes, including:
            </p>
            <ul className="text-start list-inside text-gray-300 text-lg md:text-2xl">
              <li>
                <strong>Love and Consent:</strong> The series explores the
                dynamics of relationships, emphasizing the importance of consent
                and mutual respect.
              </li>
              <li>
                <strong>Feminism and Empowerment:</strong> Persephone’s journey
                is one of self-discovery and empowerment, challenging
                traditional gender roles and expectations.
              </li>
              <li>
                <strong>Mental Health:</strong> Characters grapple with
                insecurities, trauma, and emotional struggles, bringing a
                relatable aspect to their divine personas.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl md:text-5xl font-semibold text-white mb-3">Conclusion</h2>
        <div className="border-b border-gray-300 mb-6"></div>
        <div className={`flex flex-col md:flex-row gap-6 ${window.innerWidth < 768 ? 'order-4' : ''}`}>
          <p className="text-gray-300 text-lg md:text-2xl text-justify leading-relaxed md:w-2/3">
            In summary, Lore Olympus is a beautifully crafted webcomic that
            breathes new life into ancient mythology. Its engaging plot,
            relatable characters, and stunning artwork create a captivating
            experience for readers. By addressing contemporary issues through
            the lens of Greek mythology, Rachel Smythe has created a series that
            resonates with audiences of all ages. Whether you’re a fan of
            mythology or simply looking for a compelling story, Lore Olympus
            offers a rich tapestry of love, power, and self-discovery that is
            hard to resist.
          </p>
          <img
            src="/Read/4.jpg"
            alt="Conclusion"
            className="w-full md:w-[30%] h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="mt-10 text-center">
        <div className="text-lg text-start md:text-5xl mb-10 font-bold">
          To Read the Lore Olympus Webtoon: Jaw Dropping Scene on Media Visit Animemangatoon.com
        </div>
        <a
          href="https://animemangatoon.com/lore-olympus-hades-meets-persephone/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 text-lg md:text-2xl p-5 rounded-full hover:bg-yellow-300 hover:text-black font-semibold"
        >
          Read More...
        </a>
      </div>
    </div>
  );
}

export default ReadMore;
