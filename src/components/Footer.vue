<template>
  <div class="wrapper">
    <div class="footer-top">
      <div class="logo">
        <img alt="logo" src="@/assets/logo.svg">
      </div>
      <ul>
        <li class="active"><a href="#">About me</a></li>
        <li><a href="#">Relationships</a></li>
        <li><a href="#">Requirements</a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">Sign up</a></li>
      </ul>
    </div>
    <div class="footer-content">

      <div class="footer-content contacts">

        <span><img src="@/assets/icons/mail.svg" alt="#"> &nbsp; workof.future@gmail.com</span>
        <span><img src="@/assets/icons/phone.svg" alt="#"> &nbsp; +380(050)7892498</span>
        <span><img src="@/assets/icons/cellphone.svg" alt="#"> &nbsp; +38(095)5560845</span>
      </div>
      <div class="footer-content links1">
        
          <a href="#">News</a>
          <a href="#">Blog</a>
          <a href="#">Partners</a>
          <a href="#">Shop</a>
      </div>
      <div class="footer-content links2">

          <a href="#">Overview</a>
          <a href="#">Design</a>
          <a href="#">Code</a>
          <a href="#">Collaborate</a>
      </div>
      <div class="footer-content links3">

          <a href="#">Tutorials</a>
          <a href="#">Resources</a>
          <a href="#">Guides</a>
          <a href="#">Examples</a>
      </div>
      <div class="footer-content links4">

          <a href="#">FAQ</a>
          <a href="#">Terms</a>
          <a href="#">Conditions</a>
          <a href="#">Help</a>
      </div>
      
    </div>
    <div class="footer-bottom">
      <span>&copy;abz.agencyspeciallyforthetesttask
      </span>
      <div class="socials">
        <a href="#"><img alt="facebook" src="@/assets/icons/facebook.svg"></a>
        <a href="#"><img alt="linkedin" src="@/assets/icons/linkedin.svg"></a>
        <a href="#"><img alt="instagram" src="@/assets/icons/instagram.svg"></a>
        <a href="#"><img alt="twitter" src="@/assets/icons/twitter.svg"></a>
        <a href="#"><img alt="pinterest" src="@/assets/icons/pinterest.svg"></a>
      </div>
      
    </div>
    
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped lang="sass">
  .wrapper
    background-color: rgb(41,55,145)
    color: #d5d8e8
    height: 363px
    text-align: center
    width: 100%
    font-family: sans-serif

    bottom: 0
    left: 0
    right: 0


    
    
  .footer-top
    display: flex
    flex-direction: row
    flex-wrap: wrap
    max-width: 100%
    height: 20%
    justify-content: space-between
    border-bottom: 1px solid #595abd
    align-items: center
    line-height: 1px


  .footer-top .logo
    color: #fffff
    height: 31px
    margin-left: 91px
    text-align: center
    align-items: center
    width: 105px
    font-family: 'Source Sans Pro', sans-serif
    font-size: 10px
    text-align: left 
    padding: 5px
  


  .footer-top ul
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    width: 700px
    text-decoration: none
    height: 31px
    

  .footer-top li
    line-height: 30px
    list-style: none
    &.active
      a
        color: #8a8be6

  .footer-top a 
    color: #d5d8e8
    font-family: 'Source Sans Pro', sans-serif
    font-size: 10px
    text-decoration: none
    transition: all ease .9s

    &:hover
      color: rgb(239,108,0)
      transition: all ease .9s


  .footer-content
    display: flex
    flex-direction: row
    justify-content: space-between
    height: 80%
    max-width: 100%
    font-family: 'Source Sans Pro', sans-serif
    

  .footer-content .links1
    flex: 1 1 auto
    display: flex
    flex-direction: column
    text-align: center
    width: 266px 
  .footer-content .links1 a
    font-size: 10px
    text-decoration: none
    color:  #d5d8e8
    padding: 20px
    transition: all ease .9s
    &:hover
      color: rgb(239,108,0)
      padding: 30px
      transition: all ease .9s


  .footer-content .links2
    flex: 1 1 auto
    display: flex
    flex-direction: column
    text-align: center
    width: 266px
  .footer-content .links2 a
    font-size: 10px
    text-decoration: none
    color:  #d5d8e8
    padding: 20px
    transition: all ease .9s
    &:hover
      color: rgb(239,108,0)
      padding: 30px
      transition: all ease .9s


  .footer-content .links3
    flex: 1 1 auto
    display: flex
    flex-direction: column
    text-align: center
    width: 266px
  .footer-content .links3 a
    font-size: 10px
    text-decoration: none
    color:  #d5d8e8
    padding: 20px
    transition: all ease .9s
    &:hover
      color: rgb(239,108,0)
      padding: 30px
      transition: all ease .9s

  .footer-content .links4
    flex: 1 1 auto
    display: flex
    flex-direction: column
    text-align: center
    width: 266px
  .footer-content .links4 a
    font-size: 10px
    text-decoration: none
    color:  #d5d8e8
    padding: 20px
    transition: all ease .9s
    &:hover
      color: rgb(239,108,0)
      padding: 30px
      transition: all ease .9s
    

  .footer-content .contacts
    flex: 1 1 auto
    display: flex
    flex-direction: column
    text-align: left
    width: 266px
    
    
  .footer-content .contacts span
    color: #d5d8e8
    font-size: 12px
    line-height: 6em
    padding-left: 91px

  .footer-content .contacts img
    width: 12px


   
   

  .footer-bottom
    display: flex
    justify-content: space-between
    height: 10%
    background-color: rgb(41,55,145)
    width: 100%
    padding-left: 91px
    padding-right: 35px
    position: sticky
    bottom: 0
    left: 0
    right: 0

  .footer-bottom span
    font-size: 12px
    font-family: 'Source Sans Pro', sans-serif
 
  .footer-bottom .socials
    display: flex
    flex-direction: row
    width: 172px
    justify-content: space-around

  .footer-bottom  img
    transition: all ease 2s
    &:hover
      background-color: rgb(239,108,0)
      transition: all ease 2s
    &:disable
      color: #d4d7e9

  @media screen and (max-width: 1024px)
    .footer-content .contacts span
      color: #d5d8e8
      font-size: 12px
      line-height: 6em
      padding-left: 51px
  @media screen and (max-width: 768px)
    .footer-content .contacts span
      color: #d5d8e8
      font-size: 10px
      line-height: 6em
      padding-left: 10px
    .footer-bottom
      display: flex
      justify-content: space-between
      height: 10%
      background-color: rgb(41,55,145)
      width: 100%
      padding-left: 10px
      padding-right: 35px
      position: sticky
      bottom: 0
      left: 0
      right: 0
    .footer-top .logo
      color: #fffff
      height: 31px
      margin-left: 10px
      text-align: center
      align-items: center
      width: 105px
      font-family: 'Source Sans Pro', sans-serif
      font-size: 10px
      text-align: left 
      padding: 5px
    .footer-top ul
      display: flex
      flex-wrap: wrap
      justify-content: space-around
      width: 500px
      text-decoration: none
      height: 31px
  @media screen and(max-width: 425px)

    .footer-top .logo
      color: #fffff
      height: 31px
      margin-left: 5px
      text-align: center
      align-items: center
      width: 100px
      font-family: 'Source Sans Pro', sans-serif
      font-size: 10px
      text-align: left 
      padding: 5px
    .footer-top ul
      display: flex
      flex-wrap: wrap
      justify-content: space-around
      width: 300px
      text-decoration: none
      height: 31px
    .footer-content .links1
      flex: 1 1 auto
      display: flex
      flex-direction: column
      text-align: center
      width: 100px 
    .footer-content .links1 a
      font-size: 8px
      text-decoration: none
      color:  #d5d8e8
      padding: 5px
      transition: all ease .9s
      &:hover
        color: rgb(239,108,0)
        transition: all ease .9s
    .footer-content .links2
      flex: 1 1 auto
      display: flex
      flex-direction: column
      text-align: center
      width: 100px 
    .footer-content .links2 a
      font-size: 8px
      text-decoration: none
      color:  #d5d8e8
      padding: 5px
      transition: all ease .9s
      &:hover
        color: rgb(239,108,0)
        
        transition: all ease .9s

    .footer-content .links3
      flex: 1 1 auto
      display: flex
      flex-direction: column
      text-align: center
      width: 100px 
    .footer-content .links3 a
      font-size: 8px
      text-decoration: none
      color:  #d5d8e8
      padding: 5px
      transition: all ease .9s
      &:hover
        color: rgb(239,108,0)
        transition: all ease .9s
    .footer-content .links4
      flex: 1 1 auto
      display: flex
      flex-direction: column
      text-align: center
      width: 100px 
    .footer-content .links4 a
      font-size: 8px
      text-decoration: none
      color:  #d5d8e8
      padding: 5px
      transition: all ease .9s
      &:hover
        color: rgb(239,108,0)
        transition: all ease .9s
    .footer-content .contacts span
      color: #d5d8e8
      font-size: 10px
      line-height: 6em
      padding-left: 1px

  @media screen and(max-width: 425px)
    .footer-top .logo
      color: #fffff
      height: 31px
      margin-left: 5px
      text-align: center
      align-items: center
      width: 100px
      font-family: 'Source Sans Pro', sans-serif
      font-size: 10px
      text-align: left 
      padding: 5px
    .footer-top ul
      display: flex
      flex-wrap: wrap
      justify-content: space-around
      width: 250px
      text-decoration: none
      height: 31px



   
    
    
    








  

    

      



  
    

  



   


</style>