// pages/home/home.js
Page({
    data: {
        name: 'Zhao',
        age: 18,
        count: 0,
        list: []
    },
    onLoad () {
        wx.request({
            url: 'http://localhost:3000/recommend',
            success: (res) => {
                console.log(res)
                const data = res.data.data.list
                this.setData({
                    list: data
                })
            }
        })
    },
    handleBtnClick () {
        // 1.错误做法
        // this.data.count += 1

        // 2.this.setData()
        this.setData({
            count: this.data.count + 1
        })
    },
    handleSubBtnClick () {
        this.setData({
            count: this.data.count - 1
        })
    }
})