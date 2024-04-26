import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import Subtitle from "./Subtitle";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AboutTabs() {
  return (
    <Tab.Group as="div" className="mt-4">
      <div className="-mx-4 flex overflow-x-auto sm:mx-0">
        <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
          <Tab.List className="-mb-px flex space-x-8">
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-gray-300 text-gray-200"
                    : "border-transparent hover:border-gray-300 hover:text-gray-200",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                )
              }
            >
              Front-end
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-gray-300 text-gray-200"
                    : "border-transparent hover:border-gray-300 hover:text-gray-200",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                )
              }
            >
              Back-end
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-gray-300 text-gray-200"
                    : "border-transparent hover:border-gray-300 hover:text-gray-200",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                )
              }
            >
              Hosting
            </Tab>
          </Tab.List>
        </div>
      </div>

      <Tab.Panels as={Fragment}>
        <Tab.Panel className="space-y-16 pt-10">
          <Subtitle>Front-end</Subtitle>
        </Tab.Panel>
        <Tab.Panel className="space-y-16 pt-10">
          <Subtitle>Back-end</Subtitle>
        </Tab.Panel>
        <Tab.Panel className="space-y-16 pt-10">
          <Subtitle>Hosting</Subtitle>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
