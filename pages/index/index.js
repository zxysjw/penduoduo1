//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    nicheng:'心想事成'
  },
 
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
    
    this.getimage()
  },
//  网络请求数据 轮播图的图片 
  getimage(){
    let _this=this
    wx.request({
      url:'http://47.93.44.5/slideshow',
      success(res) {
        console.log(res) 
        // 建一个数组把获取到的数据放在这里
        let image =res.data
      _this.setData({
        // 存放数据
      image:res.data  
      })      
      }     
    })
  },
  getgongge(){
    let _this=this
    wx.request({
      url:'http://47.93.44.5/navigation',
      success(res) {
        console.log(res) 
        let image =res.data
      _this.setData({
      gongge:res.data  
      })      
      }     
    })
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
  jumpPage(e) {
    console.log(e);
    wx.navigateTo({
      url:'../dome1/dome1'
    })
  },
  onLoad: function () {
    // 调用方法 进行网络请求
   this.getimage() 
  this.getgongge()
  this.getbaiyibutie()
 
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
