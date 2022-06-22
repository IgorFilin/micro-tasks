

type HeaderTypeProps = {
    title:string
}

export let Header = (props:HeaderTypeProps) => {
    return <div>{props.title}</div>
}