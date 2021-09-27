//Mục đích là vẫn phải trả lại một cái hàm, hàm đó có nhận các đối số tương tự như hàm reducer()
//vậy trong hàm logger return ra hàm mới phải đảm bảo hàm đỏ trả ra được cái state
export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('prevState',prevState)
        console.log('agruments',args)
        const nextState = reducer(prevState, action, args)
        console.log('nextState',nextState)
        console.groupEnd()

        return nextState
    }
}