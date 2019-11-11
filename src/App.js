import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts, addPost } from './actions';

function App() {
  const [data, setData] = useState(null);
  const [ state, setState ] = useState({
    title: '',
    body: ''
  });
  const posts = useSelector(state => state.postsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllPosts(dispatch);
  });

  useEffect(() => {
    data !== posts.data && setData(posts.data);
  }, [data, posts]);

  const handleSubmit = event => {
    event.preventDefault();
    addPost({...state});
  }

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="App">
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" className="form-input" placeholder="Enter title" name="title" onChange={handleChange}/>
      </div>
      <div>
        <input type="text" className="form-input" placeholder="Enter Body" name="body" onChange={handleChange}/>
      </div>
      <button className="btn-add-post">Add Post</button>
    </form>
    <hr />
    <div className="posts">
      {data && data.map(({ title, body, id }) =>
      <div className="post-card" key={id}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      )}
    </div>
    </div>
  );
}


export default App;
