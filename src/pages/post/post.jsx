import React from 'react'
import  { useRouter } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { PostCard } from '../../components'

import './post.scss'

export default function Post() {
  const router = useRouter()
  const { params } = router

  return (
    <View className="post">
      <PostCard title={decodeURI(params.title)} content={decodeURI(params.content)} />
    </View>
  )
}
