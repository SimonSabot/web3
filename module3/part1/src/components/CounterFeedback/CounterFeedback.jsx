import "./CounterFeedback.css" 
const CounterFeedback = ({good,neutral,bad})=>{

    
        const sum =good+neutral+bad;
        const pos = (good/sum)*100;
        
    return(
    <div className="counterfeedback">
   <p>good = {good}</p> 
    <p>neutral = {neutral}</p>
    <p> bad = {bad}</p>
    <p> all = {sum}</p>
    <p> positive = {pos} %</p>
</div>)
}
export default CounterFeedback;