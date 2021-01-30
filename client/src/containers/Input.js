import { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
const WRITE = gql`
  mutation Write($writer: String!, $description: String!) {
    write(writer: $writer, description: $description)
  }
`;

const Input = () => {
  const [writer, setWriter] = useState('');
  useEffect(() => {
    const writer = prompt('Name');
    setWriter(writer);
  }, []);
  const [description, setDescription] = useState('');
  const [write, { data }] = useMutation(WRITE);
  return (
    <div>
      <input
        type='text'
        value={description}
        placeholder='내용을 입력하세요'
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            write({ variables: { writer, description } });
            setDescription('');
          }
        }}
      />
      <button
        onClick={() => {
          write({ variables: { writer, description } });
          setDescription('');
        }}
      >
        확인
      </button>
    </div>
  );
};

export default Input;
