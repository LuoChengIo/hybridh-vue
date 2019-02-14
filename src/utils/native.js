import { getUuid } from '@/utils/index'
const topics = {}
const pubsub = {
  publish: function(funcName, uuid, args) {
    // 发布方法
    if (!topics[funcName]) {
      return false
    }
    const subscribers = topics[funcName]
    const len = subscribers ? subscribers.length : 0
    for (let i = 0; i < len; i++) {
      if (subscribers[i].token === uuid) {
        subscribers[i].func(args)
      }
    }
    return true
  },
  subscribe: function(obj, func) {
    // 订阅方法
    if (!topics[obj.funcName]) {
      topics[obj.funcName] = []
    }
    let token = obj.uuid
    topics[obj.funcName].push({
      token: token,
      func: func
    })
    return token
  },
  unsubscribe: function(token) {
    // 退订方法
    for (var m in topics) {
      if (topics[m]) {
        for (var i = 0, j = topics[m].length; i < j; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1)
            return token
          }
        }
      }
    }
    return false
  }
}
//
//'{"uuid":"SDASDASDASDASD","funcName":"funcName","data":{"title":"sdsdsd"}}'前端这边会传类似这种json字符串。所有参数从data里面取。
// js调用原生的方法后，回调格式
// native.callbank(
//           '{
//             uuid:之前传的,
// 		         "funcName":"之前传的"
//             data:{
//               code:'200',
//               message:'21323',
//               data:回传结果
//             }
//           }'
//         )
// 关于APP的部分功能参数
const u = navigator.userAgent
const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
const APP = {
  handler: function(methodsName, params) {
    // js调用app的方法
    if (isIOS) {
      params = params || null
      window.webkit.messageHandlers[methodsName].postMessage(params)
    } else {
      if (params === '' || params === undefined || params === null) {
        window.nativeMethod[methodsName](params)
      } else {
        window.nativeMethod[methodsName]()
      }
    }
  }
}
const jsApiListSupport = [
  'getLoanInfo',
  'goLoanResult',
  'pushToBorrowFromAccountOpenKD'
]
var native = {
  isAndroid: isAndroid,
  isIOS: isIOS,
  ready: function() {
    // {TO}
    try {
      for (var index = 0; index < jsApiListSupport.length; index++) {
        var element = jsApiListSupport[index]
        var funcName = element
        native[funcName] = (function(name) {
          return function(params) {
            // 生成方法
            params = params || {}
            var token = ''
            try {
              var obj = {
                // 传递给app的参数
                uuid: getUuid(),
                funcName: name,
                data: params
              }
              token = pubsub.subscribe(obj.uuid, function(res) {
                // 订阅事件
                if (res.code == '200') {
                  if (typeof params.success === 'function') {
                    params.success(res.data)
                  }
                } else {
                  if (typeof params.fail === 'function') {
                    params.fail(res.message)
                  }
                }
                if (typeof params.complete === 'function') {
                  params.complete()
                }
              })
              APP.handler(name, JSON.stringify(obj)) // 调用app的方法
            } catch (error) {
              // 失败处理
              if (typeof params.fail === 'function') {
                params.fail(error)
              }
              if (typeof params.complete === 'function') {
                params.complete()
              }
            }
            return token
          }
        })(funcName)
      }
    } catch (error) {
      console.log(error)
    }
  },
  callback: function(res) {
    // app回调
    try {
      if (typeof res === 'string') {
        res = JSON.parse(res)
      }
      pubsub.publish(res.funcName, res.uuid, res.data) // 发布事件
    } catch (error) {
      console.log(error)
    }
  },
  unsubscribe: function(token) {
    // 退订订阅
    pubsub.unsubscribe(token)
  }
}
