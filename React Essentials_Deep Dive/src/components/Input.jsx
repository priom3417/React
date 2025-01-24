export default function Input({ label, id, richText, ...rest }) {
    
    if(richText){
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <textarea id={id} {...rest}></textarea>
            </div>
        );
    } else{
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <input id={id} {...rest} />
            </div>
        );
    }
}