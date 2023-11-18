import {useState} from "react";

const data = [
  {
    id: 1,
    title: 'title1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi.'
  },
  {
    id: 2,
    title: 'title2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: 3,
    title: 'title3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi. Animi, commodi'
  },
]

const TaskList = () => {
  const [list, setList] = useState(data)
  const [item, setItem] = useState({
    id: null,
    title: '',
    description: '',
  })

  const handleDelete = (id) => {
    setList(list.filter((e) => {
      return e.id !== id
    }))
  }

  const handleAdd = () => {
    if(item.title === '' || item.description === ''){
      alert('fill all fields')
      return
    }
    const ids = list.map(object => {
      return object.id;
    });

    const max = Math.max(...ids);
    setList([...list, {...item, id: max + 1}])
    setItem({
      id: null,
      title: '',
      description: '',
    })
  }

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div>
      <div>
        <input
          onChange={handleChange}
          value={item.title}
          type="text"
          placeholder='title'
          id='title'
        />
        <input
          onChange={handleChange}
          value={item.description}
          type="text"
          placeholder='description'
          id='description'
        />
        <button onClick={handleAdd}>add</button>
      </div>
      <ul>
        {list.map((e) => {
          return <li key={e.id}>
            <h5>{e.title}</h5>
            <p>{e.description}</p>
            <button onClick={() => handleDelete(e.id)}>x</button>
          </li>
        })}
      </ul>
    </div>
  );
}

export default TaskList;
