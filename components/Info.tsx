import { lato, roboto_mono, space_mono } from "@/lib/font";
import { socials } from "@/lib/links";
import Link from "next/link";

const Info = () => {
  return (
    <section className="py-12 lg:py-4 lg:sticky lg:top-[100px] lg:flex lg:max-h-[85vh] lg:w-1/2 lg:flex-col lg:justify-between">
      <div className="mb-8 lg:mb-0">
        <p
          className={`${roboto_mono.className} text-content-intro text-slack-900 dark:text-white`}
        >
          Yo, My name is
        </p>
        <h1
          className={`${lato.className} text-main-name text-slack-900 dark:text-white`}
        >
          Franz Monzales
        </h1>
        <h3
          className={`${space_mono.className} text-sub-name text-slack-900 dark:text-white`}
        >
          Full Stack Developer / Future Data Analytics - Science
        </h3>

        <p
          className={`${space_mono.className} text-base text-slack-900 dark:text-white`}
        >
          I'm a full-stack web developer with a passion for developing modern
          innovative, user-friendly applications.
        </p>
      </div>
      <div className="flex items-center gap-4">
        {socials.map((d, i) => (
          <Link target="_blank" href={d.href} key={i} className="w-6 h-6">
            {d.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Info;
