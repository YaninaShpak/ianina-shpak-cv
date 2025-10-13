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
            Фронтенд-разработчик с опытом написания кода на <b>JavaScript</b> и <b>TypeScript</b>, навыками адаптивной и кроссбраузерной верстки с
            использованием <b>HTML</b>, <b>CSS</b>, <b>SCSS</b>.
            Свои проекты я пишу на <b>React</b> и <b>Next.js</b>, для
            управления состоянием использую — <b>Redux Toolkit</b>. В соседнем разделе
            находятся мои проекты: сайт по подбору коктейлей, приложение для
            подсчета бюджета на день. Еще у меня есть{" "}
            <a
              className="aboutLink"
              href="https://www.codewars.com/users/rsschool_acb9f0874a626120"
              target="_blank"
            >
              профиль на Codewars
            </a>{" "}
            с уровнем 5kyu.
          </p>
          <p>
            {" "}
            Помимо технических навыков, легко погружаюсь в новую
            профессиональную область, умею работать в быстро сменяющихся
            условиях. Есть опыт управления командой, взаимодействия с
            заказчиками/клиентами. Способна разбираться в деталях, изучать
            процессы, быстро находить взаимосвязи.
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
