export default function Comments() {
    function formatDate(date) {
        return date.toLocaleDateString();
    }
    
    //extract avator from the comment it does not need to know its rendered inside Comment componet
    function Avator(props) {
        return (
            <img
                className="Avatar"
                src={props.author.avatarUrl}
                alt={props.author.name}
            />
        );  
    }

    /*Note u can simplify it further
     by extracting user info too all this is done for code readability and easy 
     troubleshootind and error handling*/
     
    function Comment(props) {
        return (
        <div className="Comment">
            <div className="UserInfo">
            <Avator user={props.auth}/> 
            <div className="UserInfo-name">
                {props.author.name}
            </div>
            </div>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
            {formatDate(props.date)}
            </div>
        </div>
        );
    }
    
    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
        },
    };
    return(
        <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
        />
    );
    
}