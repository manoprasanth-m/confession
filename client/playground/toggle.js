
class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleToggle () {
        this.setState((prevState)=> {
            return {
                visibility : !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>
                    {this.state.visibility ? 'Show Details' : 'Hide Details'}
                </button>
                {this.state.visibility && (
                    <div>
                    <p>Here are some details</p>
                    </div>
                )}
            </div>
        )
    }
}


ReactDOM.render(<Toggle />, document.getElementById('app'));



// const rendererShow = () => {
//     const template = (
//         <div>
    
//         <h1>Visibilty Toggle</h1>
//         <button onClick={renderer}>Hide Details</button>
//         <p>Hi, I'm revealed. Hide me by clicking hide button</p>
    
//         </div>
        
//     )
//     ReactDOM.render(template, appRoot);
    
// }



// const appRoot = document.getElementById('app')

// const renderer = () => {
//     const template = (
//         <div>
    
//         <h1>Visibilty Toggle</h1>
//         <button onClick={rendererShow}>Show Details</button>
    
//         </div>
        
//     )
//     ReactDOM.render(template, appRoot);
// }

// renderer()



