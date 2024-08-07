import { useOutletContext } from "react-router-dom";
import Card from "../card/Card";

function Home() {
  const { imageUrl, fontColor } = useOutletContext();
  const cards = [
    { "text": "Gmail", "link": "https://mail.google.com", "description": "Email service, communication, inbox organization, Google integration, search functionality, security, storage." },
  { "text": "Google Drive", "link": "https://drive.google.com", "description": "Cloud storage, file sharing, document collaboration, Google integration, backup, synchronization, file organization." },
  { "text": "Google Photos", "link": "https://photos.google.com", "description": "Photo storage, image organization, automatic backup, sharing, editing tools, cloud access, Google integration." },
  { "text": "YouTube", "link": "https://youtube.com", "description": "Video sharing, content creation, streaming, playlists, channels, subscriptions, recommendations, community engagement." },
  { "text": "WhatsApp", "link": "https://www.whatsapp.com", "description": "Messaging app, text and voice communication, file sharing, video calls, group chats, end-to-end encryption, cross-platform." },
  { "text": "Instagram", "link": "https://www.instagram.com", "description": "Photo and video sharing, social networking, stories, reels, hashtags, followers, content discovery, social engagement." },
  { "text": "Twitter", "link": "https://twitter.com", "description": "Microblogging, social networking, tweets, hashtags, trending topics, real-time updates, follower interactions, news." },
   { text: "Google", link: "https://google.com", description: "Search engine, technology giant, innovative, advertising, Android, AI, cloud services, maps, YouTube, research." },
    { text: "Github", link: "https://github.com", description: "GitHub is a platform for version control and collaborative software development." },
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
        <h2 className="text-center pt-16 text-2xl">Welcome, Home!</h2>
      <div className="items-center justify-center template" style={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: "13px" }}>
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
