"use client";

import { lato, roboto_mono, space_mono } from "@/lib/font";
import { workHistory } from "@/lib/history";
import { projects } from "@/lib/projects";
import { skills } from "@/lib/skills";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Content = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <main className="pt-16 lg:w-1/2">
      <div className="mb-12">
        <h5
          className={`${roboto_mono.className} text-lg py-4 text-slack-900 font-bold dark:text-white`}
        >
          &#60;about-me&#62;
        </h5>
        <p
          className={`${roboto_mono.className} text-sm text-slack-900 dark:text-white mb-4`}
        >
          Yo, I'm Franz I am a web developer full stack and have been working in
          the industry for over <strong>5 years+</strong>. I have worked on a
          variety of projects, ranging from small personal websites to large
          scale enterprise applications. I am comfortable working with all
          aspects of web development, from design and front-end development to
          back-end programming and database administration. I am also
          experienced in managing web servers and have a good understanding of
          how to optimize website performance. In addition to my technical
          skills, I am also a good communicator and have a strong ability to
          work in a team environment.
        </p>

        <p
          className={`${roboto_mono.className} text-sm text-slack-900 dark:text-white`}
        >
          Right now i'm trying myself pursuing to be Data Analytics / Science
          because I have always been fascinated by numbers and their role in our
          world. I want to help businesses make data-driven decisions. I love
          finding patterns in data and using my scientific and mathematical
          skills to interpret those patterns. I also enjoy using my creativity
          to solve problems. Data analytics is a rapidly growing field and I am
          excited to be a part of it. I believe that data analytics and data
          science will change the world and I want to be a part of that chang
        </p>
      </div>

      <div className="mb-12">
        <h5
          className={`${roboto_mono.className} text-lg py-4 text-slack-900 font-bold dark:text-white`}
        >
          &#60;experience&#62;
        </h5>

        {workHistory.map((d, i) => (
          <div className="relative mb-12" key={i}>
            <h4
              className={`${lato.className} text-2xl font-bold text-slack-900 dark:text-white`}
            >
              {d.position} <span className="text-sky-500">@ {d.name}</span>
            </h4>
            <h6
              className={`${roboto_mono.className} text-base py-4 text-slack-900 dark:text-white`}
            >
              {d.duration}
            </h6>
            <p
              className={`${roboto_mono.className} text-sm text-slack-900 dark:text-white`}
            >
              {d.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h5
          className={`${roboto_mono.className} text-lg py-4 text-slack-900 font-bold dark:text-white`}
        >
          &#60;skills&#62;
        </h5>

        <p
          className={`${roboto_mono.className} text-sm text-slack-900 dark:text-white mb-12`}
        >
          As a seasoned web developer, I have a thorough understanding of of a
          wide range of technologies and frameworks. I have knowledge and
          experience in HTML, CSS, and JavaScript are examples of front-end
          development languages. as well as backend languages such as PHP and
          Python. I have knowledgeable about databases such as MySQL,
          PostgreSQL, and MongoDB, and have worked with web frameworks such as
          Django, VueJS, and React. I have a keen sense of detail and am capable
          of to create visually appealing designs that are also user-friendly
          user-friendly.
        </p>

        {mounted === true &&
          skills.map((d, i) => (
            <div key={i} className="mb-8">
              <h5
                className={`${space_mono.className} text-lg font-bold text-slack-900 dark:text-white mb-12`}
              >
                {d.type}
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {d.list.map((s, ii) => (
                  <div className="card-skills" key={ii}>
                    <Image
                      src={theme === "light" ? s.src.light : s.src.dark}
                      alt={s.name}
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      <div className="mb-12 w-full">
        <h5
          className={`${roboto_mono.className} text-lg py-4 text-slack-900 font-bold dark:text-white`}
        >
          &#60;projects&#62;
        </h5>

        {projects.map((p, i) => (
          <Link target="_blank" href={p.link} key={i}>
            <div className="flex items-center w-full gap-8 mb-8">
              <div className="w-3/5">
                <h1
                  className={`${space_mono.className} text-lg font-bold text-slack-900 dark:text-white mb-4`}
                >
                  {p.name}
                </h1>

                <p
                  className={`${roboto_mono.className} text-sm text-slack-900 dark:text-white mb-12`}
                >
                  {p.description}
                </p>

                <div className="flex items-center gap-4">
                  {p.tools.map((t, ii) => (
                    <div
                      key={ii}
                      className={`${roboto_mono.className} bg-sky-500 p-2 rounded-lg text-xs text-white`}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-2/5">
                <Image
                  src={p.image}
                  alt={p.name}
                  className="w-auto h-auto"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mb-12 w-full">
        <h5
          className={`${roboto_mono.className} text-lg py-4 text-slack-900 font-bold dark:text-white`}
        >
          &#60;contact&#62;
        </h5>

        <p
          className={`${roboto_mono.className} text-xl italic text-slack-900 dark:text-white`}
        >
          Feel free to drop to my email
          <a
            href="mailto:ikigamidevs.15@gmail.com"
            className="ml-4 underline underline-offset-8"
          >
            ikigamidevs.15@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
};
export default Content;
