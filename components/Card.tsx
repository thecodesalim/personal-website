import { motion } from "framer-motion";

export default function Card({
  link,
  title,
  description,
}: {
  link: string;
  title: string;
  description: string;
}) {
  return (
    <a href={`${link}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className=" mt-6"
      >
        <p className=" text-sm">{title}</p>
        <p className=" text-sm text-link">{description}</p>
      </motion.div>
    </a>
  );
}
