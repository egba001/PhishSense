import { Disclosure } from '@headlessui/react';
import { BiChevronDown } from 'react-icons/bi';

const FaqComponent = () => {
  return (
    <div className="w-full px-4 pt-6 pb-6 lg:pt-16">
      <div className="mx-auto w-full rounded-2xl  p-2">
        <Disclosure>
          {({ open }) => (
            <div className='border-b border-b-dark pt-9 lg:pt-20'>
              <Disclosure.Button className="flex w-full justify-between px-4 py-2  text-left text-sm font-medium text-dark hover:bg-blue/[.50] pb-4 focus:outline-none">
                <span className='lg:text-2xl text-md'> What is phishsense and how does it work?</span>
                <BiChevronDown
                  className={`${
                    open ? 'rotate-180 transform transition-all duration-200' : ''
                  } h-5 w-5 text-dark`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-xl text-dark">
              Phishsense is an AI-driven platform that verifies the legitimacy of links found on social media. It uses advanced algorithms to analyze links and assess their security. If a link is identified as suspicious, we provide you with alerts and guidance on how to proceed.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className='border-b border-b-dark pt-9 lg:pt-20'>
              <Disclosure.Button className="flex w-full justify-between px-4 py-2  text-left text-sm font-medium text-dark hover:bg-blue/[.50] pb-4 focus:outline-none">
                <span className='lg:text-2xl text-md'> What is phishsense and how does it work?</span>
                <BiChevronDown
                  className={`${
                    open ? 'rotate-180 transform transition-all duration-200' : ''
                  } h-5 w-5 text-dark`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-dark text-sm lg:text-xl">
              Phishsense is an AI-driven platform that verifies the legitimacy of links found on social media. It uses advanced algorithms to analyze links and assess their security. If a link is identified as suspicious, we provide you with alerts and guidance on how to proceed.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className='border-b border-b-dark pt-9 lg:pt-20'>
              <Disclosure.Button className="flex w-full justify-between px-4 py-2  text-left text-sm font-medium text-dark hover:bg-blue/[.50] pb-4 focus:outline-none">
                <span className='lg:text-2xl text-md'> What is phishsense and how does it work?</span>
                <BiChevronDown
                  className={`${
                    open ? 'rotate-180 transform transition-all duration-200' : ''
                  } h-5 w-5 text-dark`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-xl text-dark">
              Phishsense is an AI-driven platform that verifies the legitimacy of links found on social media. It uses advanced algorithms to analyze links and assess their security. If a link is identified as suspicious, we provide you with alerts and guidance on how to proceed.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className='border-b border-b-dark pt-9 lg:pt-20'>
              <Disclosure.Button className="flex w-full justify-between px-4 py-2  text-left text-sm font-medium text-dark hover:bg-blue/[.50] pb-4 focus:outline-none">
                <span className='lg:text-2xl text-md'> What is phishsense and how does it work?</span>
                <BiChevronDown
                  className={`${
                    open ? 'rotate-180 transform transition-all duration-200' : ''
                  } h-5 w-5 text-dark`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-xl text-dark">
              Phishsense is an AI-driven platform that verifies the legitimacy of links found on social media. It uses advanced algorithms to analyze links and assess their security. If a link is identified as suspicious, we provide you with alerts and guidance on how to proceed.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className='border-b border-b-dark pt-9 lg:pt-20'>
              <Disclosure.Button className="flex w-full justify-between px-4 py-2  text-left text-sm font-medium text-dark hover:bg-blue/[.50] pb-4 focus:outline-none">
                <span className='lg:text-2xl text-md'> What is phishsense and how does it work?</span>
                <BiChevronDown
                  className={`${
                    open ? 'rotate-180 transform transition-all duration-200' : ''
                  } h-5 w-5 text-dark`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-xl text-dark">
              Phishsense is an AI-driven platform that verifies the legitimacy of links found on social media. It uses advanced algorithms to analyze links and assess their security. If a link is identified as suspicious, we provide you with alerts and guidance on how to proceed.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default FaqComponent;
