import "./App.css";
import React, { Component } from 'react';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { withTranslation } from 'react-i18next';
import DenseAppBar from './components/appBar';
import Tabs from "./components/Tabs";
import Table from "./components/Table";
import Tablewithoutheaderfooter from "./components/Tablewithoutheaderfooter";
import {heading, footer,body, bodyinhindi} from "./components/questionList.js"
import {bodyforprefect, bodyinhindiforprefect} from "./components/PrefectQuestionList.js"

class App extends Component {
  state = { value : 'hn' }
  updateLanguage = () => {
      let newlang = this.state.value;
      this.props.i18n.changeLanguage(newlang);
      this.props.toggleModal();
  }

  render() {
    return (
      <div>
        <DenseAppBar />
        <Tabs>
         <div label="Volunteer Questionare">
           <Table heading={heading} body={body} footer={footer}/>
         </div>
         <div label="Preceptor Questionare">
            <Tablewithoutheaderfooter body={bodyinhindiforprefect} />
         </div>
       </Tabs>
      </div>        
    );
  }
}

export default App;
