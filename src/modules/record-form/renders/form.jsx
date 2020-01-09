const React = require('react');

module.exports = ({Form, Title, Groups, SubmitButton}, props) => (
  <Form className="form-wrapper">
    <div className="groups">
      <Groups/>
    </div>
    <SubmitButton/>
  </Form>
);