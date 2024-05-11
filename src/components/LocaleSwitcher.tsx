import { useLang } from '@/hooks/useLang';
import { motion } from 'framer-motion';


export function LocaleSwitcher() {

  const { changeLang, lang } = useLang();


  return (
    <div
      className="flex"
    >
      <motion.button
        onClick={() => changeLang('PT')}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <span
          className={`font-bold cursor-pointer uppercase ${lang == 'PT' ? 'font-bold' : 'font-medium'} transition-all duration-500`}
        >
          PT
        </span>
      </motion.button>

      <span className="w-[1px] h-6 bg-eerie-black mx-3" />

      <motion.button
        onClick={() => changeLang('EN')}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <span
          className={`font-bold cursor-pointer uppercase ${lang == 'EN' ? 'font-bold' : 'font-medium'} transition-all duration-500`}
        >
          EN
        </span>
      </motion.button>
    </div>
  );
}