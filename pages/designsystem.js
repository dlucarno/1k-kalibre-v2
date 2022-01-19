import Layout from '../components/Layout'

export default function designsystem() {
  const colors = [
    { 
      colorname: 'blue',
      colorcode: '#5175FF'
    },
    { 
      colorname: 'dark-gray',
      colorcode: '#333950'
    },
    { 
      colorname: 'light-gray',
      colorcode: '#747B95'
    },
    { 
      colorname: 'light-blue',
      colorcode: '#829CFF'
    },
    { 
      colorname: 'black',
      colorcode: '#25293A'
    },
    { 
      colorname: 'red',
      colorcode: '#F05B5B'
    },
    
  ]
  return (
    <Layout>
      <section className="design-heading">
        <div className="container">
          <h1>Design System</h1>
        </div>
      </section>
      <section className="colors">
        <div className="container">
          <h2>Colors</h2>
          <div className="colors-list">
            {colors.map((color) => (
              <div className="color" key={color.colorname}>
                <div className={`color-circle ${color.colorname}`}></div>
                <div className="color-code">
                  <h3 className="color-code__name">{color.colorname}</h3>
                  <p className="color-code__code">{color.colorcode}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="typography">
        <div className="container">
          <h2>Typography</h2>
          <div className="divider"></div>
          <div className="typography__display">
            <h3>Kumbh Sans</h3>
            <p><span className="t-bold">ABCDEFGHIJKLMNOPQRESTUVWXYZ</span><span className="t-regular">abcdefghijklmnipqrestuvwxyz1234567890!@#$%^&*()</span></p>
          </div>
          <div className="divider"></div>
          <div className="typography__typespecs">
            <div className="typespec">
              <span className="typespec__name">H1 - Kumbh Sans Bold - 56px - 64px Line</span>
              <span className="typespec__sample t-h1">Lorem Ipsum Dolor Sit Amet</span>
            </div>
            <div className="typespec">
              <span className="typespec__name">Body 1 - Kumbh Sans Regular - 18px - 28px Line</span>
              <span className="typespec__sample t-body1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.</span>
            </div>
            <div className="typespec">
              <span className="typespec__name">H2 - Kumbh Sans Bold - 20px - 28px Line</span>
              <span className="typespec__sample t-h2">Lorem Ipsum Dolor Sit Amet</span>
            </div>
            <div className="typespec">
              <span className="typespec__name">Body 2 - Kumbh Sans Regular - 16px - 28px Line</span>
              <span className="typespec__sample t-body2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.</span>
            </div>
            <div className="typespec">
              <span className="typespec__name">H3 - Kumbh Sans Bold - All Caps - 16px - 48px Line</span>
              <span className="typespec__sample t-h3">Lorem Ipsum Dolor Sit Amet</span>
            </div>
          </div>
        </div>
      </section>
      <section className="buttons">
        <div className="container">
          <h2>Buttons</h2>
          <div className="buttons__list">
            <div className="button__sample button__sample--white">
              <button className="btn btn--blue">Button 1</button>
              <p>Normal</p>
              <button className="btn btn--blue--hover">Button 1</button>
              <p>Hover</p>
            </div>
            <div className="button__sample button__sample--white">
              <button className="btn btn--light-blue">Button 2</button>
              <p>Normal</p>
              <button className="btn btn--light-blue--hover">Button 2</button>
              <p>Hover</p>
            </div>
            <div className="button__sample button__sample--blue">
              <button className="btn btn--white">Button 3</button>
              <p>Normal</p>
              <button className="btn btn--white--hover">Button 3</button>
              <p>Hover</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
