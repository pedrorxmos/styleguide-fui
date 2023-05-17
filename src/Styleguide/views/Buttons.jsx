import Button from "../../components/Button/Button";

export default function Buttons() {
  return (
    <>
      <article className="sg-section buttons">
        <h2>Buttons</h2>

        <div className="section__list">
          <Button text="button"/>
          <Button el="link" text="link" href="#href" />
        </div>

        <div className="section__list">
          <Button el="link" type="main" text="main" />
          <Button el="link" type="primary" text="primary" />
          <Button el="link" type="secondary" text="secondary" />
          <Button el="link" type="error" text="error" />
        </div>
      </article>
    </>
  )
}