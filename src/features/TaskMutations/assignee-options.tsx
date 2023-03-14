import { Avatar, DropdownOption, Error } from "@/components";
import { useCurrentTask } from "@/context/task.context";
import { GET_USERS } from "@/graphql/queries/user";
import useApolloQuery from "@/hooks/useApolloQuery";
import { User } from "@/model/user";
import React, { useCallback } from "react";

export const AssigneeOptions = () => {
  const {
    data: users,
    loading,
    error,
  } = useApolloQuery<{ users: User[] }>(GET_USERS);
  const { value, setTask } = useCurrentTask();
  const handleAction = useCallback(
    (assignee: User) => {
      setTask?.({ ...value, assignee: assignee });
    },
    [value]
  );
  if (loading) {
    return <i>Loading users...</i>;
  }
  if (error) {
    return <Error message="Something went wrong Loading Users" />;
  }
  return (
    <>
      {users?.users.map((user) => {
        return (
          <DropdownOption
            key={user.id}
            action={() => {
              handleAction(user);
            }}
          >
            <Avatar sizeVariant="s" label={user.fullName} src={user.avatar} />
          </DropdownOption>
        );
      })}
    </>
  );
};
