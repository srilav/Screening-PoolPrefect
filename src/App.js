import "./App.css";
import React, { Component } from 'react';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { withTranslation } from 'react-i18next';
import DenseAppBar from './components/appBar';

class App extends Component {
  state = { value : 'hn' }

  updateLanguage = () => {
      let newlang = this.state.value;
      this.props.i18n.changeLanguage(newlang);
      this.props.toggleModal();
  }

  render() {
      var heading = ['Candidate Application Form  ( This should be ona  portal or a link where one can apply to be a Volunteer ..  From this pool , some willing candidates who meet the criteria rating will be chosen to become Preceptors.',' Questions   Options'];
      var footer = ['All fields marked * are compulsory to be answered'
      ,'Scoring will be done in a scale shown.  Statements in red font will need to be rated by local Heartfulness functionary/abhyasi . Additionally the local functionary may be asked to write a recommendation for the candidate as they have chosen them.'
      , 'The system will give a rating score. We expect a score of 40 or more to qualify ( this can be adjusted). Any where a 0 is marked requires specific consideration)'
      ,'We must have an OTP system to verify mobile number and email verification system too. From time to time, a prompt can be given to enable the abhyasi to update their profile'];
      var body =[
      [{Question: "I commit to do my individual practice, meditation, cleaning daily*", Answers:{answer1:"yes",answer2:"Maybe",answer3:"Mo"}}],
      [{Question: "I commit to take my individual sitting from my Trainer *", Answers:{answer1:"yes",answer2:"Maybe",answer3:"Mo"}}],
      [{Question: "I am deeply touched by the Heartfulness practice and am willing to volunteer my time to take the Heartfulness movement forward*", Answers:{answer1:"yes",answer2:"Maybe",answer3:"Mo"}}],
      [{Question: "I have my own (or can arrange) transport that I can use for volunteer work*", Answers:{answer1:"yes",answer2:"Maybe",answer3:"Mo"}}],
      [{Question: "I am willing to take care of  my own expense for heartfulness work*", Answers:{answer1:"yes",answer2:"Maybe",answer3:"Mo"}}],
      [{Question: "I have experience of conducting Heartfulness workshops*", Answers:{answer1:"yes",answer2:"Maybe",answer3:"Mo"}}],
      [{Question: "I have knowledge of online meeting like  google meet/teams/Zoom/*", Answers:{answer1:"yes",answer2:"Maybe",answer3:"Mo"}}],
      [{Question: "I use whatsapp and or email regularly*", Answers:{answer1:"yes",answer2:"Maybe",answer3:"Mo"}}],
      [{Question: "I want to contribute to the Heartfulness Vision - \"One person in every household to be aware of Heartfulness by 2030 across the world", Answers:{answer1:"yes",answer2:"Maybe",answer3:"Mo"}}],
      [{Question: "I am of good health  ( if no, add a text field so they can explain)*", Answers:{answer1:"yes",answer2:"Maybe",answer3:"Mo"}}],
      [{Question: "My communication/presentation skills are* ", Answers:{answer1:"yes",answer2:"Maybe",answer3:"Mo"}}],
      [{Question: "My family members are supportive of my volunteer work*", Answers:{answer1:"yes",answer2:"Maybe",answer3:"Mo"}}]
    ]
    return (
      <div>
        <DenseAppBar />
        <Table heading={heading} body={body} footer={footer}/>,
      </div>        
    );
  }
}

class Table extends Component {

  render() {
      var heading = this.props.heading;
      var footer = this.props.footer;
      var body = this.props.body;
      const styles = {
        border: '1px solid rgba(0, 0, 0, 0.05)', 
      }
      return (
        <div style={styles}>
          <table style={{ width: 350, margin: "auto" , backgroundColor: "lightblue"}}>
              <thead>
                  <tr style={{border:"black"}}>
                      {heading.map(head => <tr>{head}</tr>)}
                  </tr>
              </thead>
              <tbody style={{border:"black"}}>
                  {body.map(row => <TableRow row={row} />)}
              </tbody>
              <tfooter style={{border:"black"}}>
                  <tr>
                      {footer.map(footer => <tr>{footer}</tr>)}
                  </tr>
              </tfooter>
          </table>
          <tr > 
            <td style={{ width: 1200 }}></td><td style={{ width: 200 }}></td>
            <td style={{ width: 200,  margin: "20%"  }}>
               <button onClick={this.handleSubmit}>Submit</button>
            </td>
          </tr>
          <div className="details">
              <p>User Details:</p>
                  <span id="details"></span>  
          </div>
        </div>
      );
  }
}

class TableRow extends Component {
  state={
    question1: '',
    question2:'',
    questions3:'',
    questions4:''
}
 handleChange=(e)=>{
     this.setState({
         [e.target.id]:e.target.value
     },()=>{
         console.log(this.state);
     })
     
 }
 handleSubmit=()=>{
     console.log(this.state)
     let details=document.querySelector('#details');
     details.textContent=this.state.question1+' '+
                            this.state.question2+' '+
                            this.state.question4+' '+
                            this.state.question4;
 }
  //Creating a method to change the options  from select box
  changeOptions = (e) => {
        const option = e.target.value;
  }
  render() {
      var row = this.props.row;
      return (
          <tr>
              {row.map(val => 
              <div className="form-container" style={{ width: 1400, border:"black", padding: 0, margin: 10 }}> 
                <td style={{ width: 1000 , fontWeight: 'bold'} } >  {val.Question} </td> 
                <td> 
                <select className="custom-select" style={{ width: 200 }} onChange={this.handleChange}>               
                  <option value="5">{val.Answers.answer1}</option>
                  <option value="4">{val.Answers.answer2} </option>
                  <option value="1">{val.Answers.answer3} </option>
                </select>
                </td> 
              </div>)}
          </tr>

      )
  }
}

export default App;
