console.log('The file is running')

//JSX 

const app = {
    title: 'Indecision App',
    subtitle: 'Welcome to the Indecision app',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.options.value;
    if (option) {
        app.options.push(option)
        e.target.elements.options.value = ''
        onSubmitRender()
    }
    
    console.log(app.options)
}

const appRoot = document.getElementById('app')

const erase = () => {
    app.options = []
    onSubmitRender()
}

const whatNow =()=>{
    const rando = Math.floor(Math.random() * app.options.length)
    const now = app.options[rando]
    alert(now)
}

const onSubmitRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={whatNow}>What Should I do ?</button>
            <button onClick={erase}>Remove all</button>
            <ol>
                {
                    app.options.map((string)=> {
                        return <li key={string}>{string}</li>
                })
                }
            </ol>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="options"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);

}

onSubmitRender()



// const userName = 'Bruce Wayne'
// const templateTwo = (
//     <div>
//         <h1>{userName}</h1>
//         <p>
//         Age: 20
//         Location: United States of America
//         </p>
        
//     </div>
// )
