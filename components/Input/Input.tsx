import tw from 'twin.macro';



interface InputInterface {
    id?: string,
    label?: string,
    type?: string,
    name?: string,
    value?: string,
    placeholder?: string,
    onChange?: any
}

const Input: React.FC<InputInterface> = (props) => {
    return (
        <>
        <InputBlock 
        id={props.id} 
        type={props.type} 
        name={props.name} 
        value={props.value} 
        placeholder={props.placeholder}
        onChange={props.onChange}
        />
        </>
    )
}
export default Input;

const InputBlock = tw.input`block w-full rounded-sm border-[1px] py-[8px] px-[13px] bg-white outline-none text-black`