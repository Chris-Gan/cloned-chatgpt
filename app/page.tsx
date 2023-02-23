import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import {
  capabilitiesQuestions,
  examplesQuestions,
  limitationsQuestions,
} from "../constants/conversationSection";
import IntroductionColumn from "../components/IntroductionColumn";
const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
        <IntroductionColumn
          header="Examples"
          icon={<SunIcon className="h-8 w-8" />}
          questionsArr={examplesQuestions}
        />
        <IntroductionColumn
          header="Capabilities"
          icon={<BoltIcon className="h-8 w-8" />}
          questionsArr={capabilitiesQuestions}
        />
        <IntroductionColumn
          header="Limitations"
          icon={<ExclamationTriangleIcon className="h-8 w-8" />}
          questionsArr={limitationsQuestions}
        />
      </div>
    </div>
  );
};

export default HomePage;
