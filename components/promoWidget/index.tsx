import Image from 'next/image';
import Button from '../button';
import { GoArrowRight } from 'react-icons/go';
export default function PromoWidget() {
  return (
    <div className="bg-primary-500 flex-item-center flex-col text-center gap-6 rounded-lg p-4 md:px-8 md:py-8 text-white">
      <h3 className="font-semibold order-2 md:order-1 text-xl">
        Get Started with KoinX for FREE
      </h3>
      <p className="order-3 md:order-2 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, libero.
        Tenetur officiis ratione eum! Doloribus eos.
      </p>
      <Image
        className="order-1 md:order-3"
        src="/promo.svg"
        alt="promotion"
        width={120}
        height={120}
      />
      <Button
        className="order-4 text-sm gap-2 flex-item-center"
        variant="secondary"
      >
        Get started for FREE
        <GoArrowRight />
      </Button>
    </div>
  );
}
