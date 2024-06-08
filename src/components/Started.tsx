import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion'

import { GithubLogo, WhatsappLogo, LinkedinLogo, Envelope } from '@phosphor-icons/react';
import { useLang } from '@/hooks/useLang';
import { useEffect } from "react";



export function Started() {

  const { scoped } = useLang();

  return (
    <section className="relative flex flex-col pt-6 pb-8 md:pb-11 overflow-x-hidden lg:h-[calc(100vh-50px)]">

      <motion.h1
        className="text-[90px] font-extrabold text-lotion  absolute -z-10 md:text-9xl top-[20%] lg:text-[200px]"
        initial={{ textShadow: '0 0 0 rgba(0, 0, 0, 0)' }}
        animate={{ textShadow: '0 0 30px rgba(0, 0, 0, 0.04)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Developer
      </motion.h1>

      <div className="flex items-end flex-col lg:flex-row flex-1 lg:justify-end lg:items-center ">

        <motion.figure
          className="w-[80%] mb-5 md:w-fit"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/hero.png"
            alt="hero"
            width={564}
            height={426}
            fetchPriority="high"
          />
        </motion.figure>

        <div className="flex items-center gap-4 pr-3 lg:flex-col lg:absolute bottom-6 lg:pr-0">
          <motion.span
            className="hidden lg:inline-block w-[1px] bg-eerie-black lg:h-56 origin-top  h-0"
            initial={{ height: 224, scaleY: 0 }}
            animate={{ height: 224, scaleY: 1, }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.3, ease: 'easeOut' }}
          >
            <Link href="https://wa.me/5543984137713">
              <WhatsappLogo size={24} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.3, ease: 'easeOut' }}
          >
            <Link href="https://github.com/josue-js" target="_blank">
              <GithubLogo size={24} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.3, ease: 'easeOut' }}
          >
            <Link href="mailto:josuesilva.js34.js@gmail.com">
              <Envelope size={24} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3, ease: 'easeOut' }}
          >
            <Link href="https://www.linkedin.com/in/josue-silva-694875207/">
              <LinkedinLogo size={24} />
            </Link>
          </motion.div>
        </div>
      </div>


      <div className="mt-5 flex-col justify-end">
        <div className="relative mb-5">
          <motion.h2
            className="text-[32px] font-extrabold md:text-7xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >JOSUÉ SILVA</motion.h2>
          <motion.h2
            className="text-[32px] font-extrabold text-[transparent] font-outline absolute top-[1px] left-[1px] md:text-7xl md:top-1 md:left-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >JOSUÉ SILVA</motion.h2>
        </div>
        <motion.p
          className="max-w-[712px] text-independence"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {scoped.started.description}
        </motion.p>
      </div>
    </section>
  )
}