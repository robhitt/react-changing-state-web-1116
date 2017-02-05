const app = "I don't do much.";

class BlogPost extends React.Component {
  render () {
    return (
      <article>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
      </article>
    );
  }
}

// class Blog extends React.Component {
//   render () {
//     return (
//       <div>
//         <BlogPost title={'Hello World!'} body={'Hello, this is my blog.'} />
//         <BlogPost title={'Good bye!'} body={'I\'m busy. I\'m shutting this blog down.'} />
//       </div>
//     );
//   }
// }

class Blog extends React.Component {
  componentDidMount () {
    fetch('http://localhost:4000/api/posts')
      .then(response => response.json())
      .then(posts => {
          console.log('Yey! I got some posts!', posts);
      });
  }


class App extends React.Component {
  // ...
  render () {
    return (
      <div>
        <Modal isOpen={this.state.isModalOpen} />
      </div>
    );
  }
}
