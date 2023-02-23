import { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  header: string;
  questionsArr: string[];
}
const IntroductionColumn: FC<Props> = ({ icon, header, questionsArr }) => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mb-5">
        {icon}
        <h2>{header}</h2>
      </div>
      <div className="space-y-2">
        {questionsArr.map((item) => (
          <p key={item} className="infoText">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default IntroductionColumn;
