import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { StyledSettings } from "./settings.style";
import { Avatar, Error } from "@/components";
import useApolloQuery from "@/hooks/useApolloQuery";
import { GET_PROFILE } from "@/graphql/queries/profile";
import { User } from "@/model/user";
export const SettingsPage: React.FC = () => {
  const {
    data: user,
    loading,
    error,
  } = useApolloQuery<{ profile: User }>(GET_PROFILE);
  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <StyledSettings>
          <Error
            message={"Response not successful. Check your internet connection"}
          />
        </StyledSettings>
      </motion.div>
    );
  }
  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <StyledSettings>Loading Profile Data...</StyledSettings>
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledSettings>
        <h1>Profile Settings</h1>
        <div className="profile">
          <Avatar sizeVariant="lg" src={user?.profile.avatar} />
          <h2>{user?.profile.fullName}</h2>
          <div>Email: {user?.profile.email}</div>
          <div>Type: {user?.profile.type}</div>
          <div>
            Date Created:{" "}
            {format(
              new Date(user?.profile.createdAt ?? new Date()),
              "d MMMM, yyyy"
            )}
          </div>
          <div>
            Updated At:{" "}
            {format(
              new Date(user?.profile.updatedAt ?? new Date()),
              "d MMMM, yyyy"
            )}
          </div>
        </div>
      </StyledSettings>
    </motion.div>
  );
};
