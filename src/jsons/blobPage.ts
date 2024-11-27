import image1 from "../assets/images/blob01.png";
import image2 from "../assets/images/blob02.png";
import image3 from "../assets/images/blob03.png";
import image4 from "../assets/images/blob04.png";
import image5 from "../assets/images/blob05.png";
import image6 from "../assets/images/blob06.png";
import Addimg1 from "../assets/images/additional_Image1.png";
import Addimg2 from "../assets/images/additional_Image2.png";
import Addimg3 from "../assets/images/additional_Image3.png";
import profile from "../assets/images/profile.png";
import recent1 from "../assets/images/recent1.png";
import recent2 from "../assets/images/recent2.png";
import recent3 from "../assets/images/recent3.png";
import recent4 from "../assets/images/recent4.png";

 const blobsData = [
  {
    id: "1",
    basicDetails: {
      id: "1",
      profile: profile,
      profileTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. ",
      image: image1,
      name: "Julie Christie",
      date: "October 17,2021",
      title: "Three Ideas for Making Happiness",
      mainDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.",
      secondDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      highlights:
        "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. ",
      thirdDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. ",
      additionalImages: [
        { addimg1: Addimg1 },
        { addimg1: Addimg2 },
        { addimg1: Addimg3 },
      ],
      tags: [
        {
          tag: "Design",
        },
        {
          tag: "Photography",
        },
        {
          tag: "Images",
        },
        {
          tag: "Video",
        },
        {
          tag: "Music",
        },
        {
          tag: "Travel",
        },
      ],
    },
    categories: [
      {
        category: "Fashion",
        number: 16,
      },
      {
        category: "Food",
        number: 20,
      },
      {
        category: "Music",
        number: 36,
      },
      {
        category: "Travel",
        number: 10,
      },
    ],

    achievements: [
      {
        number: "12",
        date: "October 2021",
      },
      {
        number: "6",
        date: "September 2021",
      },
      {
        number: "23",
        date: "August 2021",
      },
    ],
    recentPosts: [
      {
        title: "here are many variations of passages",
        date: "October 17,2021",
        image: recent1,
        name: "Julie Christie",
      },
      {
        title: "here are many variations of passages",
        date: "October 17,2021",
        image: recent2,
        name: "Julie Christie",
      },
      {
        title: "here are many variations of passages",
        date: "October 17,2021",
        image: recent3,
        name: "Julie Christie",
      },
      {
        title: "here are many variations of passages",
        date: "October 17,2021",
        image: recent4,
        name: "Julie Christie",
      },
    ],
  },
  {
    id: "2",
    basicDetails: {
      id: "2",
      image: image2,
      name: "John Doe",
      date: "2024-10-17",
      title: "two Ideas for Making Happiness",
      mainDescription:
        "Nature has an unparalleled beauty that captivates the hearts and minds of those who take the time to appreciate it. From towering mountains to serene lakes, every element of the natural world offers a unique experience. In this exploration, we delve into various landscapes, revealing the hidden gems that our planet has to offer. Our journey will take us through lush forests, rocky terrains, and vibrant ecosystems, showcasing the diversity of life that exists in harmony with nature. Join us as we embark on this adventure.",
      secondDescription:
        "Throughout history, humanity has been drawn to the great outdoors. Many cultures celebrate nature through art, storytelling, and traditions that highlight our connection to the earth. In this segment, we will discuss how different societies perceive and interact with their natural surroundings. We will explore indigenous practices, conservation efforts, and the impact of urbanization on our relationship with the wild. Understanding these perspectives can deepen our appreciation for the environment and inspire us to engage in sustainable practices.",
      highlights:
        "This journey not only focuses on the scenic views but also on the rich biodiversity we encounter. Witnessing the interplay of ecosystems, we learn about the delicate balance that sustains life. Special features include breathtaking landscapes, unique flora and fauna, and insights from local guides who share their knowledge and stories.",
      thirdDescription:
        "In conclusion, the beauty of nature is a treasure that should be cherished and protected. Our adventures remind us of the importance of preserving our environment for future generations. Through responsible travel and a commitment to sustainability, we can ensure that these breathtaking landscapes and diverse ecosystems remain intact. As we continue to explore the world, let us be mindful of our impact and strive to be good stewards of the planet. Together, we can create a legacy of conservation and appreciation for the natural wonders around us.",
      additionalImages: [Addimg1, Addimg2, Addimg3],
    },
    categories: {
      Fashion: 16,
      Food: 20,
      Music: 36,
      Travel: 10,
    },
    achievements: [
      {
        number: "12",
        date: "October 2021",
      },
      {
        number: "10",
        date: "September 2021",
      },
      {
        number: "7",
        date: "August 2021",
      },
    ],
    recentPosts: [
      {
        title: "10 Essential Tips for Traveling Sustainably",
        date: "2024-09-15",
        image: "/src/assets/images/blob 01",
        name: "John Doe",
      },
      {
        title: "Exploring the Culinary Delights of Italy",
        date: "2024-09-08",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
      {
        title: "Music Festivals Around the World: A Comprehensive Guide",
        date: "2024-09-01",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
    ],
  },
  {
    id: "3",
    basicDetails: {
      id: "3",
      image: image3,
      name: "John Doe",
      date: "2024-10-17",
      title: "Exploring the Beauty of Nature: A Journey Through the Wild",
      mainDescription:
        "Nature has an unparalleled beauty that captivates the hearts and minds of those who take the time to appreciate it. From towering mountains to serene lakes, every element of the natural world offers a unique experience. In this exploration, we delve into various landscapes, revealing the hidden gems that our planet has to offer. Our journey will take us through lush forests, rocky terrains, and vibrant ecosystems, showcasing the diversity of life that exists in harmony with nature. Join us as we embark on this adventure.",
      secondDescription:
        "Throughout history, humanity has been drawn to the great outdoors. Many cultures celebrate nature through art, storytelling, and traditions that highlight our connection to the earth. In this segment, we will discuss how different societies perceive and interact with their natural surroundings. We will explore indigenous practices, conservation efforts, and the impact of urbanization on our relationship with the wild. Understanding these perspectives can deepen our appreciation for the environment and inspire us to engage in sustainable practices.",
      highlights:
        "This journey not only focuses on the scenic views but also on the rich biodiversity we encounter. Witnessing the interplay of ecosystems, we learn about the delicate balance that sustains life. Special features include breathtaking landscapes, unique flora and fauna, and insights from local guides who share their knowledge and stories.",
      thirdDescription:
        "In conclusion, the beauty of nature is a treasure that should be cherished and protected. Our adventures remind us of the importance of preserving our environment for future generations. Through responsible travel and a commitment to sustainability, we can ensure that these breathtaking landscapes and diverse ecosystems remain intact. As we continue to explore the world, let us be mindful of our impact and strive to be good stewards of the planet. Together, we can create a legacy of conservation and appreciation for the natural wonders around us.",
      additionalImages: [
        "/src/assets/images/blobD 01",
        "/src/assets/images/blobD 02",
        "/src/assets/images/blobD 03",
      ],
    },
    categories: {
      Fashion: 16,
      Food: 20,
      Music: 36,
      Travel: 10,
    },
    achievements: [
      {
        number: "12",
        date: "October 2021",
      },
      {
        number: "10",
        date: "September 2021",
      },
      {
        number: "7",
        date: "August 2021",
      },
    ],
    recentPosts: [
      {
        title: "10 Essential Tips for Traveling Sustainably",
        date: "2024-09-15",
        image: "/src/assets/images/blob 01",
        name: "John Doe",
      },
      {
        title: "Exploring the Culinary Delights of Italy",
        date: "2024-09-08",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
      {
        title: "Music Festivals Around the World: A Comprehensive Guide",
        date: "2024-09-01",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
    ],
  },
  {
    id: "4",
    basicDetails: {
      id: "4",
      image: image4,
      name: "John Doe",
      date: "2024-10-17",
      title: "Exploring the Beauty of Nature: A Journey Through the Wild",
      mainDescription:
        "Nature has an unparalleled beauty that captivates the hearts and minds of those who take the time to appreciate it. From towering mountains to serene lakes, every element of the natural world offers a unique experience. In this exploration, we delve into various landscapes, revealing the hidden gems that our planet has to offer. Our journey will take us through lush forests, rocky terrains, and vibrant ecosystems, showcasing the diversity of life that exists in harmony with nature. Join us as we embark on this adventure.",
      secondDescription:
        "Throughout history, humanity has been drawn to the great outdoors. Many cultures celebrate nature through art, storytelling, and traditions that highlight our connection to the earth. In this segment, we will discuss how different societies perceive and interact with their natural surroundings. We will explore indigenous practices, conservation efforts, and the impact of urbanization on our relationship with the wild. Understanding these perspectives can deepen our appreciation for the environment and inspire us to engage in sustainable practices.",
      highlights:
        "This journey not only focuses on the scenic views but also on the rich biodiversity we encounter. Witnessing the interplay of ecosystems, we learn about the delicate balance that sustains life. Special features include breathtaking landscapes, unique flora and fauna, and insights from local guides who share their knowledge and stories.",
      thirdDescription:
        "In conclusion, the beauty of nature is a treasure that should be cherished and protected. Our adventures remind us of the importance of preserving our environment for future generations. Through responsible travel and a commitment to sustainability, we can ensure that these breathtaking landscapes and diverse ecosystems remain intact. As we continue to explore the world, let us be mindful of our impact and strive to be good stewards of the planet. Together, we can create a legacy of conservation and appreciation for the natural wonders around us.",
      additionalImages: [Addimg1, Addimg2, Addimg3],
    },
    categories: {
      Fashion: 16,
      Food: 20,
      Music: 36,
      Travel: 10,
    },
    achievements: [
      {
        number: "12",
        date: "October 2021",
      },
      {
        number: "10",
        date: "September 2021",
      },
      {
        number: "7",
        date: "August 2021",
      },
    ],
    recentPosts: [
      {
        title: "10 Essential Tips for Traveling Sustainably",
        date: "2024-09-15",
        image: "/src/assets/images/blob 01",
        name: "John Doe",
      },
      {
        title: "Exploring the Culinary Delights of Italy",
        date: "2024-09-08",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
      {
        title: "Music Festivals Around the World: A Comprehensive Guide",
        date: "2024-09-01",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
    ],
  },
  {
    id: "5",
    basicDetails: {
      id: "5",
      image: image5,
      name: "John Doe",
      date: "2024-10-17",
      title: "Exploring the Beauty of Nature: A Journey Through the Wild",
      mainDescription:
        "Nature has an unparalleled beauty that captivates the hearts and minds of those who take the time to appreciate it. From towering mountains to serene lakes, every element of the natural world offers a unique experience. In this exploration, we delve into various landscapes, revealing the hidden gems that our planet has to offer. Our journey will take us through lush forests, rocky terrains, and vibrant ecosystems, showcasing the diversity of life that exists in harmony with nature. Join us as we embark on this adventure.",
      secondDescription:
        "Throughout history, humanity has been drawn to the great outdoors. Many cultures celebrate nature through art, storytelling, and traditions that highlight our connection to the earth. In this segment, we will discuss how different societies perceive and interact with their natural surroundings. We will explore indigenous practices, conservation efforts, and the impact of urbanization on our relationship with the wild. Understanding these perspectives can deepen our appreciation for the environment and inspire us to engage in sustainable practices.",
      highlights:
        "This journey not only focuses on the scenic views but also on the rich biodiversity we encounter. Witnessing the interplay of ecosystems, we learn about the delicate balance that sustains life. Special features include breathtaking landscapes, unique flora and fauna, and insights from local guides who share their knowledge and stories.",
      thirdDescription:
        "In conclusion, the beauty of nature is a treasure that should be cherished and protected. Our adventures remind us of the importance of preserving our environment for future generations. Through responsible travel and a commitment to sustainability, we can ensure that these breathtaking landscapes and diverse ecosystems remain intact. As we continue to explore the world, let us be mindful of our impact and strive to be good stewards of the planet. Together, we can create a legacy of conservation and appreciation for the natural wonders around us.",
      additionalImages: [Addimg1, Addimg2, Addimg3],
    },
    categories: {
      Fashion: 16,
      Food: 20,
      Music: 36,
      Travel: 10,
    },
    achievements: [
      {
        number: "12",
        date: "October 2021",
      },
      {
        number: "10",
        date: "September 2021",
      },
      {
        number: "7",
        date: "August 2021",
      },
    ],
    recentPosts: [
      {
        title: "10 Essential Tips for Traveling Sustainably",
        date: "2024-09-15",
        image: "/src/assets/images/blob 01",
        name: "John Doe",
      },
      {
        title: "Exploring the Culinary Delights of Italy",
        date: "2024-09-08",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
      {
        title: "Music Festivals Around the World: A Comprehensive Guide",
        date: "2024-09-01",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
    ],
  },
  {
    id: "6",
    basicDetails: {
      id: "6",
      image: image6,
      name: "John Doe",
      date: "2024-10-17",
      title: "Exploring the Beauty of Nature: A Journey Through the Wild",
      mainDescription:
        "Nature has an unparalleled beauty that captivates the hearts and minds of those who take the time to appreciate it. From towering mountains to serene lakes, every element of the natural world offers a unique experience. In this exploration, we delve into various landscapes, revealing the hidden gems that our planet has to offer. Our journey will take us through lush forests, rocky terrains, and vibrant ecosystems, showcasing the diversity of life that exists in harmony with nature. Join us as we embark on this adventure.",
      secondDescription:
        "Throughout history, humanity has been drawn to the great outdoors. Many cultures celebrate nature through art, storytelling, and traditions that highlight our connection to the earth. In this segment, we will discuss how different societies perceive and interact with their natural surroundings. We will explore indigenous practices, conservation efforts, and the impact of urbanization on our relationship with the wild. Understanding these perspectives can deepen our appreciation for the environment and inspire us to engage in sustainable practices.",
      highlights:
        "This journey not only focuses on the scenic views but also on the rich biodiversity we encounter. Witnessing the interplay of ecosystems, we learn about the delicate balance that sustains life. Special features include breathtaking landscapes, unique flora and fauna, and insights from local guides who share their knowledge and stories.",
      thirdDescription:
        "In conclusion, the beauty of nature is a treasure that should be cherished and protected. Our adventures remind us of the importance of preserving our environment for future generations. Through responsible travel and a commitment to sustainability, we can ensure that these breathtaking landscapes and diverse ecosystems remain intact. As we continue to explore the world, let us be mindful of our impact and strive to be good stewards of the planet. Together, we can create a legacy of conservation and appreciation for the natural wonders around us.",
      additionalImages: [Addimg1, Addimg2, Addimg3],
    },
    categories: {
      Fashion: 16,
      Food: 20,
      Music: 36,
      Travel: 10,
    },
    achievements: [
      {
        number: "12",
        date: "October 2021",
      },
      {
        number: "10",
        date: "September 2021",
      },
      {
        number: "7",
        date: "August 2021",
      },
    ],
    recentPosts: [
      {
        title: "10 Essential Tips for Traveling Sustainably",
        date: "2024-09-15",
        image: "/src/assets/images/blob 01",
        name: "John Doe",
      },
      {
        title: "Exploring the Culinary Delights of Italy",
        date: "2024-09-08",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
      {
        title: "Music Festivals Around the World: A Comprehensive Guide",
        date: "2024-09-01",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
    ],
  },
  {
    id: "7",
    basicDetails: {
      id: "7",
      image: image1,
      name: "John Doe",
      date: "2024-10-17",
      title: "Exploring the Beauty of Nature: A Journey Through the Wild",
      mainDescription:
        "Nature has an unparalleled beauty that captivates the hearts and minds of those who take the time to appreciate it. From towering mountains to serene lakes, every element of the natural world offers a unique experience. In this exploration, we delve into various landscapes, revealing the hidden gems that our planet has to offer. Our journey will take us through lush forests, rocky terrains, and vibrant ecosystems, showcasing the diversity of life that exists in harmony with nature. Join us as we embark on this adventure.",
      secondDescription:
        "Throughout history, humanity has been drawn to the great outdoors. Many cultures celebrate nature through art, storytelling, and traditions that highlight our connection to the earth. In this segment, we will discuss how different societies perceive and interact with their natural surroundings. We will explore indigenous practices, conservation efforts, and the impact of urbanization on our relationship with the wild. Understanding these perspectives can deepen our appreciation for the environment and inspire us to engage in sustainable practices.",
      highlights:
        "This journey not only focuses on the scenic views but also on the rich biodiversity we encounter. Witnessing the interplay of ecosystems, we learn about the delicate balance that sustains life. Special features include breathtaking landscapes, unique flora and fauna, and insights from local guides who share their knowledge and stories.",
      thirdDescription:
        "In conclusion, the beauty of nature is a treasure that should be cherished and protected. Our adventures remind us of the importance of preserving our environment for future generations. Through responsible travel and a commitment to sustainability, we can ensure that these breathtaking landscapes and diverse ecosystems remain intact. As we continue to explore the world, let us be mindful of our impact and strive to be good stewards of the planet. Together, we can create a legacy of conservation and appreciation for the natural wonders around us.",
      additionalImages: [Addimg1, Addimg2, Addimg3],
    },
    categories: {
      Fashion: 16,
      Food: 20,
      Music: 36,
      Travel: 10,
    },
    achievements: [
      {
        number: "12",
        date: "October 2021",
      },
      {
        number: "10",
        date: "September 2021",
      },
      {
        number: "7",
        date: "August 2021",
      },
    ],
    recentPosts: [
      {
        title: "10 Essential Tips for Traveling Sustainably",
        date: "2024-09-15",
        image: "/src/assets/images/blob 01",
        name: "John Doe",
      },
      {
        title: "Exploring the Culinary Delights of Italy",
        date: "2024-09-08",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
      {
        title: "Music Festivals Around the World: A Comprehensive Guide",
        date: "2024-09-01",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
    ],
  },
  {
    id: "8",
    basicDetails: {
      id: "8",
      image: image2,
      name: "John Doe",
      date: "2024-10-17",
      title: "Exploring the Beauty of Nature: A Journey Through the Wild",
      mainDescription:
        "Nature has an unparalleled beauty that captivates the hearts and minds of those who take the time to appreciate it. From towering mountains to serene lakes, every element of the natural world offers a unique experience. In this exploration, we delve into various landscapes, revealing the hidden gems that our planet has to offer. Our journey will take us through lush forests, rocky terrains, and vibrant ecosystems, showcasing the diversity of life that exists in harmony with nature. Join us as we embark on this adventure.",
      secondDescription:
        "Throughout history, humanity has been drawn to the great outdoors. Many cultures celebrate nature through art, storytelling, and traditions that highlight our connection to the earth. In this segment, we will discuss how different societies perceive and interact with their natural surroundings. We will explore indigenous practices, conservation efforts, and the impact of urbanization on our relationship with the wild. Understanding these perspectives can deepen our appreciation for the environment and inspire us to engage in sustainable practices.",
      highlights:
        "This journey not only focuses on the scenic views but also on the rich biodiversity we encounter. Witnessing the interplay of ecosystems, we learn about the delicate balance that sustains life. Special features include breathtaking landscapes, unique flora and fauna, and insights from local guides who share their knowledge and stories.",
      thirdDescription:
        "In conclusion, the beauty of nature is a treasure that should be cherished and protected. Our adventures remind us of the importance of preserving our environment for future generations. Through responsible travel and a commitment to sustainability, we can ensure that these breathtaking landscapes and diverse ecosystems remain intact. As we continue to explore the world, let us be mindful of our impact and strive to be good stewards of the planet. Together, we can create a legacy of conservation and appreciation for the natural wonders around us.",
      additionalImages: [Addimg1, Addimg2, Addimg3],
    },
    categories: {
      Fashion: 16,
      Food: 20,
      Music: 36,
      Travel: 10,
    },
    achievements: [
      {
        number: "12",
        date: "October 2021",
      },
      {
        number: "10",
        date: "September 2021",
      },
      {
        number: "7",
        date: "August 2021",
      },
    ],
    recentPosts: [
      {
        title: "10 Essential Tips for Traveling Sustainably",
        date: "2024-09-15",
        image: "/src/assets/images/blob 01",
        name: "John Doe",
      },
      {
        title: "Exploring the Culinary Delights of Italy",
        date: "2024-09-08",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
      {
        title: "Music Festivals Around the World: A Comprehensive Guide",
        date: "2024-09-01",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
    ],
  },
  {
    id: "9",
    basicDetails: {
      id: "9",
      image: image3,
      name: "John Doe",
      date: "2024-10-17",
      title: "Exploring the Beauty of Nature: A Journey Through the Wild",
      mainDescription:
        "Nature has an unparalleled beauty that captivates the hearts and minds of those who take the time to appreciate it. From towering mountains to serene lakes, every element of the natural world offers a unique experience. In this exploration, we delve into various landscapes, revealing the hidden gems that our planet has to offer. Our journey will take us through lush forests, rocky terrains, and vibrant ecosystems, showcasing the diversity of life that exists in harmony with nature. Join us as we embark on this adventure.",
      secondDescription:
        "Throughout history, humanity has been drawn to the great outdoors. Many cultures celebrate nature through art, storytelling, and traditions that highlight our connection to the earth. In this segment, we will discuss how different societies perceive and interact with their natural surroundings. We will explore indigenous practices, conservation efforts, and the impact of urbanization on our relationship with the wild. Understanding these perspectives can deepen our appreciation for the environment and inspire us to engage in sustainable practices.",
      highlights:
        "This journey not only focuses on the scenic views but also on the rich biodiversity we encounter. Witnessing the interplay of ecosystems, we learn about the delicate balance that sustains life. Special features include breathtaking landscapes, unique flora and fauna, and insights from local guides who share their knowledge and stories.",
      thirdDescription:
        "In conclusion, the beauty of nature is a treasure that should be cherished and protected. Our adventures remind us of the importance of preserving our environment for future generations. Through responsible travel and a commitment to sustainability, we can ensure that these breathtaking landscapes and diverse ecosystems remain intact. As we continue to explore the world, let us be mindful of our impact and strive to be good stewards of the planet. Together, we can create a legacy of conservation and appreciation for the natural wonders around us.",
      additionalImages: [Addimg1, Addimg2, Addimg3],
    },
    categories: {
      Fashion: 16,
      Food: 20,
      Music: 36,
      Travel: 10,
    },
    achievements: [
      {
        number: "12",
        date: "October 2021",
      },
      {
        number: "10",
        date: "September 2021",
      },
      {
        number: "7",
        date: "August 2021",
      },
    ],
    recentPosts: [
      {
        title: "10 Essential Tips for Traveling Sustainably",
        date: "2024-09-15",
        image: "/src/assets/images/blob 01",
        name: "John Doe",
      },
      {
        title: "Exploring the Culinary Delights of Italy",
        date: "2024-09-08",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
      {
        title: "Music Festivals Around the World: A Comprehensive Guide",
        date: "2024-09-01",
        image: "/src/assets/images/blobD 02",
        name: "John Doe",
      },
    ],
  },
];


export default blobsData;