import "../componentsStyling/FyiStyling.css";

const Fyi = () => {
  return (
    <section className="fyi-section">
      <div className="fyi-container">
        <h2 className="fyi-h2">
          Why use our website to prepare for your test?
        </h2>
        <p className="fyi-subheading">
          The purpose of the website is to provide the user with the following
          features:
        </p>
        <ul className="fyi-list">
          <li className="fyi-list-item">
            The regular,classic tasks which you will face during your exam, such
            as, choose one option or select a true/false questions 🤝
          </li>
          <li className="fyi-list-item">
            Interactive tests created for enchancing your studying experience,
            resulting in better understanding of the subject and incresing
            chances of remembering the material after you pass your test 🤩
          </li>
          <li className="fyi-list-item">
            After creating your personal account, you will be able to track your
            progress, which helps with setting goals and realising what you have
            achived 💪😎
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Fyi;
