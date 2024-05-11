import Image from 'next/image';
import { Code, GithubLogo, Coffee, FileJs, FileHtml } from '@phosphor-icons/react';
import { Splash } from './Splash';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MouseEvent, MouseEventHandler, useRef, useState } from 'react';


export function Card() {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpenCode, setIsOpenCode] = useState(false);
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]);
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]);


  const handleMouseMove = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {

    if (!ref.current) return

    const { offsetTop, offsetLeft, clientWidth, clientHeight } = ref.current
    const x = event.clientX - offsetLeft - (clientWidth / 2)
    const y = event.clientY - clientHeight - (clientHeight)


    cardX.set(x);
    cardY.set(y);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className='relative min-w-[367px] md:min-w-[587px] max-w-[588px]'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.8 }}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className='bg-lotion drop-shadow-[0_0_16px_rgba(0,0,0,0.1)]'
        style={{
          rotateX,
          rotateY
        }}
      >
        <code
          className={`absolute bg-eerie-black left-0 right-0 bottom-0 top-0 z-10 flex justify-center items-center origin-top-left ${!isOpenCode ? 'scale-0' : 'scale-[1]'} transition-all duration-500 `}

        >
          <motion.pre className='text-white mt-8'
            style={{
              transformStyle: "preserve-3d",
              perspective: 1200,
              rotateX: -rotateX,
              rotateY: -rotateY,
            }}
          >
            {`
 1           import power from 'universe';
 2
 3           power.increase({
 4            focus: 10000%,
 5            coding: 500%,
 6            bug: -99999%
 7           })
             Error:
              × Module not found: can't resolve 'universe' 😡💣
            `}

          </motion.pre>
        </code>

        <header className='relative h-[50px] flex items-center justify-between px-5 bg-eerie-black clip-path-style z-30'>
          <Code
            size={24}
            color='white'
            className='cursor-pointer'
            onClick={() => setIsOpenCode(!isOpenCode)}
          />
          <div className='flex gap-2 pb-3'>
            <FileHtml size={18} color='white' />
            <FileJs size={18} color='white' />
            <Coffee size={18} color='white' />
          </div>
        </header>

        <h2 className='ml-[20%]  -translate-y-2 font-bold text-independence'>
          TDD (TESTE DEPOIS DO DEPLOY)
        </h2>

        <footer className='w-full flex justify-between items-end'>
          <div className='flex items-center p-5 gap-3 cursor-pointer flex-1'>
            <figure className='relative bg-bright-gray rounded-[50%] w-[45px] h-[45px] md:w-[75px] md:h-[75px] shrink-0'>
              <Image
                className=""
                src="/profile.png"
                alt=""
                fill
                sizes='(min-width: 768px) 75px, 45px'
                draggable={false}
              />
            </figure>
            <div className='flex flex-col '>
              <span className='text-base'>
                Josue
              </span>
              <span className='text-sm text-independence lowercase min-w-[118px]'>
                SOFTWARE ENGINEER
              </span>
            </div>
          </div>


          <div className='relative min-w-[127px] max-w-[200px] w-full min-h-[127px] md:h-[200px] overflow-hidden'>
            <figure className='absolute w-full h-full translate-x-[25%] translate-y-[25%]'>
              <Splash />
            </figure>
          </div>
        </footer>
      </motion.div>

    </motion.div>
  );
}