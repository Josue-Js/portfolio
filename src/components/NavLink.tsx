import Link from 'next/link';
import { motion } from 'framer-motion'

type Props = {
  index: number;
  title: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>


export function NavLink({ index, title, ...rest }: Props) {
  return (
    <motion.li
      className='py-4 overflow-hidden group md:py-0'
      initial={{ opacity: 0, y: -40, }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, ease: 'easeInOut', duration: 0.4 }}
    >
      <Link
        {...rest}
        href={`#${title.replace(' ', '-').toLowerCase()}`}
        className='font-medium text-3xl transition-transform text-white after:w-full after:h-[2px] after:bg-white after:block after:-translate-x-[110%] after:transition-transform group-hover:after:-translate-x-0 after:duration-500 md:text-eerie-black md:text-base md:after:bg-independence uppercase'
      >
        {title}
      </Link>
    </motion.li>
  );
}