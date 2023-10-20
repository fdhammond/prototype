type ButtonProps = {
  icon?: JSX.Element;
  text: string;
  animation?: string;
  blackBackground?: boolean;
};

export default function Button({
  icon,
  text,
  animation,
  blackBackground,
}: ButtonProps) {
  return (
    <button
      className={`border rounded-[50px] border-secondary py-4 px-4 mt-4 flex justify-center items-center text-2xl ${animation} ${
        blackBackground ? "bg-secondary text-white" : ""
      }`}>
      {icon}
      {text}
    </button>
  );
}
