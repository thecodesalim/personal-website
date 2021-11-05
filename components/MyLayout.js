import Meta from "./Meta";

import { motion } from "framer-motion";

export default function Layout(props) {
  return (
    <>
      <Meta />
      <motion.div
        className="layoutStyle"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.5,
            opacity: 0.8,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.05,
            },
          },
        }}
      >
        {props.children}
        <style>
          {`
            :root {
              background-color: #111111;
            }
            body {
              background: ${props.bg};
              font-weight: 300;
            }
            .layoutStyle {
              font-family: 'Inter', sans-serif;
              background: ${props.bg};
              margin: 0;
              padding: 0;
              display: grid;
              height: 98vh;
              grid-template-rows: 1fr 1fr 1fr; 
              grid-template-columns:  1fr 1fr 1fr;
              color: #D3D3D3;
            }
          `}
        </style>
      </motion.div>
    </>
  );
}
