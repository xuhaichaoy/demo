import React, { Component } from 'react'

/**
 * 使用 webpack 的 import 方法实现动态加载组件
 * @param {Function} importComponent - example const xx = asyncComponent(() => import('./xxx'))
 */
export const asyncComponent = importComponent =>
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = { component: null }
    }

    async componentDidMount() {
      const { default: component } = await importComponent()
      this.setState({ component })
    }

    render() {
      const RenderComponet = this.state.component
      return RenderComponet ? (
        <RenderComponet {...this.props} />
      ) : ''
    }
  }

export default asyncComponent