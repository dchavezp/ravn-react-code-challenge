import { StyledActions, StyledTopNavigation } from "./top-navigation-bar.style";
import {
  RiSearchLine,
  RiNotification3Line,
  RiCloseCircleLine,
} from "react-icons/ri";
import { Avatar } from "../Avatar";
import { Input } from "../Input";
import { AnimatePresence, motion } from "framer-motion";
interface TopNavigationBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const TopNavigationBar: React.FC<TopNavigationBarProps> = ({
  query,
  setQuery,
}) => {
  return (
    <StyledTopNavigation>
      <RiSearchLine size={24} />
      <Input
        weight="normal"
        placeholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <StyledActions>
        <AnimatePresence>
          {query !== "" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RiCloseCircleLine
                size={24}
                onClick={() => {
                  setQuery("");
                }}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
        <RiNotification3Line size={24} />
        <Avatar
          sizeVariant="md"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=60"
          alt="avatar"
        />
      </StyledActions>
    </StyledTopNavigation>
  );
};
