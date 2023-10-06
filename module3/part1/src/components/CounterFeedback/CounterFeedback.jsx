import "./CounterFeedback.css" 
import StatisticLine from "./StatisticLine";
const CounterFeedback = ({good,neutral,bad})=>{
    
    
        const sum =good+neutral+bad;
        
        const pos = (good/sum)*100;
        const avg = (good-bad)/sum;
        

    return(
    <div>
    <h2>Statistic</h2>
    {sum===0 ? <p>no statistic for now</p> :
    <table className="counterfeedback">
    <tbody>
   
       <StatisticLine text="good" value={good}/> 
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="sum" value={sum}/>
      <StatisticLine text="average" value={avg}/> 
      <StatisticLine text="Happy %" value={pos}/>
    
    </tbody>
</table>
}
</div>
)}
export default CounterFeedback;