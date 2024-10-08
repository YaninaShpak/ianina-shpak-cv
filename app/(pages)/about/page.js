import DownloadButton from "@/app/components/buttons/DownloadButton/DownloadButton";
import "./about.scss";

export default function About() {
  return (
    <section className="aboutPage">
      <h2>О себе</h2>
      <div className="aboutWrapper">
        <div className="aboutInfo">
          <p>
            Фронтенд-разработчик с опытом адаптивной и кроссбраузерной верстки с
            использованием <b>HTML</b>, <b>CSS</b>, <b>SCSS</b>, а также
            навыками написания кода на <b>JavaScript</b> и <b>TypeScript</b>.
            Для своих проектов я использую <b>React</b> и <b>Next.js</b>, а для
            управления состоянием — <b>Redux Toolkit</b>. В соседнем разделе
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
          <div>
            <div className="experienceInfo">
              <p className="position">Редактор-аналитик</p>
              <p className="period"> 05/2018 - наст. время</p>
              <p className="company">Медиалогия</p>
              <p className="city"> Москва</p>
            </div>

            <ul className="aboutList">
              <li>
                анализ, обработка, сортировка, а также контроль реагирования на
                поступающие в систему данные
              </li>
              <li>помощь в решении проблем жителей области</li>
              <li>разработка и ведение документации по работе в системе</li>
              <li>
                12/2019 - 06/2021 - руководство отделом модерации
                <ul className="aboutSubList">
                  <li>координация работы отдела модерации</li>
                  <li>взаимодействие с заказчиком</li>
                  <li>участие в брейн штормах</li>
                  <li>ручное тестирование нового функционала</li>
                  <li>
                    реализовано более 9 поставленных мною задач по доработке
                    функционала системы
                  </li>
                  <li>обучила 5 сотрудников</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <div className="experienceInfo">
              <p className="position">Контент-редактор</p>
              <p className="period"> 06/2015 - 02/2018гг.</p>
              <p className="company">Близко.ру</p>
              <p className="city"> Екатеринбург</p>
            </div>

            <ul className="aboutList">
              <li>
                создание сайтов для клиентов на собственной платформе Blizko.ru,
                наполнение контентом
              </li>
              <li>
                сопровождение клиентов по телефону (консультирование, помощь,
                отчет о проделанной работе)
              </li>
            </ul>
          </div>
        </div>
        <div className="blockWrapper">
          <h3>Курсы</h3>
          <ul className="aboutList">
            <li>JavaScript/Front-end (RS School) - 03/2023г</li>
            <li>
              Полный курс по JavaScript и React (udemy) - 12/2021 - 2022гг.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
