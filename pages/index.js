import Layout from "../components/MyLayout.js";
import Box from "../components/Box";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <Layout bg="#111111">
      <header className="header">
        <h1 className="name">SALIM ABUBAKAR</h1>
      </header>

      <section className="bio">
        <motion.div
          animate={{ x: 100, y: 100, opacity: 1 }}
          transition={{
            delay: 0.5,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 2 },
          }}
        >
          <Box text="Software Engineer & Product Designer" width={32.5} />
          <Box text="Keen in designing & building functional UIs" width={34} />
        </motion.div>
      </section>

      <section className="open-viewer">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://github.com/thecodesalim"
        >
          github
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://twitter.com/TheCodeSalim/"
        >
          twitter
        </motion.a>
      </section>

      <style>
        {`

        .left {
          display: flex;
          align-self: flex-end
        }
          .open-viewer{
            grid-row: 3; 
            display: flex;
            flex-direction: row;
            grid-column: 1/3;
          }
          .header {
            display: flex;
            flex-direction:  row;
            align-items: flex-end;
            grid-row: 1;      
          }
          .linkHeader {
            font-style: italic;
          }

          .name {
            font-weight: 400;
            font-size: 18px;
            grid-row: 2;
            margin: 10px;
            margin-left: 20px;
          }

          .bio {
            margin: 20px;
            grid-row: 2;
            grid-column: 1/3;
          }

          ul {
            list-style-type: none;
          }

          .link {
            margin: 20px;
            grid-row: 1;
          }

          @media only screen and (max-width: 600px) {
            .open-viewer {
              display: flex;
              flex-direction: column;
            }
          }

          a {
            margin-left: 20px;
            text-decoration: none;
            color: #e1ad01;
            display: inline-block;
            transition: transform 0.3s ease-out;
            text-decoration: underline;
          }

          .links {
            grid-area: 4;
          }

          @media screen and (max-width: 600px) {
            body {
              background-color: olive;
            }

            .link {
              grid-row: 4;
              grid-column: 1;
            }

          }
        `}
      </style>
    </Layout>
  );
}
