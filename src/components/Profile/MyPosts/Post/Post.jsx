import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://w-dog.ru/wallpapers/16/17/547557012563074/avatar-avatara-nejtiri.jpg' />
        {props.message}
      <div>
        <span>Likes: </span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;