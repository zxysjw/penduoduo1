// pages/dome1/dome1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list: 1,
      shifukuan: 23.9 
  },
  jia (e){
    // console.log(e);
    
    this.setData({
      list : this.data.list + e.currentTarget.dataset.operation, 

    })

  },
  zhifu(){
   
    wx.requestPayment({
      timeStamp: '1490840662',
      nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
      package: 'prepay_id=wx2017033010242291fcfe0db70013231072',
      signType: 'MD5',
      paySign: '',
      success (res) {console.log("支付成功");
       },
      fail (res) {console.log("支付失败"); }
    })
  },

  /**
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})