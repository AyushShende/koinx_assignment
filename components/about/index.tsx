import Image from 'next/image';
import Button from '../button';
import { GoArrowRight } from 'react-icons/go';

export default function About() {
  return (
    <section className="bg-white rounded-lg space-y-4 px-2 py-4 md:px-6 md:py-8">
      <h3 className="title text-2xl mb-2">About Bitcoin</h3>
      <p className="font-semibold text-slate-800">What is Bitcoin?</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio corrupti,
        quaerat magnam voluptatem nam, delectus provident eos quae fuga Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Harum sunt,
        deleniti, esse laborum, officiis rem delectus enim ea id neque tempora
        possimus. Modi voluptates facere, omnis cum quas facilis doloribus!
        veritatis voluptas aliquam magni consectetur!
      </p>
      <p className="font-semibold text-slate-800">Lorem ipsum dolor sit amet</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quo
        laudantium doloremque nesciunt, pariatur ipsum deserunt quasi amet
        minima exercitationem vero reprehenderit dolorem iste distinctio omnis
        labore fugiat, illum possimus.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quod
        dolores maiores quo ad inventore, dignissimos labore doloremque corrupti
        accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptas repellat ratione beatae, non earum iure dignissimos similique
        eius minus? Accusamus, maxime. Architecto consequatur quasi perferendis
        ipsam necessitatibus atque debitis nemo? incidunt deleniti distinctio
        totam impedit quam odio ipsum ea minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ipsum?
        Cumque fugiat eaque amet, fugit numquam omnis quis assumenda magnam,
        aperiam quisquam iusto mollitia unde distinctio vel ut, perspiciatis
        deserunt?
      </p>
      <h3 className="title text-2xl mb-2">Already Holding Bitcoin?</h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-item-center gap-4 p-3 rounded-lg w-[400px] bg-gradient-to-br from-green-300 to-sky-800">
          <Image src="/profit.png" alt="profits" width={120} height={120} />
          <div className="space-y-4">
            <p className="text-white font-medium text-xl">
              Calculate your Profits
            </p>
            <Button
              className="text-sm gap-2 flex-item-center"
              variant="secondary"
            >
              Check Now
              <GoArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex-item-center gap-4 p-3 rounded-lg w-[400px] bg-gradient-to-br from-orange-300 to-red-600">
          <Image src="/tax.png" alt="profits" width={120} height={120} />
          <div className="space-y-4">
            <p className="text-white font-medium text-xl">
              Calculate your Tax Liability
            </p>
            <Button
              className="text-sm gap-2 flex-item-center"
              variant="secondary"
            >
              Check Now
              <GoArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
