import { Tab } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { SiMicrosoftazure, SiReact } from "react-icons/si";
import buildClassNames from "../helpers/cssClassFormatter";
import AnchorLink from "./AnchorLink";
import Subtitle from "./Subtitle";
import Text from "./Text";

interface AboutTab {
  tabName: string;
  title: ReactNode;
  subtitle: string;
  content: ReactNode[];
}

const tabs: AboutTab[] = [
  {
    tabName: "Front-end",
    title: (
      <Subtitle>
        Front-end <SiReact className="ml-2" />
      </Subtitle>
    ),
    subtitle: "React + TypeScript",
    content: [
      <Text>
        This app was originally made using{" "}
        <AnchorLink href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor">
          .NET Blazor WASM
        </AnchorLink>{" "}
        however I recently decided to start learning{" "}
        <AnchorLink href="https://react.dev/">React</AnchorLink> and saw this as
        a good oppurtunity to solidify some knowledge by re-writing this app
        from the ground up using React with{" "}
        <AnchorLink href="https://www.typescriptlang.org/">
          TypeScript
        </AnchorLink>
        .
      </Text>,
      <Text>
        Overall I've found building front-end apps far more enjoyable using
        React & TypeScript dispite the steep learning-curve coming from a purely
        .NET & C# background. Both the developer experience and performance of
        the app have improved dramatically after switching front-end
        technologies.
      </Text>,
      <Text>
        This app is styled using a cool CSS framework called{" "}
        <AnchorLink href="https://tailwindcss.com/">TailwindCSS</AnchorLink>.{" "}
        <AnchorLink href="https://postcss.org/">PostCSS</AnchorLink> is used
        alongside Tailwind to generate a lightweight stylesheet based only on
        the parts of the framework that are used, as oppose to including a
        everything the framework offers.
      </Text>,
    ],
  },
  {
    tabName: "Hosting",
    title: (
      <Subtitle>
        Hosting <SiMicrosoftazure className="ml-2" />
      </Subtitle>
    ),
    subtitle: "Microsoft Azure Static Web App",
    content: [
      <Text>
        The goal of this project was to learn some new technologies and host the
        app as cheaply as possible. With this in mind I decided to go with a{" "}
        <AnchorLink href="https://azure.microsoft.com/en-gb/products/app-service/static">
          Static Web App
        </AnchorLink>{" "}
        hosted on Microsoft Azure. Static Web Apps offer global distribution of
        static assets (the Blazor Webassembly app in this case) and offer
        integrated hosting for Azure Function App APIs.
      </Text>,
      <Text>
        Another cool feature of Static Web Apps is Azure's integration with
        GitHub actions to deploy both the client and server simultaneously and
        provide automatically deployed staging environments for pull-requests
        opened to the main branch. This made testing deployed changes much
        easier and cheaper than deploying an isolated testing/GA environment
        before releasing to the live version of the app.
      </Text>,
      <Text>
        Using Static Web Apps on Azure has meant that I have been able to build,
        deploy and serve this site completely free (with the exception of the
        domain name). The next thing on the roadmap is building a simple blog
        using an{" "}
        <AnchorLink href="https://azure.microsoft.com/en-gb/products/azure-sql/database">
          Azure SQL database
        </AnchorLink>{" "}
        where I'll document the full process of writing and deploying this app
        so check back again soon.
      </Text>,
    ],
  },
];

export default function AboutTabs() {
  return (
    <Tab.Group as="div" className="mt-4">
      <div className="-mx-4 flex overflow-x-auto sm:mx-0">
        <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
          <Tab.List className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <Tab
                key={tab.tabName}
                className={({ selected }) =>
                  buildClassNames(
                    selected
                      ? "border-gray-300 text-gray-200"
                      : "border-transparent hover:border-gray-300 hover:text-gray-200",
                    "whitespace-nowrap border-b-4 py-6 text-sm font-medium"
                  )
                }
              >
                {tab.tabName}
              </Tab>
            ))}
          </Tab.List>
        </div>
      </div>

      <Tab.Panels as={Fragment}>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.tabName} className="pt-10">
            {tab.title}
            <p className="font-bold text-lg my-4">Tech: {tab.subtitle}</p>
            {tab.content.map((content, index) => (
              <Fragment key={index}>{content}</Fragment>
            ))}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
