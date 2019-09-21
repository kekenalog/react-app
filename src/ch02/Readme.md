PostList.js 的内容如下说明
import React, { Component } from 'react'

class PostList extends Component {
render () {
return (

<div>
帖子列表:
<ul>
<li>
<div>大家一起来讨论 React 吧</div>
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
Web App 的时代已经结束
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

现在这个展示，处于数据和 UI 的渲染的混杂在一起的，这样的做是非常不好的，正确的做法是数据和逻辑是分离的.
