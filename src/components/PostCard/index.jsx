// 用于展示一篇帖子，包括标题 title 和内容 content
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import './index.scss'

export default function PostCard(props) {
  const handleClick = () => {
    // 如果是列表，那么就响应点击事件，跳转到帖子详情
    if (props.isList) {
      const { title, content } = props
      Taro.navigateTo({
        url: `/pages/post/post?title=${title}&content=${content}`,
      })
    }
  }

  return (
    <View
    className={classNames('postcard', { postcard__isList: props.isList })}
    onClick={handleClick}
  >
      <View className="post-title">{props.title}</View>
      <View className="post-content">{props.content}</View>
    </View>
  )
}
PostCard.defaultProps = {
  isList: '',
}