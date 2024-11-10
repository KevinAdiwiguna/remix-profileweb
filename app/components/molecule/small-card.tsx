interface SmallCardProps {
  icons: React.ReactNode | string;
  title: string;
  description: string;
}

export const SmallCard = ({ description, icons, title }: SmallCardProps) => {
  return (
    <div className="cursor-pointer flex gap-4 items-center overflow-hidden hover:bg-neutral-700 hover:bg-opacity-80 py-3 px-2 rounded-lg duration-300">
      <div className="bg-[#88888830] rounded-xl text-custom-secondary w-fit p-2 text-xl sm:text-2xl">{icons}</div>
      <div>
        <p className="text-custom-tertiary text-xs font-medium uppercase sm:text-sm">{title}</p>
        <p className="text-white text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  );
};

