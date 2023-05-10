import ColorCard from "../components/ColorCard/ColorCard";

export default function Colors() {
  return (
    <>
      <article className="sg-section colors">
        <h2>Colors</h2>

        <div className="section__list">
          <ColorCard color="neutralGray"/>
          <ColorCard color="primary"/>
          <ColorCard color="info"/>
          <ColorCard color="error"/>
          <ColorCard color="warning"/>
          <ColorCard color="success"/>
          <ColorCard color="amethyst"/>
          <ColorCard color="tangerine"/>
          <ColorCard color="olive"/>
        </div>
        
      </article>
    </>
  )
}