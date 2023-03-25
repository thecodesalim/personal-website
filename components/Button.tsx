import { motion } from "framer-motion";

export default function Button({
  title,
  onClick,
  hidden,
}: {
  title: string;
  onClick: React.MouseEventHandler;
  hidden: boolean;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={
        hidden ? " hidden" : "border rounded-md text-black text-sm p-1 px-4"
      }
      onClick={onClick}
    >
      {title}
    </motion.button>
  );
}
