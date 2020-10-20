function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    { todos: ['todo 1', 'todo 2', 'todo 3'] });_defineProperty(this, "handleDelete",

    index => {
      const newArr = [...this.state.todos];
      newArr.splice(index, 1);
      this.setState({ todos: newArr });
    });}

  render() {
    return (
      React.createElement("div", { className: "wrapper" },
      React.createElement("div", { className: "card frame" },
      React.createElement(Header, { numTodos: this.state.todos.length }),
      React.createElement(TodoList, { todos: this.state.todos, onDelete: this.handleDelete }),
      React.createElement(SubmitForm, { onFormSubmit: this.handleSubmit }))));



  }}


class SubmitForm extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    { term: '' });_defineProperty(this, "handleSubmit",
    todos => {
      this.setState({ todos: [...this.state.todos, todo] });
    });}
  render() {
    return (
      React.createElement("form", null,
      React.createElement("input", { type: "text",
        className: "input",
        placeholder: "What to do?",
        value: this.state.term,
        onChange: e => this.setState({ term: e.target.value }) }),

      React.createElement("button", { className: "button" }, "OK")));


  }}


const Header = props => {
  return (
    React.createElement("div", { className: "card-header" },
    React.createElement("h1", { className: "card-header-title header" }, "You have: ",
    props.numTodos, " Todos!")));



};

const TodoList = props => {
  const mytodos = props.todos.map((todo, index) => {
    return React.createElement(Todo, { content: todo, key: index, id: index, onDelete: props.onDelete });
  });
  return (
    React.createElement("div", { className: "list-wrapper" },
    mytodos));


};

const Todo = props => {
  return (
    React.createElement("div", { className: "list-item" },
    props.content,
    React.createElement("button", { class: "delete is-pulled-right", onClick: () =>
      {props.onDelete(props.id);} })));


};
ReactDOM.render(
React.createElement(App, null),
document.querySelector('#root'));