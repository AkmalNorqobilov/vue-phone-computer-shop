import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    salom:'dslkfjoijrewklfjsd',
    updateDevice:null,
    isAdmin:false,
    phones:[
      {id:1,  price:3500000,name:'Iphone', height:300, celled: 0, alert:false, image:'phones/15.jpg',title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutPhone:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:2,  price:3500000,name:'Iphone', height:300, celled: 0, alert:false, image:'phones/14.jpg',title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutPhone:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:3,  price:3500000,name:'Iphone', height:300, celled: 0, alert:false, image:'phones/13.jpg',title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutPhone:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:4,  price:3500000,name:'Iphone', height:300, celled: 0, alert:false, image:'phones/12.jpg',title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutPhone:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:5,  price:3500000,name:'Iphone', height:300, celled: 0, alert:false, image:'phones/11.jpg',title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutPhone:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:6,  price:3500000,name:'Iphone', height:300, celled: 0, alert:false, image:'phones/10.jpg',title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutPhone:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:7,  price:3500000,name:'Iphone', height:300, celled: 0, alert:false, image:'phones/9.jpg',title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutPhone:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:8,  price:3500000,name:'Iphone', height:300, celled: 0, alert:false, image:'phones/3.png',title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutPhone:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:9,  price:3500000,name:'Iphone', height:300, celled: 0, alert:false, image:'phones/4.jpg',title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutPhone:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:10, price:3500000, name:'Iphone', height:300,celled: 0, alert:false, image:'phones/20.jpg', title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutPhone:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:11, price:3500000, name:'Iphone', height:300,celled: 0, alert:false, image:'phones/6.jpg', title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutPhone:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:12, price:3500000, name:'Iphone', height:300,celled: 0, alert:false, image:'phones/7.jpg', title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutPhone:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      
    ],
    laptops:[
      {id:1,  price:350000,name:'Acer', celled: 0, alert:false, image:'noutbooks/1.jpg', height:300, title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutLaptop:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:0        
      }},
      {id:2,  price:3100000,name:'Acer', celled: 0, alert:false, image:'noutbooks/2.jpg', height:300, title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutLaptop:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:3,  price:3500000,name:'Acer', celled: 0, alert:false, image:'noutbooks/13.png', height:300, title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutLaptop:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:4,  price:3500000,name:'Acer', celled: 0, alert:false, image:'noutbooks/4.jpg', height:300, title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutLaptop:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:5,  price:3500000,name:'Acer', celled: 0, alert:false, image:'noutbooks/15.png', height:300, title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutLaptop:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:6,  price:3500000,name:'Acer', celled: 0, alert:false, image:'noutbooks/14.png', height:300, title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutLaptop:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:7,  price:3000000,name:'Acer', celled: 0, alert:false, image:'noutbooks/7.jpg', height:300,title: "Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutLaptop:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:8,  price:300000,name:'Acer', celled: 0, alert:false, image:'noutbooks/8.jpg', height:300, title: "Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutLaptop:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:9,  price:500000,name:'Acer', celled: 0, alert:false, image:'noutbooks/16.png', height:300, title: "Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutLaptop:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:10, price:3500000, name:'Acer',celled: 0, alert:false, image:'noutbooks/10.jpg', height:300,  title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutLaptop:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:11, price:3500000, name:'Acer',celled: 0, alert:false, image:'noutbooks/11.png', height:300,  title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutLaptop:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      {id:12, price:3500000, name:'Acer',celled: 0, alert:false, image:'noutbooks/12.png', height:300,  title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutLaptop:{
        marka:'Iphone x',
        ram:16,
        memory:128,
        cameraPx:256000,
        howMany:10        
      }},
      
    ],
    celled:['dkljrie'],
    sum:0,
    numbrs:[0, 5, 5, 'kd']
  },
  mutations: {
    adds(state, value){
      state.celled.push(value)
    }
  },
  actions: {
    add({commit}, value){
      commit('adds', value)
    }
  },
  modules: {

  }
})
