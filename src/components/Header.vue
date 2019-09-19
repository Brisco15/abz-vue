<template lang="pug">
  .wrapper
    .logo
      img(alt="logo" src="@/assets/logo.svg")

    <ul>
      <li  id="About_me"><a href="#">About me</a><br/></li>
      <li><a href="#Relationships">Relationships</a><br/></li>
      <li><a href="#Requirements">Requirements</a><br/></li>
      <li><a href="#Our_cheerful_users">Users</a><br/></li>
      <li><a href="#sign_up_form">Sign up</a><br/></li>
    </ul>
   
    .user_infos
      .user_name
        h2 Superstar
        h1 Superstar@gmail.com
      .user_img
        img(src="@/assets/img/user-superstar-2x.jpg" alt="user-superstar-2x")
      .icon-menu
        a(href="#")
        img(alt="sign-out" src="@/assets/icons/sign-out.svg")
    .burger
      img(alt="line-menu" src="@/assets/icons/line-menu.svg")
    

</template>
<script>
  import jquery from 'jquery'
  window.$ = window.jquery =jquery
  $(document).ready(function(){
    $('.burger').click(function(){
      $('.burger').toggleClass('active')
      $('.user_infos').toggleClass('active')
      $('ul').toggleClass('active')
    })
  })
  export default{


  }
  
</script>
<style scoped lang="sass">
  .wrapper
    display: flex
    align-items: center
    width: 100%
    height: 63px
    background-color: rgba(255,255,255, .9)
    font-family: 'Overpass', sans-serif
    position: sticky
    top: 0
    
    

  .logo
    color: rgb(226,226,226)
    height: 31px
    width: 150px
    line-height: 1px
    font-size: 50px
    padding: 5px
    margin-left: 90px

    text-align: left

  ul
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    width: 56%
    font-family: 'verdana'
    text-decoration: none
    padding: 5px
    
      

  li 
    list-style: none
    &.active
      a
        color: rgb(40,53,147)

    
  a
    list-style: none
    color: rgb(37,37,37)
    text-decoration: none
    font-size: 12px
    font-weight: bold
    letter-spacing: 1px
    transition: all ease 1s
    &:hover
      color: rgb(239,108,0)
      transition: all ease 1s


  .user_infos
    display: flex
    justify-content: space-around
    align-items: center
    text-align: right
    font-family: 'verdana'
    font-size: 0.5em
    font-style: regular
    margin-right: 20px
  .user_img
    img
      border-radius: 50%
      width: 50px
      height: 50px
  .icon-menu
    margin-right: 10px
    width: 45px
    height: 45px
    font-size: 24px
    align-items: center
    line-height: 2em

  .burger > *

    color: rgb(40,53,147) 
    width: 30px
    height: 30px 
    margin: 5px
    transition: all 0.5s ease

  .burger
    cursor: pointer
    display: none
    border: none
    border-radius: 100%
    margin-bottom: 20px  
  h1
    color: #b7b7b7

  h2
    font-weight: bold

    
  @media screen and (max-width: 768px)
    body
      overflow-x: hidden
    .logo
      color: rgb(226,226,226)
      height: 31px
      width: 150px
      line-height: 1px
      font-size: 50px
      padding: 5px
      margin-left: 20px
      text-align: left
    .burger
      display: block
      margin-bottom: 5px
      position: relative 
      left: 550px
      top: 5px
    .burger > *
      color: rgb(40,53,147) 
      width: 25px
      height: 25px 
      margin: 5px
      transition: all 0.7s ease
        
    ul
      display: none
    ul.active
      display: block
      width: 40%
      height: 2000px
      position: absolute
      left: 0px
      top: 182px
      text-align: left
      background-color: #fff
      overflow: 100%
      li
        padding: 10px
        font-size: 24px
        font-family: 'Dejavu Sans'
    .user_infos
      display: none
    .user_infos.active
      display: flex
      justify-content: space-between
      flex-direction: column
      align-items: left
      width: 40%
      position: absolute
      left: 0px
      top: 0px
      height: 182px
      border-bottom: 1px solid #e1e1e1
      background-color: #fff
      text-align: left
      .user_img
        order: -1
        img
          border-radius: 50%
          width: 80px
          height: 80px
          margin-left: -130px
          margin-top: 20px
      h1
        color: #b7b7b7
        margin-bottom: 15px
        margin-left: -100px
      h2
        font-weight: bold
        font-size: 22px
        text-align: left
        margin-left: -100px
      .icon-menu
        display: none
  @media screen and (max-width: 425px)
    body
      overflow-x: hidden
    .burger
      display: block
      margin-bottom: 5px
      position: relative 
      left: 200px
      top: 5px
    .burger > *
      color: rgb(40,53,147) 
      width: 25px
      height: 25px 
      margin: 5px
      transition: all 0.7s ease
        
    ul
      display: none
    ul.active
      display: block
      width: 80%
      height: 2000px
      position: absolute
      left: 0px
      top: 182px
      text-align: left
      background-color: #fff
      overflow: 100%
      li
        padding: 10px
        font-size: 24px
        font-family: 'Dejavu Sans'
    .user_infos
      display: none
    .user_infos.active
      display: flex
      justify-content: space-between
      flex-direction: column
      align-items: left
      width: 80%
      position: absolute
      left: 0px
      top: 0px
      height: 182px
      border-bottom: 1px solid #e1e1e1
      background-color: #fff
      text-align: left
      .user_img
        order: -1
        img
          border-radius: 50%
          width: 60px
          height: 60px
          margin-left: -130px
          margin-top: 20px
      h1
        color: #b7b7b7
        margin-bottom: 15px
        margin-left: -100px
      h2
        font-weight: bold
        font-size: 22px
        text-align: left
        margin-left: -100px
      .icon-menu
        display: none

  @media screen and (max-width: 375px)
    body
      overflow-x: hidden
    .burger
      display: block
      margin-bottom: 5px
      position: relative 
      left: 160px
      top: 5px
    .burger > *
      color: rgb(40,53,147) 
      width: 25px
      height: 25px 
      margin: 5px
      transition: all 0.7s ease
        
    ul
      display: none
    ul.active
      display: block
      width: 80%
      height: 2000px
      position: absolute
      left: 0px
      top: 182px
      text-align: left
      background-color: #fff
      overflow: 100%
      li
        padding: 10px
        font-size: 24px
        font-family: 'Dejavu Sans'
    .user_infos
      display: none
    .user_infos.active
      display: flex
      justify-content: space-between
      flex-direction: column
      align-items: left
      width: 80%
      position: absolute
      left: 0px
      top: 0px
      height: 182px
      border-bottom: 1px solid #e1e1e1
      background-color: #fff
      text-align: left
      .user_img
        order: -1
        img
          border-radius: 50%
          width: 60px
          height: 60px
          margin-left: -130px
          margin-top: 20px
      h1
        color: #b7b7b7
        margin-bottom: 15px
        margin-left: -100px
      h2
        font-weight: bold
        font-size: 22px
        text-align: left
        margin-left: -100px
      .icon-menu
        display: none    
  @media screen and (max-width: 320px ) 
    body
      overflow-x: hidden
    .burger
      display: block
      margin-bottom: 5px
      position: relative 
      left: 110px
      top: 5px
    .burger > *
      color: rgb(40,53,147) 
      width: 25px
      height: 25px 
      margin: 5px
      transition: all 0.7s ease
        
    ul
      display: none
    ul.active
      display: block
      width: 80%
      height: 2000px
      position: absolute
      left: 0px
      top: 182px
      text-align: left
      background-color: #fff
      overflow: 100%
      li
        padding: 10px
        font-size: 24px
        font-family: 'Dejavu Sans'
    .user_infos
      display: none
    .user_infos.active
      display: flex
      justify-content: space-between
      flex-direction: column
      align-items: left
      width: 80%
      position: absolute
      left: 0px
      top: 0px
      height: 182px
      border-bottom: 1px solid #e1e1e1
      background-color: #fff
      text-align: left
      .user_img
        order: -1
        img
          border-radius: 50%
          width: 60px
          height: 60px
          margin-left: -120px
          margin-top: 20px
      h1
        color: #b7b7b7
        margin-bottom: 15px
        margin-left: -80px
      h2
        font-weight: bold
        font-size: 22px
        text-align: left
        margin-left: -80px
      .icon-menu
        display: none    
  @media screen and (max-width: 2560px)
    ul
      width: 75%
  @media screen and (max-width: 1440px)
    ul
     width: 53%
  @media screen and (max-width: 1024px)
    ul
     width: 50%


  

    


</style>
