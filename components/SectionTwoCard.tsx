import Image from "next/image";
import YellowArrowButton from "./YellowArrowButton";

interface SectionTwoCardProps {
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  subtitle: string;
  buttonText: string;
}

export default function SectionTwoCard({
  iconSrc,
  iconWidth,
  iconHeight,
  title,
  subtitle,
  buttonText,
}: SectionTwoCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md flex items-center justify-center">
      <Image
        src="/sec2_card.svg"
        alt="Card background"
        width={400}
        height={300}
        className="object-contain"
      />
      <div className="absolute top-0 right-0">
        <Image
          src={iconSrc}
          alt="Icon"
          width={iconWidth}
          height={iconHeight}
          className="w-15 h-15"
        />
      </div>
      <div className="absolute left-7 top-4">
        <h3 className="text-yellow-400 text-md  ">{title}</h3>
        <p className="text-white text-sm mt-1 w-35">{subtitle}</p>
      </div>
      <YellowArrowButton text={buttonText} />
    </div>
  );
}
