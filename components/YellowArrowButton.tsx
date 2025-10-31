import { ArrowRight } from "lucide-react";

interface YellowArrowButtonProps {
  text: string;
  onClick?: () => void;
}

export default function YellowArrowButton({
  text,
  onClick,
}: YellowArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-4 right-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-lg transition-colors flex items-center gap-2"
    >
      {text}
      <ArrowRight className="w-5 h-5 text-black -rotate-45" />
    </button>
  );
}
