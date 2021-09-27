// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        counter: 0,
        isShow: true
    },

    handleIncrement(event) {
        console.log('+++++',event)
        this.setData({
            counter: this.data.counter + 1
        })
    },
    handletabClick(event) {
        console.log(event)
    },
    handleIncremenCpn(event) {
        //修改my-select数据

        //获取组件对象
        const my_select = this.selectComponent('.sel-class') 
        console.log(my_select)
        //2.通过setData修改组件数据  (不推荐
        // my_select.setData({
        //     counter: my_select.data.counter + 20
        // })

        //3.通过方法对数据进行修改
        my_select.incrementCounter(20)
    },
    handleChangeShow() {
        this.setData({
            isShow: !this.data.isShow
        })
    }
})