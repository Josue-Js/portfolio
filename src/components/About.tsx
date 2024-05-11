import { useLang } from "@/hooks/useLang";
import { Card } from "./Card";
import { Title } from "./Title";


export function About() {
  const { scoped } = useLang();

  return (
    <section
      id={scoped.navbar.navLink_4th.replace(' ', '-').toLowerCase()}
      className="py-8 md:py-11 lg:py-[95px]"
    >
      <Title
        title={scoped.about.title}
        subTitle={scoped.about.subtitle}
      />
      <div className="flex flex-col gap-8 justify-between items-center lg:flex-row">
        <p className="max-w-[852px] text-independence">
          {scoped.about.description}
        </p>
        <Card />
      </div>
    </section>
  );
}