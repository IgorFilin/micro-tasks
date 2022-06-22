type ButtonTypeProps = {
    name: string
    callBack: () => void
}

export let Button = (props: ButtonTypeProps) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={()=> onClickHandler()}>{props.name}</button>)


}