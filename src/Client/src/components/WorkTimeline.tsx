import AnchorLink from "./AnchorLink";
import Text from "./Text";

interface WorkTimelineItem {
  startDate: string;
  endDate?: string | null;
  title: string;
  companyName: string;
  companyUrl: string;
  content: string[];
}

const workTimelineItems: WorkTimelineItem[] = [
  {
    startDate: "September 2021",
    title: "CTO",
    companyName: "un:hurd music",
    companyUrl: "https://unhurdmusic.com",
    content: [
      "As one of the founding developers at un:hurd music and now Chief Technology Officer, I built and scaled un:hurd's back-end and cloud infrastructure that serves automated marketing soloutions for tens-of-thousands of artists and musicians.",
      "I lead a small but incredibly talented multi-diciplinary team building on the Azure cloud using a .NET backend, React web front-end and a Swift native iOS app.",
    ],
  },
  {
    startDate: "August 2020",
    endDate: "September 2021",
    title: "Software Development Lead",
    companyName: "Vouch",
    companyUrl: "https://vouch.co.uk/",
    content: [
      "At Vouch I lead the backend build of a new version of their tenant referencing software - an AI enhanced chat-bot based system utlising Azure Cognitive Services and various supporting serverless APIs written in .NET Core and hosted on Microsoft Azure.",
    ],
  },
  {
    startDate: "May 2020",
    endDate: "July 2020",
    title: "Software Developer",
    companyName: "Paragon ID",
    companyUrl: "https://www.paragon-id.com/en",
    content: [
      "I joined Paragon ID on a short-term contract where I wrote and deployed two key projects: A complex dashboard for a large construction equipment manufacturer to track assets across various manufacturing stages and a medical assets tracking dashboard deployed and used in multiple hospitals across the UK.",
    ],
  },
  {
    startDate: "July 2019",
    endDate: "May 2020",
    title: "Software Developer",
    companyName: "Osborne Technologies",
    companyUrl: "https://www.osbornetechnologies.co.uk/",
    content: [
      "I joined Osborne Technologies as the only cloud cloud-specialist and lead a project creating the first web-based version of their flag ship visitor management software utilising ASP.NET Core MVC and Microsoft SQL Server on the Microsoft Azure cloud.",
    ],
  },
];

export default function WorkTimeline() {
  return (
    <ol className="relative border-s border-gray-600">
      {workTimelineItems.map((item, index) => (
        <li key={index} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 borderborder-gray-900 bg-gray-600"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            {item.startDate} - {item.endDate ? item.endDate : "Present"}
          </time>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {item.title} @{" "}
            <AnchorLink href={item.companyUrl}>{item.companyName}</AnchorLink>
          </h3>
          {item.content.map((content, index) => (
            <Text key={index}>{content}</Text>
          ))}
        </li>
      ))}
    </ol>
  );
}
