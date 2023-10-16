const formField=["good","neutral","bad"];




const FeedbackForm = ()=>{

    let allbutton ="" ;
    for(i=0;i<formField.length;i++){
     allbutton.concat(`<Button value =${formField[i]}/>`);
        }

    return(
        <div>
            <ul>
        {allbutton}
            </ul>
        </div>
    ) 
}

export default FeedbackForm;