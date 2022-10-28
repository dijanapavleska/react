const Clicker = () => {
    const clicked = (e) => {
        e.preventDefault()
        console.log('clicked')
        // return () => {
        //     console.log('I can do this - clicked')
        // }
    }
    return (
        <a href="www.google.com" target="_blank" onClick={clicked}>Click me!</a>
    )
}
export default Clicker