import { motion } from 'framer-motion';
import { IRepository } from "@/services/github";
import Link from "next/link";

type Props = {
  project: IRepository
  algin: 'left' | 'right'
}


export function Project({ project, algin }: Props) {


  return (
    <div
      className={`flex flex-col py-[60px] md:gap-8 lg:gap-20 ${algin == 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}`}

    >
      <motion.figure className="max-w-[650px] min-w-[330px]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.8, }}
      >
        <img
          className="w-auto h-auto rounded-md cursor-pointer"
          src={project.image}
          alt="preview project"
          width={1280}
          height={720}
          draggable={false}
        />
      </motion.figure>

      <div className="mt-6 lg:mt-[40px] flex-1 min-w-[350px]">
        <motion.h1
          className="font-semibold text-2xl md:text-[32px] uppercase"
          initial={{ opacity: 0, x: -70, }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.8, }}
        >
          {project.name}
        </motion.h1>

        <motion.p
          className="text-independence text-sm max-w-[562px] mt-8 mb-11"
          initial={{ opacity: 0, x: -70, }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.8, }}
        >
          {project.description}
        </motion.p>

        <Link
          href={project.homepage}
          target="_blank"
          className="relative w-fit flex items-center justify-center px-8 py-2 border-[1px] border-eerie-black rounded group overflow-hidden hover:text-white"
          type="button"
        >
          <span className="absolute top-[50%] left-[50%] bg-eerie-black group-hover:w-[4px] group-hover:h-[4px] group-hover:scale-[50] transition-transform  rounded-[50%] duration-700 -z-10"></span>
          Go website
        </Link>
      </div>
    </div>
  );
}