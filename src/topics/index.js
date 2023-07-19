import React, { useState } from "react";
import { TopicList } from "../components/TopicList/TopicList";
import { Heading } from "../components/Heading/Heading";
import { TopicsWrapper } from "./styles";

export const Topics = () => {
  const [topics, setTopics] = useState();
  return (
    <TopicsWrapper>
      <Heading title={"Topics"} />
    </TopicsWrapper>
  );
};
