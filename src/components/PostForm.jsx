import React, { useState } from 'react';
import styles from './PostForm.module.css';

export default function PostForm() {
  function prepareToPost(string) {
    let [id, title] = string.split(', ');
    return [id, title];
  }

  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.inputText.value;
    let [id, title] = prepareToPost(value);
    if (id && title) {
      fetch('http://localhost:3000/posts', {
        method: 'post',
        body: JSON.stringify({
          id: id,
          title: title,
        }),
      })
        .then((response) => {
          console.log('response: ', response);
          return response.json();
        })
        .then((json) => {
          console.log('json: ', json);
        });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Добавить пост:</h3>
      <input type="text" name="inputText" />
      <button type="submit">Отправить</button>
    </form>
  );
}
