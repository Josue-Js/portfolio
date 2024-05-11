import { motion } from 'framer-motion';
import { PenNib, Code } from '@phosphor-icons/react';
import { useLang } from "@/hooks/useLang";

import { Title } from "./Title";


export function Skills() {

  const { scoped } = useLang();

  return (
    <section
      id={scoped.navbar.navLink_3rd.replace(' ', '-').toLowerCase()}
      className="py-8 md:py-11 lg:py-[95px]"
    >

      <Title
        title={scoped.skills.title}
        subTitle={scoped.skills.subtitle}
      />

      <div className="flex gap-10 flex-wrap md:justify-between md:flex-nowrap">

        <motion.div
          initial={{ opacity: 0, y: -70, }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.8, }}
        >
          <PenNib size={32} className="fill-bleu-de-france" />

          <h1 className="text-2xl mt-3 mb-5">
            Front End
          </h1>
          <p className="text-base text-independence max-w-[700px] md:max-w-[700px]">
            {scoped.skills.frontEnd_description}
          </p>
        </motion.div>

        <span className='w-[1px] h-52 bg-bright-gray' />

        <motion.div
          initial={{ opacity: 0, y: -70, }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.8, }}
        >
          <Code size={32} className="fill-bleu-de-france" />

          <h1 className="text-2xl mt-3 mb-5">
            Back End
          </h1>
          <p className="text-base text-independence max-w-[700px] md:max-w-[700px]">
            {scoped.skills.backend_description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}