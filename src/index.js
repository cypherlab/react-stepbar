const getTheme = (name="light") => {

  let primary, unactive, secondary

  // default (light)
  primary = '#2f6fa9'
  unactive = '#6ba7da'
  secondary = '#eee'

  // dark
  if(name == "dark"){
    primary = '#ffc107'
    unactive = '#f9ba09'
    secondary = '#52585f'
  }

  const css = {
      bar: { height: 2, color: primary }
    , backbar: { height: 10, color: secondary }
    , dot: { width: 14, color: unactive, hover: primary, active: primary }
    , backdot: { width: 26, color: secondary }
    , label: { width: 100, color: 'inherit', fontSize: 14 }
  }

  return css
}

class StepCrumbs extends React.Component {

  constructor(props){
    super(props)

    const { currentStep, initialSteps, steps } = props

    this.state = { 
        initialSteps: initialSteps || 0
      , currentStep: currentStep || initialSteps || 0
      , steps: steps || ['Cart', 'Shipping', 'Payment']
      , theme: 'light'
      // , steps: steps || [0, 1, 2, 3, 4]
    }

    this.setStep = this.setStep.bind(this)
  }

  componentDidMount() {
    this.props.onRef&&this.props.onRef(this)
  }

  componentWillUnmount() {
    this.props.onRef&&this.props.onRef(undefined)
  }

  setStep(stepIndex) {
    const { steps } = this.props
    this.setState({ currentStep: stepIndex })
    this.props.onStep && this.props.onStep(steps[stepIndex], stepIndex)
  }

  render() {
    const { label, onClick, theme } = this.props
    const { currentStep, steps } = this.state
    const ratio = 100 / (steps.length - 1)
    const width = currentStep * ratio
    const onStepClick = onClick || ((step, setStep) => { setStep(step) })
    const css = getTheme(theme)

    return (<div>

      <div className="step-crumbs">
        <div className="dots">
          { steps.map((step, stepIndex) => (<div onClick={()=>onStepClick(stepIndex, this.setStep)} key={stepIndex}>
            <div className="backdot"> </div>
            <div className={`dot ${stepIndex<=currentStep?'active':''}`}> </div>
            { label != false && <div className="dot-label">
              {label ? label(step, stepIndex) : (<small>{step}</small>)}
            </div>}
          </div>))}
        </div>
        <div className="backbar"></div>
        <div className="bar" style={{width: `${width}%`}}></div>
      </div>



      <style jsx>{`
        .step-crumbs {
          position: relative;
          z-index: 2;
        }

        .dots {
          display: flex!important;
          justify-content: space-between!important;
        }
        .dots > div {
          cursor: pointer;
        }

        .backdot {
          position: absolute;
          z-index: -1;
          margin-left: -${css.backdot.width/2}px;
          height: ${css.backdot.width}px;
          width: ${css.backdot.width}px;
          background: ${css.backdot.color};
          border-radius: 50%;
        }
        .dot {
          background: ${css.dot.color};
          width: ${css.dot.width}px;
          height: ${css.dot.width}px;
          border-radius: 50%;
          margin-left: -${css.dot.width/2}px;
          margin-top: ${(css.backdot.width/2)-(css.dot.width/2)};
          // border: 2px solid #fff;
        }
        .dot:hover {
          background: ${css.dot.hover};
        }
        .dot.active {
          background: ${css.dot.active};
        }
        .dot-label {
          position: absolute;
          top: -35px;
          margin-left: -${css.label.width/2}px;
          width: 100px;
          font-size: ${css.label.fontSize}px;
          color: ${css.label.color};
        }

        .backbar {
          z-index: -2;
          position: absolute;
          top: ${(css.backdot.width/2)-(css.backbar.height/2)};
          height: ${css.backbar.height}px;
          width: 100%;
          border-radius: 10px;
          background: ${css.backbar.color};
        }
        .bar {
          z-index: -1;
          position: absolute;
          top: ${(css.backdot.width/2)-(css.bar.height/2)};
          height: ${css.bar.height}px;
          background: ${css.bar.color};
          -webkit-transition: width 1s ease;
            -moz-transition: width 1s ease;
              -o-transition: width 1s ease;
                 transition: width 1s ease;
        }


      `}</style>

    </div>)
  }
}



export default StepCrumbs




export const Playground = ({ steps, theme='light' } = {}) => {

  const themes = ['light', 'dark']
  const [currentTheme, setTheme] = React.useState(theme)
  const [label, setLabel] = React.useState(true)

  return (<div>
    
    <StepCrumbs
      steps={steps}
      label={label ? undefined : false}
      theme={currentTheme}
    />

    <div className="py-5">
      <select className="mr-2" onChange={e=>setTheme(e.target.value)} value={currentTheme}>
        { themes.map(t => (
          <option value={t}>theme: {t}</option>
        )) }
      </select>
      <select className="mr-2"  onChange={e=>setLabel(e.target.value === 'true' ? true:false)} value={label}>
        <option value={true}>label: true</option>
        <option value={false}>label: false</option>
      </select>
    </div>

  </div>)
}









