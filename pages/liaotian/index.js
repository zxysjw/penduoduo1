// pages/liaotian/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      liaotian:[{
        "id":"1",
        "src":"../../images/imgae_1.jpg",
        "name":"江图图书专营店",
        "text":"[请核对您的订单]"
      },
      {
        "id":"2",
        "src":"../../images/image_2.jpg",
        "name":"中州图书旗舰店",
        "text":"[同学 喜欢就尽快拍下哦]"
      },
      {
        "id":"3",
        "src":"../../images/huodong.png",
        "name":"优惠活动通知",
        "text":"[您的专属福利请接收一下!]"
      },
    ],
  },
  getbaiyibutie(){
    let _this=this
    wx.request({
      url:'http://47.93.44.5/commodity',
      success(res) {
        console.log(res) 
        let baiyibutie =res.data
      _this.setData({
      baiyibutie:res.data  
      })      
      }     
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getbaiyibutie()
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