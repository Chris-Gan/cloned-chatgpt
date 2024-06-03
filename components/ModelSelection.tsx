"use client";

import Select from "react-select";
import useSWR from "swr";

const fetchModels = async () =>
  fetch("/api/getModels").then((res) => res.json());

const ModelSelection = () => {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "gpt-3.5-turbo-instruct",
  });

  return (
    <div className="mt-2">
      <Select
        className="mt-2 bg-[#434654] border-[#434654]"
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        styles={{
          control: (state) => ({
            ...state,
            backgroundColor: "#434654",
            borderColor: "#434654",
          }),
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
