import "./index.css";
import Lottie from 'react-lottie';
import animationData from '../public/controller.json';

function LandingPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="app-container flex flex-wrap text-slate-800 w-full">
      {/* Left Section */}
      <div className="relative hidden h-screen select-none flex-col justify-center bg-gray-800 text-center md:flex md:w-1/3">
        <div className="mx-auto w-full max-w-lg rounded-lg object-cover">
          <Lottie options={defaultOptions} />
        </div>
        <div className="mx-auto px-8 text-white">
          <p className="my-6 text-4xl font-bold leading-10">
            We&apos;ll do the{' '}
            <span className="truncate border-b-8 border-yellow-400 font-bold text-yellow-400">
             heavy lifting
            </span>
          </p>
          <p className="mb-4 text-lg font-medium">
            Crafting the impossible, one journey at a time.
          </p>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex w-full flex-col md:w-2/3">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <a
            href="#"
            className="text-2xl font-bold text-yellow-400 bg-gray-800 px-2 py-1"
            style={{ fontFamily: "Pixeloid" }}
          >
            cheerpx-docs.com
          </a>
        </div>
        <div className="my-auto flex max-w-screen-md flex-col justify-center px-6 md:pl-12 pt-8 sm:pt-0 md:justify-start">
          <p className="text-center text-4xl font-bold md:text-left" style={{ fontFamily: "Pixeloid" }}>
            Are you ready to time travel!!!!
          </p>
          <div className="flex flex-col items-stretch pt-6 pb-8 md:pt-8">
            <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
              <div className="block">
                <p className="mb-1 mt-2 text-xl text-gray-600" style={{ fontFamily: "Pixeloid" }}>
                  Interactive Documentation
                </p>
                <p className="text-base text-gray-700">
                  Learn how to leverage CheerpX to craft the impossible—experiment with legacy tools and modern web technologies right in your browser.
                </p>
              </div>
              <div className="block">
                <p className="mb-1 mt-2 text-xl text-gray-600" style={{ fontFamily: "Pixeloid" }}>
                  Explore Tutorials
                </p>
                <p className="text-base text-gray-700">
                  Follow hands-on tutorials and revive old tech in new ways. Each journey is a step toward making the impossible, possible.
                </p>
              </div>
              <div className="block sm:col-span-2">
                <p className="mb-1 mt-2 text-xl text-gray-600" style={{ fontFamily: "Pixeloid" }}>
                  Sandbox Playground
                </p>
                <p className="text-base text-gray-700">
                  Dive into the sandbox and experiment without limits. Bring together vintage software and modern code seamlessly.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="mt-6 rounded-full text-yellow-400 bg-gray-800 px-4 py-2 text-center text-base font-semibold shadow-md outline-none ring-yellow-500 ring-offset-2 transition hover:bg-yellow-400 focus:ring-2 md:w-40"
              style={{ fontFamily: "Pixeloid" }}
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;