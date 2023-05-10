import ColorCard from "../components/ColorCard/ColorCard";

export default function Colors() {

  const greyScale = ['grey0', 'grey20', 'grey40', 'grey60', 'grey80', 'grey100'];

  return (
    <>
      <article className="sg-section colors">
        <h2>Colors</h2>

        <h3>Grey Scale</h3>
        <div className="section__list">
        {
          greyScale.map(color => (
            <ColorCard color={color} />
          ))
        }
        </div>
        
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