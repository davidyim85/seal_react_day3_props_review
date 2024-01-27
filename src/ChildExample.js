
// const instructors = [
//     { name: 'alex' },
//     { name: 'david' },
//     { name: 'joy' },
//     { name: 'kyle' },
//   ]
import ChildOfChild from './ChildOfChild'

const ChildExample = (props) => {
    return (
        <div>
            <ChildOfChild title={props.title}/>
            <h1>{props.title}</h1>
            
            <p><b>instructors: </b> </p>
            <ul>
                {props.instructors.map((v, i) => {
                    return (<li key={i}>{v.name}</li>)
                })}
            </ul>
            <p><b>location: </b>{props.location}</p>
            <p><b>unit: </b>{props.unitNum}</p>
        </div>
    )
}


export default ChildExample;