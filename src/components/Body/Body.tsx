
type BodyTypeProps = {
    titleForBody:string
}

export let Body = (props:BodyTypeProps) => {
    return <div>{props.titleForBody}</div>
}