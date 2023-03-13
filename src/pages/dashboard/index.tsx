import { Modal } from "@/components";
import { TaskMutations } from "@/features";
import { ViewTask } from "@/features/ViewTasks";
import { motion } from "framer-motion";
export const DashboardPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Modal>
          <TaskMutations isEdit={false} />
        </Modal>
        <ViewTask />
      </motion.div>
    </>
  );
};
