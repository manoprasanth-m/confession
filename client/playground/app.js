
//Parent Component

class ConfessionApp extends React.Component {
    constructor(props) {
        super(props);

    this.deleteAllConfess = this.deleteAllConfess.bind(this);
    this.deleteConfess = this.deleteConfess.bind(this);
    this.pickOneConfess = this.pickOneConfess.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
        options: []
    }
}

componentDidMount() {

    try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json)
        if(options) {
            this.setState({
                options: options
            })
        }
        
    } catch (e) {
        //nothing
    }

}

componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
    }

}


    deleteAllConfess() {
    this.setState(()=> ({ options: [] }))
    }

    pickOneConfess() {
        this.setState(()=>{
            const rando = Math.floor(Math.random() * this.state.options.length)
            const now = this.state.options[rando]
            alert(now)
        })
    }

    addOption(option) {
        if(!option) {
            return "Please add an option"
        } else if(this.state.options.indexOf(option) > -1) {
            return "Option already exists"
        }
        this.setState((prevStat)=>({options: prevStat.options.concat(option)}))
    }

    deleteConfess(optiontoremove) {
        this.setState((prevStat)=> ({
            options: prevStat.options.filter((text) => {
                return optiontoremove !== text
            })
        }))
    }
    
    render () {
        const header = 'Confession App'
        const subhead = 'Dont wait. Just confess your Love!'
        return (
            <div>
                <Header head={header} subhead={subhead}/>
                <Action 
                hasOptions={this.state.options.length > 0}
                pickOneConfess={this.pickOneConfess}
                />
                <Options 
                allconfess={this.state.options}
                deleteAllConfess={this.deleteAllConfess}
                deleteConfess={this.deleteConfess}
                />
                <AddOption 
                addOption={this.addOption}
                />
            </div>
        )
    }
}

//sub components
// Using stateless functional components for presentation without tracking state changes

const Header = (props) => {
    return (
        <div>
            <h1>{props.head}</h1>
            <h2>{props.subhead}</h2>
        </div>
    )
}

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.pickOneConfess}
            disabled={!props.hasOptions}
            >Choose one for me
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.deleteAllConfess}>Remove All</button>
            {props.allconfess.map((items) =>{
                return (
                    <Option 
                    key={items} 
                    optionText={items}
                    deleteConfess={props.deleteConfess}
                    />
                )
            })
            }
        </div>
    )
}

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button onClick={(e)=> {
                props.deleteConfess(props.optionText)
            }}
            >Remove</button>
            
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    addOption(e){
        e.preventDefault()
        const confess = e.target.elements.option.value.trim()
        const error = this.props.addOption(confess)
        
        this.setState(() => ({ error}))

        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form  onSubmit={this.addOption}>
                <input type='text' name='option' />
                <button>Add your confession</button>
                </form>
                
            </div>
        )
    }
}

// class Profiles extends React.Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

ReactDOM.render(<ConfessionApp />, document.getElementById('app'))