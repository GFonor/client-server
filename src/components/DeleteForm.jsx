import React, { useState } from 'react';
import styles from './DeleteForm.module.css';

export default function PostForm() {
  //   function prepareToPost(string) {
  //     let [id, title] = string.split(', ');
  //     return [id, title];
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    const id = e.target.inputText.value;

    fetch('http://localhost:3000/posts/' + id, {
      method: 'delete',
    })
      .then((response) => {
        console.log('response: ', response);
        return response.json();
      })
      .then((json) => {
        console.log('json: ', json);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Удалить пост с id:</h3>
      <input type="text" name="inputText" />
      <button type="submit">Отправить</button>
    </form>
  );
}
