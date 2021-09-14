// pages/image/image.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imagePath: ''
    },
    handleChooseAlbum() {
        console.log('---------')
        // 系统API，让用户在相处中选择图片（或者拍照）
        wx.chooseImage({
          success: (res) => {
              const path = res.tempFilePaths[0]
              this.setData({
                  imagePath: path
              })
          }
        })
    }
})