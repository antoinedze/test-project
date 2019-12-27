const Form = require('jfactory-form');
const Expandable = require('jfactory-expandable');
const React = require('jfactory-react');

const Renders = require.context('./renders', false, /\.jsx$/);

module.exports = class RecordForm extends React.Component {
  constructor(props){
    super(props);
    
    let {clientForm, }
    this.clientForm = new Form({
      title: '',
      submitText: '',
      type: 'div',
      inputs: [
        {
          key: 'name',
          name: 'name',
          type: 'text',
          value: 'Вася'
        },
        {
          key: 'email',
          name: 'email',
          type: 'email',
          value: 'vasya@mail.ru'
        },
        {
          key: 'phone',
          name: 'phone',
          type: 'tel',
          value: '89991234567'
        }
      ]
    }, {
      clientForm: Renders('./client-form.jsx'),
      clientFormInput: Renders('./client-form-input.jsx'),
    });
    
    this.recordForm = new Form({
      title: '',
      submitText: '',
      type: 'div',
      inputs: [
        {
          key: 'master',
          name: 'master',
          type: 'text',
          value: 'Ольга'
        },
      ]
    }, formRenders);
  }
  
  render(){
    return React.createElement('form', {
      onSubmit: e => {
        e.preventDefault();
        let data = this.recordForm.serialize();
        data.client = this.recordForm.serialize();
        console.log(data);
      }
    }, 
    this.clientForm.element, 
    this.recordForm.element,
    React.createElement('button', {type: 'submit'}, 'mainSubmit')
    );
  }
}