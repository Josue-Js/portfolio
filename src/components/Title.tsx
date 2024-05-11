import { motion } from 'framer-motion';
type Props = {
  title: string;
  subTitle: string;
}


export function Title({ title, subTitle }: Props) {

  return (
    <div className="mb-10 md:mb-20">
      <motion.h4
        className="font-semibold text-sm uppercase"
        initial={{ opacity: 0, x: -70, }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true, amount: 0.8, }}
      >
        {title}
      </motion.h4>
      <motion.div
        className="relative mb-5 md:mb-20"
        initial={{ opacity: 0, y: -70, }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.8, }}

      >
        <h2 className="text-[32px] font-extrabold md:text-[62px] capitalize">
          {subTitle}
        </h2>
        <h2 className="text-[32px] font-extrabold text-[transparent] font-outline absolute top-[1px] left-[1px] md:text-[62px] md:top-1 md:left-1 capitalize">
          {subTitle}
        </h2>
      </motion.div>
    </div>
  );
}