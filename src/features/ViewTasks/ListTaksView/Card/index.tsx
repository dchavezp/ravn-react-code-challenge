import React from "react";
import { differenceInDays } from "date-fns";
import {
  StyledCard,
  StyledCardRow,
  StyledReaction,
  StyledReactionsList,
  StyledTagsRow,
} from "./card.style";
import {
  RiMoreFill,
  RiNodeTree,
  RiAttachment2,
  RiChat3Line,
  RiAlarmLine,
} from "react-icons/ri";
import { Avatar, Menu, Tag } from "@/components";

import { setColorFromEstimatedDate } from "@/utils/setColorFromEstimatedDate";
import { formatEstimatedDate } from "@/utils/formatEstimatedDate";
import { CardOptions } from "./card-options";
import { Task } from "@/model/task";
export const Card: React.FC<Task> = ({
  id,
  name,
  dueDate,
  createdAt,
  creator,
  pointEstimate,
  tags,
}) => {
  return (
    <StyledCard>
      <StyledCardRow>
        {name}
        <Menu position="right" options={<CardOptions />} bottom="-64px">
          <RiMoreFill size={24} />
        </Menu>
      </StyledCardRow>
      <StyledCardRow>
        {pointEstimate} Points
        <Tag
          backgroundColor={setColorFromEstimatedDate(
            differenceInDays(new Date(dueDate), new Date(createdAt))
          )}
        >
          <RiAlarmLine />
          {formatEstimatedDate(createdAt, dueDate)}
        </Tag>
      </StyledCardRow>
      <StyledTagsRow>
        {tags.map((tag: string, index: number) => {
          return (
            <Tag
              key={id + tag}
              backgroundColor={index === 0 ? "secondary" : "tertiary"}
            >
              {tag}
            </Tag>
          );
        })}
      </StyledTagsRow>
      <StyledCardRow>
        <Avatar sizeVariant="s" src={creator.avatar} />
        <StyledReactionsList>
          <StyledReaction>
            <RiAttachment2 size={16} />
          </StyledReaction>
          <StyledReaction>
            5 <RiNodeTree size={16} />
          </StyledReaction>
          <StyledReaction>
            3 <RiChat3Line size={16} />
          </StyledReaction>
        </StyledReactionsList>
      </StyledCardRow>
    </StyledCard>
  );
};
