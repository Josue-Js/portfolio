import { GetStaticProps } from "next";
import { Navbar } from "../components/Navbar";
import { Started } from "../components/Started";
import { Projects } from "../components/Projects";
import { Github, IRepository } from "@/services/github";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact } from "../components/Contact";
import { useEffect } from "react";
import { useSonner, toast  } from "sonner";

type Props = {
  projects: IRepository[]
}

export default function Home({ projects }: Props) {

  const { toasts, } = useSonner()

  useEffect(() => {

    const timer = setTimeout(()=> {
          toast("This portfolio is deprecated. I'm working on new one.", {  position: 'top-right', });
    }, 2000)

   return ()=> clearTimeout(timer)
  }, []);

  return (
    <main className="max-w-[1680px] mx-auto px-4 py-6 lg:px-10 min-[1720px]:px-0">
      <Navbar />
      <div>
        <Started />
        <Projects projects={projects} />
        <Skills />
        <About />
        <Contact />
      </div>
    </main>
  );
}


export const getStaticProps: GetStaticProps = async () => {

  const github = new Github()
  const projects = await github.getRepositoryPinned();
  return {
    props: {
      projects,
    },
    revalidate: 60 * 30 // 30 min
  }
}