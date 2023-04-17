import { motion } from "framer-motion";

export default function Link({ link, title }: { link: string; title: string }) {
  return (
    <motion.li className=" text-sm transition ease-in-out delay-150 text-link hover:text-secondary duration-300">
      <a href={`${link}`}>{title} </a>
    </motion.li>
  );
}
