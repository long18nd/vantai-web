interface AboutCardProps {
  icon: string;
  cout: string;
  text: string;
}

const AboutCard = ({ icon, cout, text }: AboutCardProps) => {
  return (
    <div className="w-[154px] h-[10p6x] flex flex-col items-center justify-center pr-[12px]">
      <img className="w-[60px] h-[42px]" src={icon} />
      <span className="text-blue-600 text-center text-3xl mt-[12px]">
        {cout}
      </span>
      <span className="text-center text-[#5b5b5b] text-xs">{text}</span>
    </div>
  );
};

export default AboutCard;
