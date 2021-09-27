// pages/home/home.js
Page({
    handleShowToast() {
        wx.showToast({
            title: '你好',
            duration: 1000,
            icon: 'error',
            mask: true,
            success: function() {
                console.log('展示弹窗成功')
            },
            fail: function() {
                console.log('展示弹窗失败')
            },
            complete:  function() {
                console.log('完成函数调用')
            }
        })
    },
    handleShowModal() {
        wx.showModal({
            title: '我是标题',
            content: '我是内容',
            // showCancel: false,
            cancelColor: '#0000ff',
            success: function(res) {
                console.log(res)
                if(res.cancel) {
                    console.log('用户点击了取消按钮')
                }
                if(res.confirm) {
                    console.log('用户点击了确定按钮')
                }
            }
        })
    },
    handleShowLoading() {
        wx.showLoading({
          title: '加载ing',
          mask: true
        })
        setTimeout(() => {
            //必须手动调用hideLoading才会消失
            wx.hideLoading()
        }, 1000)
    },
    handleShowactionSheet() {
        wx.showActionSheet({
          itemList: ['相册','拍照'],
          itemColor: 'red',
          success: function(res) {
              console.log(res)
              
          }
        })
    },
    onShareAppMessage: function (options) {
        return {
            title: '你好，Z',
            path: '/pages/about/about',
            imageUrl: 'http://s3.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_560x999.jpg'
        }
    }
})