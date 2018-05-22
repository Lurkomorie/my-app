import * as React from "react";

interface IComponentState {
  formValues: {}
}

export default class Popup extends React.Component <any, IComponentState> {
constructor(props: any) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

public handleChange(event : any) {
  event.preventDefault();
  const formValues = this.state.formValues;
  const name = event.target.name;
  const value = event.target.value;

  formValues[name] = value;

  this.setState({formValues})
}

public handleSubmit(event : any) {
  event.preventDefault();
}

  public render() {
    return (
      <div className="modal-overlay">
        <form className="modal-form" onSubmit={this.handleSubmit}>
          <div className="modal-form-close">
            <i className="modal-form-close-icon" onClick={this.props.closePopup}/>
          </div>
          <div className="modal-form-title">Форма заявки</div>
          <div className="modal-form-info">Для того, что бы менеджер мог с Вами связаться, заполните следующие пункты.
          </div>
          <input className="modal-form-input modal-form-name" name="name" type="text" placeholder="Ваше имя" onChange={this.handleChange}/>
          <input className="modal-form-input modal-form-phone" name="phone" type="text" placeholder="Телефон" onChange={this.handleChange}/>
          <input className="modal-form-input modal-form-mail" type="text" name="mail" placeholder="Email" onChange={this.handleChange}/>
          <textarea className="modal-form-input modal-form-comment" name="comment" placeholder="Комментарий" onChange={this.handleChange}/>
          <input className="modal-form-submit" type="submit" value="Отправить"/>
        </form>
      </div>
    )
  }
}
