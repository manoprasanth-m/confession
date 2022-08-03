class Counter extends React.Component {
constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.state = {
        count: 0,
    }
}

    componentDidMount() {
        
        const count = localStorage.getItem('count')
        if (count) {
            this.setState({count: count})
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }

    }

    addOne () {
        this.setState((prevStat) => {
            return {
            count : prevStat.count + 1
            }
        })
    }
    minusOne () {
        this.setState((prevStat) => {
            return {
                count: prevStat.count - 1
            }
        })
    }
    resetCount () {
        this.setState(()=>{
            return {
                count:0
            }
        })
    }
    render() {
        return (
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.resetCount}>Reset</button>
        </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'))



// let count = 0;
// const addOne = () => {
//     count++;
//     console.log('addone',count)
//     counterRender()
// }

// const lessOne = () => {
//     count--;
//     console.log('lessone',count)
//     counterRender()
// }

// const reset = () => {
//     count = 0;
//     console.log('reset',count)
//     counterRender()
// }


// const counterRender = () => {
//     const templateThree = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={lessOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
//     ReactDOM.render(templateThree, appRoot)
// }

// counterRender()