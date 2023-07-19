import React from 'react';
import { ListWrapper } from './styles';
import { Heading } from '../Heading/Heading';
import { useParams } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../helper';

export const TopicList = () => {
    const {topic} = useParams();
    const topicName = capitalizeFirstLetter(topic);
  return (
    <ListWrapper>
        <Heading title={topicName}/>
    </ListWrapper>
  )
}
