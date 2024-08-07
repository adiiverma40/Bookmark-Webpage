import { useOutletContext } from "react-router-dom";
import Card from "../card/Card";

function Home() {
  const { imageUrl, fontColor } = useOutletContext();
  const cards = [
    { text: "Google", link: "https://google.com", description: "Search engine, technology giant, innovative, advertising, Android, AI, cloud services, maps, YouTube, research." },
    { text: "Khan Academy", link: "https://khanacademy.org", description: "Free online courses, lessons, and practice in math, science, and more." },
    { text: "Coursera", link: "https://coursera.org", description: "Online courses, specializations, and degrees from top universities and companies." },
    { text: "edX", link: "https://edx.org", description: "Online courses from the world’s best universities and institutions." },
    { text: "Wolfram Alpha", link: "https://wolframalpha.com", description: "Computational knowledge engine and online calculator." },
    { text: "Quizlet", link: "https://quizlet.com", description: "Study tools, flashcards, and games for learning." },
    { text: "Duolingo", link: "https://duolingo.com", description: "Language learning app with gamified lessons." },
    { text: "Evernote", link: "https://evernote.com", description: "Note-taking app for organizing and managing information." },
    { text: "Notion", link: "https://notion.so", description: "All-in-one workspace for notes, tasks, and collaboration." },
    { text: "Grammarly", link: "https://grammarly.com", description: "Writing assistant that checks grammar, spelling, and style." },
  ];
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        color: fontColor,
      }}
    >
        <h2 className="text-center">Welcome, Home!</h2>
      <div className="items-center justify-center" style={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: "13px" }}>
      {cards.map((card, index) => (
        <Card
          key={index}
          text={card.text}
          link={card.link}
          description={card.description}
        />
      ))}
    </div>
    </div>
  );
}

export default Home;
