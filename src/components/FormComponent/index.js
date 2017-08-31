import React from 'react'
import Form from '../../styling-components/Form'
import Input from '../../styling-components/Input'
import Section from '../../styling-components/Section'
import P from '../../styling-components/P'
import HeaderLink from '../../styling-components/HeaderLink';
import messages from './messages'

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      term: '',
      limit:'',
    };
  }

 submitForm (evt) {
   if (evt !== undefined && evt.preventDefault) {
     evt.preventDefault();
   }
   this.props.onSubmitForm(this.state.username,this.state.term,this.state.limit)
 }

 onChangeApi_key (evt) {
   this.setState({username: evt.target.value})
 }
 onChangeTerm (evt) {
   this.setState({term: evt.target.value})
 }
 onChangeLimit (evt) {
   this.setState({limit: evt.target.value})
 }
  render() {
    const {username, term, limit} = this.state;
    return (
      <Section>
         <Form>
            <p>{messages.trymeMessage}</p>
            <p style={{fontSize:'10px'}}>{messages.trymeAtPrefix}</p>
            <P>api_key</P>
             <Input
               id="username"
               placeholder="api_key"
               onChange={this.onChangeApi_key.bind(this)}
             />
           <P>key word</P>
             <Input
               id="term"
               placeholder="term"
               onChange={this.onChangeTerm.bind(this)}
             />
           <P>number of photos</P>
             <Input
               id="limit"
               placeholder="limit"
               onChange={this.onChangeLimit.bind(this)}
             />
          <div>
           <HeaderLink
             style={{borderRadius:'10%'}}
             to={`/${username}/${term}/${limit}`}>
               <P>SUBMIT</P>
           </HeaderLink>
          </div>
         </Form>
      </Section>
    );
  }
}
