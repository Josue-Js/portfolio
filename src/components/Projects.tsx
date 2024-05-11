import { useLang } from "@/hooks/useLang";
import { IRepository } from "@/services/github";

import { Title } from "./Title";
import { Project } from "./Project";


type Props = {
  projects: IRepository[]
}



export function Projects({ projects }: Props) {

  const { scoped } = useLang();

  return (
    <section
      id={scoped.navbar.navLink_2nd.replace(' ', '-').toLowerCase()}
      className="py-8 md:py-11 lg:py-[95px]"
    >
      <Title
        title={scoped.project.title}
        subTitle={scoped.project.subtitle}
      />
      <div>
        {projects.map((project, index) => (
          <Project
            key={project.id}
            algin={index % 2 === 0 ? 'right' : 'left'}
            project={project}
          />
        ))}

      </div>
    </section>

  );
}




