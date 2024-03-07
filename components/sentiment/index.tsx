import { FaInfoCircle } from 'react-icons/fa';
import { BiSolidNews } from 'react-icons/bi';
import { IoIosTrendingUp } from 'react-icons/io';

export default function Sentiment() {
  return (
    <section className="bg-white rounded-lg space-y-4 px-2 py-4 md:px-6 md:py-8">
      <h3 className="title text-2xl">Sentiment</h3>
      <h4 className="font-medium text-xl flex-item-center gap-2">
        <span>Key Events</span>
        <FaInfoCircle color="#9ca3af" />
      </h4>
      <div className="flex gap-4 overflow-x-auto">
        {/* CARD 1 */}
        <div className="flex flex-shrink-0 max-w-[500px] h-auto gap-2 p-4 bg-blue-50 rounded-lg mb-2">
          <div className="bg-blue-600 p-2 h-fit rounded-full">
            <BiSolidNews color="white" size={26} />
          </div>
          <div className="space-y-4">
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sed
              autem voluptate earum, ex doloribus, quam{' '}
            </p>
            <p className="font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              ratione deleniti corporis aperiam maxime. consequatur, tenetur ab
              dicta cupiditate voluptate dignissimos quod.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex flex-shrink-0 max-w-[500px] h-auto gap-2 p-4 bg-emerald-50 rounded-lg">
          <div className="bg-emerald-600 p-2 h-fit rounded-full">
            <IoIosTrendingUp color="white" size={26} />
          </div>
          <div className="space-y-4">
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sed
              autem voluptate earum, ex doloribus, quam{' '}
            </p>
            <p className="font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              ratione deleniti corporis aperiam maxime. consequatur, tenetur ab
              dicta cupiditate voluptate dignissimos quod.
            </p>
          </div>
        </div>
      </div>

      <h4 className="font-medium text-xl flex-item-center gap-2">
        <span>Analyst Estimates</span>
        <FaInfoCircle color="#9ca3af" />
      </h4>

      <div className="flex-item-center gap-6 md:gap-10">
        <div className="bg-emerald-50 text-4xl text-emerald-500 rounded-full w-32 h-32 flex-item-center justify-center">
          76%
        </div>
        <div className="space-y-4 w-full">
          <div className="flex gap-2 items-center">
            <div className="mr-4">Buy</div>
            <div className="w-3/5 h-2 bg-emerald-500 rounded-sm"></div>
            <div>76%</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="mr-4">Hold</div>
            <div className="w-1/12 h-2 bg-gray-300 rounded-sm"></div>
            <div>8%</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="mr-4">Sell</div>
            <div className="w-1/6 h-2 bg-red-500 rounded-sm"></div>
            <div>16%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
