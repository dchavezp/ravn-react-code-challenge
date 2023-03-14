import { Modal } from "@/components";
import TaskContext from "@/context/task.context";
import { TaskMutations } from "@/features";
import { ViewTask } from "@/features/ViewTasks";
import { motion } from "framer-motion";
export const DashboardPage = () => {
  return (
    <>
      <TaskContext>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Modal>
            <TaskMutations />
          </Modal>
          <ViewTask />
        </motion.div>
      </TaskContext>
    </>
  );
};
