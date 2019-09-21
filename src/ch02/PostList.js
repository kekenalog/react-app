import React, { Component } from 'react'

import PostItem from './PostItem'

const data = [
  {
    title: '大家一起来讨论React吧',
    author: '张三',
    date: '2019-09-09 12:23:45'
  },
  {
    title: '前端框架,你最爱哪一种',
    author: '李四',
    date: '2019-09-10 12:23:45'
  },
  {
    title: 'Web App的时代已经结束',
    author: '王五',
    date: '2019-09-19 12:23:45'
  }
]

class PostList extends Component {
  render () {
    return (
      <div>
        帖子列表:
        <ul>
          {data.map((item) => (
            <PostItem
              author={item.author}
              title={item.title}
              date={item.date}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default PostList
