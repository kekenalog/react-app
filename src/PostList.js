import React, { Component } from 'react'

class PostList extends Component {
  render () {
    return (
      <div>
        帖子列表:
        <ul>
          <li>
            <div>大家一起来讨论React吧</div>
            <div>
              创始人:<span>张三</span>
            </div>
            <div>
              创建时间:<span>2019-09-09 12:23:45</span>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>前端框架,你最爱哪一种</div>
            <div>
              创始人:<span>李四</span>
            </div>
            <div>
              创建时间:<span>2019-09-10 12:23:45</span>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            Web App的时代已经结束
            <div>
              创始人:<span>王五</span>
            </div>
            <div>
              创建时间:<span>2019-09-19 12:23:45</span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default PostList
