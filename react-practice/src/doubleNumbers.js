export default function DoubleNumbers(){
    const numbers = [1, 2, 3, 4, 5];
    const double = numbers.map((number) => <li>{number*2}</li>)
    
    return (
        <div>
            <ul>{double}</ul>
        </div>
    );
}