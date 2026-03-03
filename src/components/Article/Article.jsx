import React from "react";
import {
  Main,
  Title,
  Description,
  SubTitle,
  List,
  Article,
} from "./Article.styled.js";

const activities = [
  {
    title: "Читання книг",
    description:
      "Читання книг — це інтелектуальний процес занурення в текст, який покращує роботу мозку, розвиває уяву, критичне мислення, емпатію та розширює словниковий запас. ",
    img: "https://www.google.com/imgres?q=Читання%20книг&imgurl=https%3A%2F%2Fosvitanova.com.ua%2Fckeditor_assets%2Fpictures%2F5667%2Fcontent_1438748950_1.jpg&imgrefurl=https%3A%2F%2Fosvitanova.com.ua%2Fposts%2F2036-chytannia-knyzhok-chomu-tse-vazhlyvo-ta-iak-pochaty-chytaty-kozhen-den&docid=gv1C-3UisyYHAM&tbnid=g_X-0cNNbB3TdM&vet=12ahUKEwiw0MfEmISTAxUkNxAIHRVKAt4QnPAOegQIJBAB..i&w=800&h=533&hcb=2&ved=2ahUKEwiw0MfEmISTAxUkNxAIHRVKAt4QnPAOegQIJBAB",
  },
  {
    title: "Прогулянка на природі",
    description:
      "рогулянка на природі — це релаксація та активний відпочинок, що дарує яскраві емоції, свіже повітря та єднання з навколишнім світом.",
    img: "https://www.google.com/imgres?q=Прогулянка%20на%20природі&imgurl=https%3A%2F%2Fvisitdnipro.com%2Fwp-content%2Fuploads%2F2019%2F12%2F1_WmDm9M326xfYEnRYn9GmxA-1024x683.jpg&imgrefurl=https%3A%2F%2Fvisitdnipro.com%2Fekskursii-po-dnepru%2Fprogulyanka-ekskursiya-po-samarskomu-lisu-2%2F&docid=doDOoafhZKJ6YM&tbnid=oqVUb32ADpGE2M&vet=12ahUKEwi9i6PVmISTAxWeJRAIHXP4BuYQnPAOegQIJxAB..i&w=1024&h=683&hcb=2&ved=2ahUKEwi9i6PVmISTAxWeJRAIHXP4BuYQnPAOegQIJxAB",
  },
  {
    title: "Спорт",
    description:
      "Спорт — це організована за правилами діяльність, що базується на змаганнях і тренуваннях, спрямована на розвиток фізичних чи інтелектуальних здібностей, покращення здоров'я, досягнення рекордів та слави. ",
    img: "https://www.google.com/imgres?q=Спорт&imgurl=https%3A%2F%2Ffact-news.com.ua%2Fwp-content%2Fuploads%2Fdepositphotos_446517458-stock-photo-toddler-washing-hands-soap-prevent-3.webp&imgrefurl=https%3A%2F%2Ffact-news.com.ua%2Ftsikavi-fakti-pro-sport-yaki-vam-neznajomi%2F&docid=xl4nuejuRMtMwM&tbnid=equdCXDtp9wxkM&vet=12ahUKEwi0wLzgmISTAxUIBxAIHT0OBOoQnPAOegQIGBAB..i&w=600&h=391&hcb=2&itg=1&ved=2ahUKEwi0wLzgmISTAxUIBxAIHT0OBOoQnPAOegQIGBAB",
  },
  {
    title: "Танці",
    description:
      "Танець — це вид мистецтва, що виражає емоції, думки та сюжети через ритмічні пластичні рухи тіла під музику. ",
    img: "https://www.google.com/imgres?q=Танці&imgurl=https%3A%2F%2Fdance.knukim.edu.ua%2Fwp-content%2Fuploads%2F2022%2F12%2F33F78AEE-B1C4-4CAF-90F5-589451C59F3A.jpeg&imgrefurl=https%3A%2F%2Fdance.knukim.edu.ua%2Ftop-5-stiliv-tancyu-dlya-strunko%25D1%2597-figuri%2F&docid=ImjfTWdSYab60M&tbnid=0b74-NHjd3OO1M&vet=12ahUKEwit1rnomISTAxWwU1UIHdWoHoIQnPAOegQIJRAB..i&w=800&h=1000&hcb=2&ved=2ahUKEwit1rnomISTAxWwU1UIHdWoHoIQnPAOegQIJRAB",
  },
  {
    title: "Відеоігри",
    description:
      "Відеоігри (комп'ютерні ігри) — це інтерактивні електронні розваги, де гравець керує процесом через відеопристрій (екран) за допомогою контролерів, взаємодіючи з вигаданим світом.",
    img: "https://www.google.com/imgres?q=Відеоігри&imgurl=https%3A%2F%2Fonclinic.ua%2Fstorage%2Fmedia%2Farticles%2F1391%2FzwAIarPavUKy72DJDc79ftE7aLmU8svwh3tSMRUe_2000.webp&imgrefurl=https%3A%2F%2Fonclinic.ua%2Fblog%2Fdigest-chy-korysni-videoihry&docid=jEKY_TghYutPdM&tbnid=dXBXPh3QxYz7EM&vet=12ahUKEwiut9fymISTAxUcCBAIHZ3cHAYQnPAOegQIFhAB..i&w=1999&h=1105&hcb=2&ved=2ahUKEwiut9fymISTAxUcCBAIHZ3cHAYQnPAOegQIFhAB",
  },
];

const ArticleLayout = () => {
  return (
    <Main>
      <Article>Дозвілля</Article>
      <Title>Чому важливо знахоити час для відпочинку</Title>
      <Description>
        Дозвілля — це вільний від роботи чи навчання час, призначений для
        відпочинку, відновлення сил, саморозвитку, творчості та розваг за
        власним інтересом.
      </Description>
      <SubTitle>5 справ для дозвілля:</SubTitle>
      <List>
        {activities.map((activity, index) => (
          <li key={index}>
            <h4>{activity.title}</h4>
            <p>{activity.description}</p>
            <img src={activity.img} alt={activity.title} />
          </li>
        ))}
      </List>
    </Main>
  );
};

export default ArticleLayout;
