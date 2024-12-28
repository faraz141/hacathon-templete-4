'use client';
import { useState } from 'react';

const TabbedContent = () => {
  // Define the keys for the tabs
  type TabKey = 'Description' | 'Additional Info' | 'Reviews' | 'Video';

  // Set the initial active tab
  const [activeTab, setActiveTab] = useState<TabKey>('Description');

  const tabs: TabKey[] = ['Description', 'Additional Info', 'Reviews', 'Video'];
  const content: Record<TabKey, JSX.Element> = {
    Description: (
      <div className="mt-10">
        <h3 className="text-2xl my-4 font-bold font-sans text-[#0d134e]">
          Varius tempor.
        </h3>
        <p className="text-gray-600 text-sm">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
          ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
          varius ac est bibendum. Scelerisque a, risus ac ante. Velit
          consectetur neque, elit aliquet. Non varius proin sed urna, egestas
          consequat lorem elit dictumst. Magna eget faucibus cras justo, tortor
          sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis
          justo netus dis. Eu in fringilla vulputate nunc nec. Duis, massa
          viverra.
        </p>
        <div className="mt-8">
          <h4 className="text-2xl font-bold font-sans my-4 text-[#0d134e]">
            More details
          </h4>
          <ul className="text-gray-600 text-sm list-none space-y-2">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-2xl font-bold font-sans text-[#0d134e]">
                    ➜
                  </span>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus
                  dolor ornare faucibus vel sed.
                </li>
              ))}
          </ul>
        </div>
      </div>
    ),
    'Additional Info': <div>Additional Info content goes here.</div>,
    Reviews: <div>Reviews content goes here.</div>,
    Video: <div>Video content goes here.</div>,
  };

  return (
    <div className="w-[80%] h-auto lg:h-[649px]  lg:w-[1177px] flex flex-col items-start justify-center">
      {/* Tabs */}
      <div className="flex space-x-6 lg:space-x-20  pb-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm  lg:text-2xl font-bold font-sans text-[#0d134e] ${
              activeTab === tab
                ? ' border-b-2 border-[#0d134e]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{content[activeTab]}</div>
    </div>
  );
};

export default TabbedContent;
