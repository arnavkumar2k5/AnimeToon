import React from "react";

function Characters() {
  return (
    <div id="characters" className="bg-gray-800 text-white p-5 md:p-10 w-screen">
      <div className="text-center">
        <h1 className="text-2xl md:text-7xl font-bold mb-5 md:pt-20">Meet the Characters</h1>
        <div className="border-b border-gray-300 mb-6 md:none"></div>
        <h2 className="text-sm md:text-2xl mt-3">
          Unravel the lives of the gods – their joys, struggles, and
          jaw-dropping moments.
        </h2>
      </div>
      <div className="text-sm md:text-2xl text-center mt-10">
        <b className="border-2 border-white p-3 md:p-5 rounded-full">Major Characters in Lore Olympus</b>
      </div>
      <div className="mt-5 w-full flex flex-wrap justify-center gap-5 p-5 md:p-10">
        {[
          {
            name: "Persephone (Kore)",
            role: "Goddess of Spring",
            personality: "Innocent, kind, and reserved but also harboring deep strength.",
            storyline: "The protagonist of the series. She moves to Olympus for a scholarship and quickly becomes entangled in the politics and relationships of the gods, especially her romantic involvement with Hades.",
            image: "/Characters/1.jpg",
          },
          {
            name: "Hades",
            role: "King of the Underworld",
            personality: "Stoic, reserved, and lonely with a softer, caring side. He is deeply in love with Persephone.",
            storyline: "As the ruler of the Underworld, Hades is powerful yet emotionally vulnerable, balancing his duties and his love life.",
            image: "/Characters/2.jpg",
          },
          {
            name: "Zeus",
            role: "King of the Gods",
            personality: "Charismatic, bold, and sometimes irresponsible. Known for his infidelity.",
            storyline: "Often serves as a source of comedic relief but is a figure of power in Olympus.",
            image: "/Characters/4.jpg",
          },
          {
            name: "Eros",
            role: "God of Love and Desire",
            personality: "Playful, mischievous, kind-hearted, and loyal. He becomes one of Persephone’s closest friends.",
            storyline: "A catalyst for several key events, introducing Persephone and Hades.",
            image: "/Characters/6.jpg",
          },
          {
            name: "Poseidon",
            role: "God of the Sea",
            personality: "Playful, laid-back, slightly goofy. He brings humor to the dynamics between the three brothers.",
            storyline: "Part of the 'Big Three' gods, serving as comic relief with a carefree attitude.",
            image: "/Characters/12.webp",
          },
        ].map((character, index) => (
          <div key={index} className="w-full sm:w-5/12 md:w-1/5 p-2 m-auto border-2 border-white rounded-2xl group">
            <div className="m-auto relative">
              <img
                src={character.image}
                alt={character.name}
                className="h-[20rem] md:h-[30rem] w-full rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center gap-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 p-3">
                <p>
                  <b>Name:</b> {character.name}
                </p>
                <p>
                  <b>Role:</b> {character.role}
                </p>
                <p>
                  <b>Personality:</b> {character.personality}
                </p>
                <p>
                  <b>Storyline:</b> {character.storyline}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-sm md:text-2xl text-center mt-20 mb-10">
        <b className="border-2 border-white p-3 md:p-5 rounded-full">Minor Lore Olympus Characters</b>
      </div>
      <div className="flex flex-wrap justify-center mt-5 gap-5">
        {[
          {
            name: "Hera",
            role: "Queen of the Gods, Goddess of Marriage and Women",
            personality: "Fierce, protective, and commands respect.",
            storyline: "Involved in the political workings of Olympus, protective of Persephone.",
            image: "/Characters/3.jpg",
          },
          {
            name: "Demeter",
            role: "Goddess of the Harvest and Agriculture",
            personality: "Overprotective and deeply caring, especially for Persephone.",
            storyline: "Her overprotectiveness causes conflict for Persephone.",
            image: "/Characters/5.jpg",
          },
          {
            name: "Minthe",
            role: "River nymph, Hades’ ex-lover",
            personality: "Jealous, manipulative, and emotionally conflicted.",
            storyline: "Her jealousy of Persephone drives many of her decisions.",
            image: "/Characters/7.jpg",
          },
          {
            name: "Thanatos",
            role: "God of Death",
            personality: "Cold, serious, and efficient, yet insecure.",
            storyline: "Plays a minor antagonistic role, siding with Minthe.",
            image: "/Characters/8.jpg",
          },
          {
            name: "Apollo",
            role: "God of Music, Poetry, and Prophecy",
            personality: "Arrogant and manipulative.",
            storyline: "Significant role as a villain in Persephone’s life.",
            image: "/Characters/9.jpg",
          },
          {
            name: "Hermes",
            role: "Messenger of the Gods, God of Trade, Thieves, and Travelers",
            personality: "Fun-loving, charismatic, and witty.",
            storyline: "Serves as comic relief and a supportive friend.",
            image: "/Characters/10.jpg",
          },
          {
            name: "Hecate",
            role: "Goddess of Witchcraft",
            personality: "Wise, calm, and fiercely loyal to Hades.",
            storyline: "Key role as Hades’ advisor and supporter of his relationship with Persephone.",
            image: "/Characters/11.jpg",
          },
          {
            name: "Artemis",
            role: "Ally to Persephone; voice of empowerment.",
            personality: "Fiercely independent and protective goddess.",
            storyline: "Navigates relationships while supporting Persephone.",
            image: "/Characters/13.jpg",
          },
          {
            name: "Ares",
            role: "Conflicted god of war and love.",
            personality: "Impulsive and brash, masking insecurities.",
            storyline: "Grapples with feelings for Aphrodite and chaotic relationships.",
            image: "/Characters/14.jpg",
          },
        ].map((character, index) => (
          <div key={index} className="w-full sm:w-5/12 md:w-1/5 p-2 m-auto border-2 border-white rounded-2xl group">
            <div className="m-auto relative">
              <img
                src={character.image}
                alt={character.name}
                className="h-[20rem] md:h-[30rem] w-full rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center gap-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 p-3">
                <p>
                  <b>Name:</b> {character.name}
                </p>
                <p>
                  <b>Role:</b> {character.role}
                </p>
                <p>
                  <b>Personality:</b> {character.personality}
                </p>
                <p>
                  <b>Storyline:</b> {character.storyline}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
