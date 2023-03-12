import { ViewTask } from "@/features/ViewTasks";
import React from "react";
import { motion } from "framer-motion";
export const DashboardPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ViewTask />
    </motion.div>
  );
};
