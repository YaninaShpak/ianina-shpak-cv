import DownloadButton from "@/app/components/buttons/DownloadButton/DownloadButton";
import "./about.scss";
import ContentList from "@/app/components/content/ContentList/ContentList";
import ExperienceBlock from "@/app/components/content/ExperienceBlock/ExperienceBlock";
import experienceList from "@/app/data/experienceList";
import educationList from "@/app/data/educationList";

export default function About() {
  return (
    <section className="aboutPage">
      <h2>О себе</h2>
      <div className="aboutWrapper">
        <div className="aboutInfo">
          <p>
            Frontend-разработчик с коммерческим опытом разработки и поддержки продакшн-продуктов. Мой основной стек: React, JavaScript, TypeScript, Next.js. Работаю с REST API, управлением состоянием (Redux Toolkit, Zustand).
            В соседнем разделе находятся мои проекты: сайт по подбору коктейлей, приложение для подсчета бюджета на день.
          </p>
          <p>
            {" "}
            Участвую в полном цикле разработки: от проектирования задач, компонентов и API до оптимизации производительности. Самостоятельно принимаю технические решения, отвечаю за качество кода, провожу code review. Хорошо нахожу причины проблем как на стороне фронтенда, так и бэкенда.
          </p>
          <p>
            {" "}
            Еще у меня есть{" "}
            <a
              className="aboutLink"
              href="https://www.codewars.com/users/rsschool_acb9f0874a626120"
              target="_blank"
            >
              профиль на Codewars
            </a>{" "}
            с уровнем 5kyu.
          </p>
        </div>

        <DownloadButton text="Скачать резюме в pdf" />
        <div className="experience blockWrapper">
          <h3>Опыт работы</h3>
          {experienceList.map((experience) => (
            <ExperienceBlock key={experience.position} {...experience} />
          ))}
        </div>
        <div className="blockWrapper">
          <h3>Курсы</h3>
          <ContentList items={educationList} />
        </div>
      </div>
    </section>
  );
}
