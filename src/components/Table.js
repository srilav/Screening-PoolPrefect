import React, { Component } from 'react';

class Table extends Component {

  render() {
      var heading = this.props.heading;
      var footer = this.props.footer;
      var body = this.props.body;
      const styles = {
        border: '5px solid rgba(0, 0, 0, 0.05)'
      }
      return (
        <div style={styles}>
          <table style={{ width: 350, margin: "auto" , backgroundColor: "lightblue"}}>
              <thead>
                  <tr>
                      {heading.map(head => <tr>{head}</tr>)}
                  </tr>
              </thead>
              <tbody>
                  {body.map(row => <TableRow row={row} />)}
              </tbody>
              <tfooter>
                  <tr>
                      {footer.map(footer => <tr>{footer}</tr>)}
                  </tr>
              </tfooter>
          </table>
          <tr>
            <td style={{ width: 1200 }}></td>
            <td style={{ width: 200,  margin: "20%" }}>
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
              <div className="form-container" style={{ width: 1400, border:"black" }}>
                <td style={{ width: 1000 , fontWeight: 'bold',padding:5,margin:5 }} >  {val.Question} </td>
                <td>
                <select className="custom-select" style={{ width: 200,padding:5,margin:5 }} onChange={this.handleChange}>
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

  export default Table;