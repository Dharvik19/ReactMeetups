import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function newMeetUpPage (){
    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData);
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}
export default newMeetUpPage;