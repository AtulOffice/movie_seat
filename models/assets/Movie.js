const movies = [
  {
    title: "Tumbbad",
    genre: "Fantasy/Horror/Period",
    rating: 8.4,
    votes: "105K",
    description:
      "A man seeks a hidden treasure in the village of Tumbbad, where an ancient curse looms.",
    about: "Tumbbad is a 2018 Indian Hindi-language period horror film directed by Rahi Anil Barve. It is known for its eerie setting, deep folklore, and stunning visuals that revolve around greed and the consequences of uncovering an ancient treasure.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAxMDUuMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00079092-wzzsfeaaxh-portrait.jpg",
  },
  {
    title: "Joker: Folie a Deux",
    genre: "Drama/Suspense/Thriller",
    rating: 8.5,
    votes: "91K",
    description:
      "A deep dive into the psyche of the iconic villain, Joker, and his relationship with Harley Quinn.",
    about: "Joker: Folie a Deux is an upcoming psychological thriller that continues the dark and twisted journey of Joker, focusing on his relationship with Harley Quinn. The film is expected to explore themes of madness and love.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAxMDUuMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310216-tluebxpafx-portrait.jpg",
  },
  {
    title: "Meiyazhagan",
    genre: "Comedy/Drama",
    rating: 8.0,
    votes: "4.7K",
    description:
      "A light-hearted story about friendship, love, and the journey of self-discovery.",
    about: "Meiyazhagan is a Tamil comedy-drama that revolves around relationships, humor, and the complexities of human connections. It's a feel-good movie that showcases the essence of friendship and love in a small-town setting.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNS4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00405427-jtaxncpkny-portrait.jpg",
  },
  {
    title: "Ibbani Tabbida Ileyali",
    genre: "Drama/Musical/Romantic",
    rating: 8.6,
    votes: "6.2K",
    description:
      "A romantic tale of two souls brought together by fate, filled with music and emotions.",
    about: "This movie is a heartwarming drama set against a backdrop of music and romance. It tells the story of two lovers who are brought together by fate, showcasing the power of emotions and melodies.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA2LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00348158-bxxthefgex-portrait.jpg",
  },
  {
    title: "Stee 2: Sarkate ka Aatank",
    genre: "Action/Sci-Fi/Thriller",
    rating: 8.8,
    votes: "2.1M",
    description:
      "A skilled thief is given a chance to have his criminal history erased, if he can infiltrate a target's dreams.",
    about: "This thrilling sequel blends science fiction with action, where a criminal mastermind is offered a clean slate if he can pull off the most intricate heist—entering dreams and altering reality.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA0MDEuNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364249-gysqjkrwnv-portrait.jpg",
  },
  {
    title: "Hitler",
    genre: "Drama",
    rating: 9.3,
    votes: "2.8M",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    about: "This gripping drama explores the lives of two men, trapped by fate and circumstances, who form an unlikely friendship in a world where hope seems distant.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAxLjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413125-pjrkctwmnz-portrait.jpg",
  },
  {
    title: "Petta Rap",
    genre: "Drama/Thriller",
    rating: 8.6,
    votes: "1.5M",
    description:
      "A poor family schemes to become employed by a wealthy family, leading to an unexpected encounter.",
    about: "Petta Rap explores class conflict and human nature. A poor family infiltrates the life of a wealthy one, leading to a dramatic and suspenseful clash that reveals the darker sides of both.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA1MzggVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410110-lasdudgfxg-portrait.jpg",
  },
  {
    title: "Lubber Pandhu",
    genre: "Adventure/Drama/Sci-Fi",
    rating: 8.6,
    votes: "1.6M",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    about: "This movie follows a daring group of scientists and explorers as they embark on a high-stakes journey through a wormhole to find a new home for mankind. Full of thrilling visuals and existential questions.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-dis "
  }

]
export const getMovie = (req, res) => {
  res.json(movies);
};
