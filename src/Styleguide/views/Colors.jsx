import ColorCard from "../components/ColorCard/ColorCard";

export default function Colors() {

  const greyScale = [
    {
      name: 'grey0',
      desc: 'The darkest grey',
      hex: '333333'
    },
    {
      name: 'grey20',
      desc: 'A dark grey',
      hex: '666666'
    },
    {
      name: 'grey40',
      desc: 'A litte dark grey',
      hex: '9A9A9A'
    },
    {
      name: 'grey60',
      desc: 'A little light grey',
      hex: 'CCCCCC'
    },
    {
      name: 'grey80',
      desc: 'A light grey',
      hex: 'F3F3F3'
    },
    {
      name: 'grey100',
      desc: 'The lightest grey',
      hex: 'FAFAFA'
    }
  ];




  const colorPalette = [
    {
      name: 'blue',
      palette: [ 
        {
          name: 'blue0',
          desc: 'The darkest blue',
          hex: '0036B8'
        },
        {
          name: 'blue25',
          desc: 'A darker blue',
          hex: '0045EB'
        },
        {
          name: 'blue50',
          desc: 'Original blue',
          hex: '3772FF'
        },
        {
          name: 'blue75',
          desc: 'A lighter blue',
          hex: '9EBBFF'
        },
        {
          name: 'blue100',
          desc: 'The lightest blue',
          hex: 'D1DFFF'
        }
      ]
    },
    {
      name: 'violet',
      palette: [ 
        {
          name: 'violet0',
          desc: 'The darkest violet',
          hex: '7826FD'
        },
        {
          name: 'violet25',
          desc: 'A darker violet',
          hex: '9758FE'
        },
        {
          name: 'violet50',
          desc: 'Original violet',
          hex: 'B88DFE'
        },
        {
          name: 'violet75',
          desc: 'A lighter violet',
          hex: 'D6BDFE'
        },
        {
          name: 'violet100',
          desc: 'The lightest violet',
          hex: 'E6D7FF'
        }
      ]
    },
    {
      name: 'pink',
      palette: [ 
        {
          name: 'pink0',
          desc: 'The darkest pink',
          hex: 'AA00B8'
        },
        {
          name: 'pink25',
          desc: 'A darker pink',
          hex: 'D900EB'
        },
        {
          name: 'pink50',
          desc: 'Original pink',
          hex: 'F038FF'
        },
        {
          name: 'pink75',
          desc: 'A lighter pink',
          hex: 'F89EFF'
        },
        {
          name: 'pink100',
          desc: 'The lightest pink',
          hex: 'FCD1FF'
        }
      ]
    },
    {
      name: 'red',
      palette: [ 
        {
          name: 'red0',
          desc: 'The darkest red',
          hex: 'CA1756'
        },
        {
          name: 'red25',
          desc: 'A darker red',
          hex: 'E72C6E'
        },
        {
          name: 'red50',
          desc: 'Original red',
          hex: 'EF709D'
        },
        {
          name: 'red75',
          desc: 'A lighter red',
          hex: 'F49FBD'
        },
        {
          name: 'red100',
          desc: 'The lightest red',
          hex: 'F9CDDC'
        }
      ]
    },
    {
      name: 'yellow',
      palette: [
        {
          name: 'yellow0',
          desc: 'The darkest yellow',
          hex: 'B7CA17'
        },
        {
          name: 'yellow25',
          desc: 'A darker yellow',
          hex: 'D4E72C'
        },
        {
          name: 'yellow50',
          desc: 'Original yellow',
          hex: 'E2EF70'
        },
        {
          name: 'yellow75',
          desc: 'A lighter yellow',
          hex: 'EBF49F'
        },
        {
          name: 'yellow100',
          desc: 'The lightest yellow',
          hex: 'EBF49F'
        }
      ]
    },
    {
      name: 'cyan',
      palette: [ 
        {
          name: 'cyan0',
          desc: 'The darkest cyan',
          hex: '17BACA'
        },
        {
          name: 'cyan25',
          desc: 'A darker cyan',
          hex: '2CD7E7'
        },
        {
          name: 'cyan50',
          desc: 'Original cyan',
          hex: '70E4EF'
        },
        {
          name: 'cyan75',
          desc: 'A lighter cyan',
          hex: '9FEDF4'
        },
        {
          name: 'cyan100',
          desc: 'The lightest cyan',
          hex: 'CDF5F9'
        }
      ]
    }
  ]

  return (
    <>
      <article className="sg-section colors">
        <h2>Colors</h2>

        <h3>Grey Scale</h3>
        <div className="section__list">
        {
          greyScale.map(color => (
            <ColorCard color={color.name} hex={color.hex} description={color.desc} />
          ))
        }
        </div>

        <h3>Color Palette</h3>
        {
          colorPalette.map(palette => 
            <div>
              <h4>{palette.name[0].toUpperCase()}{palette.name.slice(1)}</h4>
              <div className="section__list">
              {
                palette.palette.map(color => (
                  <ColorCard color={color.name} hex={color.hex} description={color.desc} />
                ))
              }
              </div>
            </div>
          )
        }
        
        {/* <div className="section__list">
          <ColorCard color="neutralGray"/>
          <ColorCard color="primary"/>
          <ColorCard color="info"/>
          <ColorCard color="error"/>
          <ColorCard color="warning"/>
          <ColorCard color="success"/>
          <ColorCard color="amethyst"/>
          <ColorCard color="tangerine"/>
          <ColorCard color="olive"/>
        </div> */}
        
      </article>
    </>
  )
}