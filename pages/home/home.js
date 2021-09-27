// pages/home/home.js
import request from '../../service/network.js'
Page({
    data: {

    },

    onLoad: function (options) {
        //发送网络请求 原生方式
        this.get_data_origin()

        //2.发送网络请求 使用封装的request发送网络请求
        // Promise最大的好处就是防止出现会掉地狱
        request({
            url: 'http://localhost:3000/recommend',

        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    get_data_origin() {
        // wx.request({
        //   url: 'http://localhost:3000/home/data',
        //   data: {
        //     type: 'sell',
        //     page: 1
        //   },
        //   success: function(res) {
        //       console.log(res)
        //   }
        // })
        // post请求，并且携带参数
        // wx.request({
        //     url: 'http://httpbin.org/post',
        //     method: 'POST',
        //     data: {
        //       name: 'Z',
        //       age: 18
        //     },
        //     success: function(res) {
        //         console.log(res)
        //     },
        //     fail: function(err) {
        //         console.log(err)
        //     }
        //   })
    }
})