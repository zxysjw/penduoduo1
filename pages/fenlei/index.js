// pages/fenlei/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {  
    left:['推荐','女装','鞋包','食品','百货','洗护','母婴','美妆','内衣','男装','生鲜','家纺','运动','数码'],
  //  right:['推荐','女装','鞋包','食品','百货','洗护','母婴','美妆','内衣','男装','生鲜','家纺','运动','数码'],
  right:[
  {"id":"1","name":"推荐"},
  {"id":"2","name":"女装"},
  {"id":"3","name":"鞋包"},
  {"id":"4","name":"食品"},
  {"id":"5","name":"百货"},
  {"id":"6","name":"洗护"},
  {"id":"7","name":"母婴"},
  {"id":"8","name":"美妆"},
  {"id":"9","name":"内衣"},
  {"id":"10","name":"男装"},
  {"id":"11","name":"生鲜"},
  {"id":"12","name":"家纺"},
  {"id":"13","name":"数码"},
],
   active:''
},
active(e){
  console.log(e);
  this.setData({
    active:e.currentTarget.dataset.index
  })
  
  
},
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
  
  
   
    
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