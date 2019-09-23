<template>
  <div class="page-wrapper">
    <div class="section1">
      <span>Test assignment for Frontend Developer position
      </span>
      <p>
      We kindly remind you that your test assignment should 
      be submitted as a link to github/bitbucket repository. 
      Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!
      </p>
      <a href="#sign_up_form">
        <button>Sign Up</button>
      </a>
      
    </div>
    <div class="section2">
      <div class="sub-section1">
        <h1>Let's get acquainted</h1>
        <div class="container1">
          <img src="@/assets/img/man-mobile.svg">
          <div class="container2" id="About_me">
            <h2>I am cool frontend developer</h2>
            <p>
              When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.
            </p>
            <p>
              Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web. 
            </p>
            <a href="#sign_up_form">Sign Up</a>
          </div>
        </div>
      </div>
      <div claas="sub-section2" id="Relationships">
        <div class="title">
          About my relationships with
          web-development
        </div>
        <div class="container3">
          <div class="container4">
            <img src="@/assets/img/html.svg">
            <h2>I'm in love with HTML</h2>
            <p>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.</p>
          </div>
          <div class="container5">
            <img src="@/assets/img/css.svg">
            <h2>CSS is my best friend</h2>
            <p>Cascading Style Sheets (CSS) is a  style sheet language used for describing the presentation 
            of a document written in a markup language 
            like HTML.</p>
          </div>
          <div class="container6">
            <img src="@/assets/img/javascript.svg">
            <h2>JavaScript is my passion</h2>
            <p>JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section3" >
      <span id="Requirements">
        General requirements for the test task
      </span>
      <div class="content" >
        <span>
          <p>
            Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.
          </p>
            
          <p>  
            If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.
          </p>
            
          <p>
            Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions. 
          </p>
        </span>
        <img src="@/assets/img/man-laptop-v1.svg">
      </div>
    </div>
    <div class="section4">

      <!-- USERS FORM -->

      <div class="User-form" >
        <h1 id="Our_cheerful_users">Our cheerful users</h1>
        <h2>Attention! Sorting users by registration date</h2>

        <div  class="user" >
          <img class="user_image" src="@/assets/img/user-noah-2x.jpg">
          <div class="user-infos">
            <div class="user_name">Noah</div>
            <div class="user_position">Leading specialist of the Control Department</div>
            <div class="user_email">noah.controldepartment@gmail.com </div>
            <div class="user_telephone">+38 (050) 678 03 24 </div>
          </div>
        </div>
        <div  class="user">
          <img class="user_image" src="@/assets/img/user-adolph-2x.png">
          <div class="user-infos">
            <div class="user_name">Adolph Blaine Charles David Earl </div>
            <div class="user_position">The contextual advertising specialist</div>
            <div class="user_email">adolph.blainecharles-davidearl@example.com </div>
            <div class="user_telephone">+38 (095) 556 08 45</div>
          </div>
        </div>
        <div class="user">
          <img class="user_image" src="@/assets/img/user-liam-2x.jpg">
          <div class="user-infos">
            <div class="user_name">Liamgrievescasey Smith Wiam</div>
            <div class="user_position">Lead designer</div>
            <div class="user_email">liamgrievescasey@example.com </div>
            <div class="user_telephone">+38 (050) 273 93 32 </div>
          </div>
        </div>
        <div class="user">
          <img class="user_image" src="@/assets/img/user-elizabeth-2x.jpg">
          <div class="user-infos">
            <div class="user_name">Elizabeth</div>
            <div class="user_position">Frontend developer</div>
            <div class="user_email">elisabet.frontend@gmail.com </div>
            <div class="user_telephone">+38 (095) 924 66 37 </div>
          </div>
        </div>
        <div class="user">
          <img class="user_image" src="@/assets/img/user-alexander-2x.jpg">
          <div class="user-infos">
            <div class="user_name">Alexander</div>
            <div class="user_position">Backend developer</div>
            <div class="user_email">alexander.backend@gmail.com </div>
            <div class="user_telephone">+38 (050) 789 24 09</div>
          </div>
        </div>
        <div class="user">
          <img class="user_image" src="@/assets/img/user-noah-2x.jpg">
          <div class="user-infos">
            <div class="user_name">Mason</div>
            <div class="user_position">QA</div>
            <div class="user_email">mason.qa@gmail.com </div>
            <div class="user_telephone">+38 (095) 283 27 00</div>
          </div>
        </div> 
       <button class="Show_more" @click="fetchUsers" id="btn_showmore"><a href="#">Show more</a></button>
      </div>

      <!-- Sign up form -->

      <div class="Sign-up-form" id="sign_up_form">
        <h1>Register to get a work</h1>
        <h2>Attention! After successful registration and alert, update the list of users in the block from the top</h2>
        <form class="forms_form" @submit.prevent="submitForm" vfor="(user, index) in users">
          <div class="row1">
            <div class="column1">
              
              <input type="text" name="name" class="form-control" placeholder="Your name" v-model="users.name" required="required">
            </div>
            <div class="column2">
              
              <input type="email" name="email" class="form-control" placeholder="Your email" v-model="users.email" required="required">
            </div>
            <div class="column3">
              
              <input type="tel" name="phone" class="form-control" placeholder="+38 (___)  ___ __ __" v-model="users.phone" required="required">
            </div>
          </div>
          <div class="row2">
            <div class="column4">
              
              <select  class = "form-control"   name="positions" placeholder="Select your position" v-model="users.position"  @click="fetchPositions" required="required">{{users.positions}}
                
                <option>Specialist of the Control Department</option>
                <option>Advertising specialist</option>
                <option>Designer</option>
                <option>Frontend developer</option>
                <option>Backend developer</option>
                <option>QA</option>
                <option>Others</option>
              </select>
            </div>
            <div class="column5">
              
              <input type="photo" name="photo"  placeholder="Upload your photo" class="form-control" v-model="users.photo" required="required">
                <button class="Upload" required="required">Upload</button>
                <span>File format jpg  up to 5 MB, the minimum size of 70x70px</span>

            </div>
            <div class="btn_signup" ><button type="submit" class="signUp" @click="submitForm"><a href="#" onclick="alert('congratulations you signed up')">SignUp</a></button></div>
            
          </div>
          
        </form>

      </div>

    </div>
            <a class="scrollToTop" href="#" >
              <i class="fas fa-arrow-up" aria-hidden="true">To Top</i>
            </a>
  </div>
</template>
<script>
  import axios from 'axios'
  import jquery from 'jquery'

  window.$ = window.jquery =jquery


  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faUserSecret } from '@fortawesome/free-solid-svg-icons'



  $(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop() > 300){
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });
       
         $('.scrollToTop').click(function(){
                              $('html,body').animate({scrollTop: 0}, 1000)
     })
    
  });


  const headers = {
    "Content-Type": "application/json",
    "Token": "eyJpdiI6IkNCV2srRkZLT01rcld0aDMzcUtDamc9PSIsInZhbHVlIjoiVWdnb1d3WFd4WHZXWEd0NGRKV0dWZjJ4WGEwaGpwaWt0eUtId3BYbFg2QTVNcXhHUExzUGQ2Y1VVcURRaGdTd2pZR3RPekxxYklcL0kra3haRW5CaFwvUT09IiwibWFjIjoiYjgyNWJmNTQzMDIyYTM1YTAyNDczZmQzNTQzODljYzYwYzFkYmEwZjVmMWYxMjFkMzJjMzBiYzAyZDM5NDMxOSJ9"
    
  };
  const body = {
    "Content-Type": "application/json"
  }
  export default{
    name: 'app',
    data(){
      return{
        users: [
          {
            name: '',
            email: '',
            phone: '',
            position: '',
            photo: ''

          }

        ],
        positions: [
        {
          name: '',
          id: ''
        }
        ]
      };
    },
    methods: {
      fetchUsers(){
        let url=`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`
        fetch(url)
          .then(res=> res.json())
          .then(data => {
            console.log(data)
            this.users = data.users.items
          })
      },
      fetchPositions(){
        let url=`https://frontend-test-assignment-api.abz.agency/api/v1/positions`
        fetch(url)
            .then(res=> res.json())
            .then(data=>{
              console.log(data)
              this.positions = data.positions.data
            })
      },
      submitForm(){
        let url = `https://frontend-test-assignment-api.abz.agency/api/v1/users`
        axios.post(url,{headers},{body})
          .then(res => res.json())
          .then(data => {
            console.log(data)
            this.form= data.Formdata
          })

      }
      
    
    },
    mounted(){
      this.fetchUsers();
      this.fetchPositions();
      this.submitForm();
      
    },
    watch: {
      type: function(){
        this.fetchUsers();
        this.fetchPositions();
        this.submitForm();
      }
    }

  }
</script>
<style scoped lang="sass">
  .page-wrapper
    background-color: rgb(255,255,255)
    min-height: 3894px
    width: 100%
  .scrollToTop
    position: fixed
    bottom: 90px
    right: 100px
    height: 40px
    border-radius: 50px
    width: 40px
    text-align: center
    background:  grey
    line-height: 40px
    opacity: 0.8
    display: none
    color: #f66f09
  .fas fa-arrow-up
    color: #f66f09
    height: 30px
    width: 30px
  

  .section1
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: left
    padding-left: 91px
    text-align: left 
    height: 672px
    max-width: 1170px
    margin-left: 91px
    background-image: url(../assets/img/bg-1.webp)
    background-repeat: no-repeat
    background-size: cover
  .section1 span
    flex: 1
    width: 449px
    height: 41
    color: rgb(255,255,255)
    font-family: 'Overpass', sans-serif
    font-size: 50px
    font-style: SemiBold
    margin-bottom: 25px
    margin-top: 138px
  .section1 p
    flex: 1
    width: 536px
    height: 122px
    color: rgb(255,255,255)
    font-family: 'Source Sans Pro', sans-serif
    font-size: 20px
    font-style: regular
    margin-bottom: 40px
  .section1 button
    flex: 1
    background-color: #ef6c00
    color: #fff
    height: 41px
    width: 288px
    margin-bottom: 140px
    margin-top: 40px
    border: 1px inherent #ef6c00
    border-radius: 5px
    transition: all ease .7s
    &:hover
      cursor: pointer
      background-color: #db9153
      color: #ef6c00
      transition: all ease .7s
  .section2 
    height: 1000px
    max-width: 1170px
    padding-left: 91px
  .section2 h1
    width: 1025px
    height: 76px
    font-family: 'Overpass', sans-serif
    font-size: 42px
    font-style: SemiBold
    text-align: center
    padding: 5px
  .sub-section1
    display: block
    height: 425px
    width: 1170px
    padding-top: 135px
    margin-bottom: 75px
  .container1
    display: flex
    flex-direction: row
    justify-content: space-between
    width: 1170px
    height: 285px
  .container1 img
    width: 296px
    height: 295px
  .container2
    display: block
    text-align: left
    height: 217px
    width: 750px
  .container2 h2
    font-family: 'Overpass', sans-serif
    font-size: 24px
    font-style: SemiBold
  .container2 p
    font-family: 'Source Sans Pro', sans-serif
    font-size: 14px
    font-style: Regular 
    height: 70px
    width: 750px
    color: #a6a5a5
  .container2 a
    text-decoration: none
    color: #ef6c00 
    font-family: 'Source Sans Pro', sans-serif
    font-size: 16px
    font-weight: bold
    transition: all ease 0.7s
    &:hover
      color: #f6ac6f
      transition: all ease 0.7s
  .sub-section2
    display: block
    height: 300px
    width: 1170px
    text-align: center
    align-items: center
  .title
    height: 80px
    width: 667px
    font-family: 'Sans Source Pro', sans-serif
    font-size: 42px
    font-weight: 600
    text-align: center
    align-items: center
    margin-left: 280px
    margin-bottom: 61px
  .container3
    display: flex
    flex-direction: row
    justify-content: space-around
    text-align: left
    align-items: center
    height: 358px
    width: 1170px
  .container4
    flex: 1 1 auto
    display: block
    width: 309px
    height: 274px
  .container4 img
    width: 98px
    height: 117px
  .container4 h2
    width: 293px
    height: 34px
    font-family: 'Overpass'
    font-size: 26px 
    font-style: SemiBold
  .container4 p
    width: 360px
    height: 108px
    color: #4c4b4b
    font-family: 'Source Sans Pro'
    font-size: 16px
  .container5
    flex: 1 1 auto
    display: block
    width: 309px
    height: 274px
  .container5 img
    width: 98px
    height: 117px
  .container5 h2
    width: 293px
    height: 34px
    font-family: 'Overpass'
    font-size: 26px 
    font-style: SemiBold 
  .container5 p
    width: 360px
    height: 108px
    color: #4c4b4b
    font-family: 'Source Sans Pro'
    font-size: 16px
  .container6
    flex: 1 1 auto
    display: block
    width: 309px
    height: 274px
  .container6 img
    width: 98px
    height: 117px
  .container6 h2
    width: 293px
    height: 34px
    font-family: 'Overpass'
    font-size: 26px 
    font-style: SemiBold
  .container6 p
    width: 360px
    height: 108px
    color: #4c4b4b
    font-family: 'Source Sans Pro'
    font-size: 16px
  .section3
    display: block 
    height: 638px
    max-width: 1170px
    background-image: url(../assets/img/bg-2.webp)
    background-repeat: no-repeat
    background-size: cover
    margin-left: 91px
    padding-top: 120px
    margin-bottom: 96px
  .section3 span
    font-family: 'Overpass', sans-serif
    font-size: 42px
    font-style: SemiBold
    color: #fff
    width: 730px
    margin-top: 130px
  .section3 .content
    display: flex
    text-align: center
    align-items: center
    flex-direction: row
    padding-top: 50px
    width: 1073px
    height: 374px
    justify-content: space-between
  .section3 .content span
    text-align: left
    font-size: 16px
    font-style: regular
    font-family: 'Source Sans Pro'
    color: #ced5e9
  .section3 .content p
    margin-bottom: 30px
    margin-left: 91px
    width: 555px 
  .section3 .content img 
    width: 466px
    height: 372px
    text-align: center
    align-items: center
  .section4
    height: 1390px
    max-width: 1170px
    display: block
    margin-left: 91px
  .section4 .User-form
    display: block
    max-width: 1170px
    height: 555px
    margin-bottom: 90px
  .section4 h1
    font-family: 'Overpass'
    font-size: 42px
    font-style: SemiBold
  .section4 h2
    font-family: 'Source Sans Pro'
    font-size: 18px
    font-style: Regular
  .section4 .user 
    display: flex
    flex-direction: row
    justify-content: space-around
    margin: 2em
    max-width: 330px
    min-height: 126px
    margin-top: 50px
    float: left
  .section4 .user_image
    border-radius: 50%
    width: 50px
    height: 50px
  .section4 .user-infos
    display: block
    text-align: left
    font-family: 'Source Sans Pro'
    font-size: 14px
    color: #4c4b4b
  .section4 .user-infos .user_name
    font-family: 'Overpass'
    font-weight: 600
    font-size: 22px
    width: 226px
    height: 50px
    margin-bottom: 3px
    color: #000
  .section4 .user-infos .user_position
    width: 277px
    height: 17px 
  .section4 .user-infos .user_email
    width: 277px
    height: 17px 
  .section4 .user-infos .user_telephone
    max-width: 120px
    max-height: 15px 
  .section4 button
    width: 290px
    height: 40px
    background-color: #fff
    border: 1px solid #ef6c00
    border-radius: 5px
    cursor: pointer
    transition: all ease .7s
    clear: left
    &:hover
      background-color: #ef6c00
      transition: all ease .7s
  .section4 button a
    color: #ef6c00
    text-decoration: none
    transition: all ease .7s
    &:hover
      color: #fff
      transition: all ease .7s
  .forms_form
    height: 690px
    max-width: 1170px
    margin-top: 200px
  .row1
    height: 60px
    width: 1170px
    margin-top: 20px
    display: grid
    grid-template-columns: 360px 360px 360px
    grid-template-rows:  1fr 1fr 1fr
    grid-template-areas: "column1 column2 column3"
  .column1
    grid-area: column1
    height: 45px
    margin-right: 10px 
  .column2
    grid-area: column2
    height: 45px
    margin-right: 10px
  .column3
    grid-area: column3
    height: 45px
  .form-control 
    height: 36px 
    width: 300px
  .row2
    height: 60px
    width: 1170px
    margin-top: 20px
    display: grid
    grid-template-columns: 555px 555px 
    grid-template-rows:  1fr 
    grid-template-areas: "column4 column5"
    text-align: left
  .row2 .form-control
    height: 40px 
    width: 470px
  .btn_signup
    width: 1170px
    height: 50px
    text-align: center
    margin-top: 140px
  .column4
    grid-area: column4
    width: 555px
    height: 45px
    margin-left: 20px
  .column5
    grid-area: column5
    width: 560px
    height: 45px
  .column5 .Upload 
    width: 98px
    height: 40px
  .column5 .form-control 
    width: 462px
    height: 40px
  .column5 span
    width: 283px
    margin-left: 10px
    font-family: 'Source Sans Pro'
    font-size: 12px
    font-weight: regular
    color: #8d8c8c


  @media only screen and (width: 2560px)
    .section1
      display: flex
      flex-direction: column
      justify-content: space-around
      align-items: left
      padding-left: 91px
      text-align: left 
      height: 672px
      max-width: 100%
      background-image: url(../assets/img/bg-1.jpg)
      background-repeat: no-repeat
      background-size: cover
    .section1 span
      flex: 1
      width: 449px
      height: 41
      color: rgb(255,255,255)
      font-family: 'Overpass', sans-serif
      font-size: 50px
      font-style: SemiBold
      margin-bottom: 25px
      margin-top: 138px
      margin-left: 604px
    .section1 p
      flex: 1
      width: 536px
      height: 122px
      color: rgb(255,255,255)
      font-family: 'Source Sans Pro', sans-serif
      font-size: 20px
      font-style: regular
      margin-bottom: 40px
      margin-left: 604px
    .section1 button
      flex: 1
      background-color: #ef6c00
      color: #fff
      height: 41px
      width: 288px
      margin-bottom: 140px
      margin-top: 40px
      margin-left: 604px
      border: 1px inherent #ef6c00
      border-radius: 5px
      transition: all ease .7s
      &:hover
        cursor: pointer
        background-color: #db9153
        color: #ef6c00
        transition: all ease .7s
    .section2 
      height: 1000px
      max-width: 100%
      padding-left: 91px
      
    .section2 h1
      width: 1025px
      height: 76px
      font-family: 'Overpass', sans-serif
      font-size: 42px
      font-style: SemiBold
      text-align: center
      padding: 5px
    .sub-section1
      display: block
      height: 425px
      width: 1170px
      padding-top: 135px
      margin-left: 695px
      margin-bottom: 75px
    .container1
      display: flex
      flex-direction: row
      justify-content: space-between
      width: 1170px
      height: 285px
    .container1 img
      width: 296px
      height: 295px
    .container2
      display: block
      text-align: left
      height: 217px
      width: 750px
    .container2 h2
      font-family: 'Overpass', sans-serif
      font-size: 24px
      font-style: SemiBold
    .container2 p
      font-family: 'Source Sans Pro', sans-serif
      font-size: 14px
      font-style: Regular 
      height: 70px
      width: 750px
      color: #a6a5a5
    .container2 a
      text-decoration: none
      color: #ef6c00 
      font-family: 'Source Sans Pro', sans-serif
      font-size: 16px
      font-weight: bold
      transition: all ease 0.7s
      &:hover
        color: #f6ac6f
        transition: all ease 0.7s
    .sub-section2
      display: block
      height: 300px
      width: 1170px
      text-align: center
      align-items: center
    .title
      height: 80px
      width: 667px
      font-family: 'Sans Source Pro', sans-serif
      font-size: 42px
      font-weight: 600
      text-align: center
      align-items: center
      margin-left: 950px
      margin-bottom: 61px
    .container3
      display: flex
      flex-direction: row
      justify-content: space-around
      text-align: left
      align-items: center
      height: 358px
      width: 1170px
      margin-left: 700px
    .container4
      flex: 1 1 auto
      display: block
      width: 309px
      height: 274px
    .container4 img
      width: 98px
      height: 117px
    .container4 h2
      width: 293px
      height: 34px
      font-family: 'Overpass'
      font-size: 26px 
      font-style: SemiBold
    .container4 p
      width: 360px
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 16px
    .container5
      flex: 1 1 auto
      display: block
      width: 309px
      height: 274px
    .container5 img
      width: 98px
      height: 117px
    .container5 h2
      width: 293px
      height: 34px
      font-family: 'Overpass'
      font-size: 26px 
      font-style: SemiBold 
    .container5 p
      width: 360px
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 16px
    .container6
      flex: 1 1 auto
      display: block
      width: 309px
      height: 274px
    .container6 img
      width: 98px
      height: 117px
    .container6 h2
      width: 293px
      height: 34px
      font-family: 'Overpass'
      font-size: 26px 
      font-style: SemiBold
    .container6 p
      width: 360px
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 16px
    .section3
      display: block 
      height: 638px
      max-width: 100%
      background-image: url(../assets/img/bg-2.jpg)
      background-repeat: no-repeat
      background-size: cover
      margin-left: 91px
      padding-top: 120px
      margin-bottom: 96px
    .section3 span
      font-family: 'Overpass', sans-serif
      font-size: 42px
      font-style: SemiBold
      color: #fff
      width: 730px
      margin-top: 130px

    .section3 .content
      display: flex
      text-align: center
      align-items: center
      flex-direction: row
      padding-top: 50px
      margin-left: 604px
      width: 1073px
      height: 374px
      justify-content: space-between
    .section3 .content span
      text-align: left
      font-size: 16px
      font-style: regular
      font-family: 'Source Sans Pro'
      color: #ced5e9
    .section3 .content p
      margin-bottom: 30px
      margin-left: 91px
      width: 555px 
    .section3 .content img 
      width: 466px
      height: 372px
      text-align: center
      align-items: center


    .section4
      height: 1500px
      max-width: 100%
      display: block
      margin-left: 91px
    .section4 .User-form
      display: block
      max-width: 1170px
      height: 555px
      
    .User-form h1
      font-family: 'Overpass'
      font-size: 42px
      font-style: SemiBold
      margin-left: 1000px
      width: 500px
    .User-form h2
      font-family: 'Source Sans Pro'
      font-size: 18px
      font-style: Regular
      margin-left: 1000px
      width: 500px
    .section4 .user 
      
      
      
    .section4 .user_image
      border-radius: 50%
      width: 50px
      height: 50px
    .section4 .user-infos
      display: block
      text-align: left
      font-family: 'Source Sans Pro'
      font-size: 14px
      color: #4c4b4b
    .section4 .user-infos .user_name
      font-family: 'Overpass'
      font-weight: 600
      font-size: 22px
      width: 226px
      height: 50px
      margin-bottom: 3px
      color: #000
    .section4 .user-infos .user_position
      width: 277px
      height: 17px 
    .section4 .user-infos .user_email
      width: 277px
      height: 17px 
    .section4 .user-infos .user_telephone
      max-width: 120px
      max-height: 15px 
    .section4 button
      width: 290px
      height: 40px
      background-color: #fff
      border: 1px solid #ef6c00
      border-radius: 5px
      cursor: pointer
      transition: all ease .7s
      clear: left
      &:hover
        background-color: #ef6c00
        transition: all ease .7s
    .section4 button a
      color: #ef6c00
      text-decoration: none
      transition: all ease .7s
      &:hover
        color: #fff
        transition: all ease .7s
    .forms_form
      height: 690px
      max-width: 100%
      margin-top: 200px
    .row1
      height: 60px
      width: 100%
      margin-left: 600px
      margin-top: 20px
      display: grid
      grid-template-columns: 360px 360px 360px
      grid-template-rows:  1fr 1fr 1fr
      grid-template-areas: "column1 column2 column3"
    .column1
      grid-area: column1
      height: 45px
      margin-right: 10px 
    .column2
      grid-area: column2
      height: 45px
      margin-right: 10px
    .column3
      grid-area: column3
      height: 45px
    .form-control 
      height: 36px 
      width: 300px
    .Sign-up-form
      width: 100%
      padding-top: 150px
    .row2
      height: 60px
      width: 100%
      margin-top: 20px
      display: grid
      grid-template-columns: 555px 555px 
      grid-template-rows:  1fr 
      grid-template-areas: "column4 column5"
      text-align: left
      margin-left: 600px
    .row2 .form-control
      height: 40px 
      width: 470px
    .btn_signup
      width: 1170px
      height: 50px
      text-align: center
      margin-top: 140px
    .column4
      grid-area: column4
      width: 555px
      height: 45px
      margin-left: 20px
    .column5
      grid-area: column5
      width: 560px
      height: 45px
    .column5 .Upload 
      width: 98px
      height: 40px
    .column5 .form-control 
      width: 462px
      height: 40px
    .column5 span
      width: 283px
      margin-left: 10px
      font-family: 'Source Sans Pro'
      font-size: 12px
      font-weight: regular
      color: #8d8c8c

  @media screen and (max-width: 1440px)
    .scrollToTop
      position: fixed
      bottom: 90px
      right: 200px
      height: 40px
      border-radius: 50px
      width: 40px
      text-align: center
      background:  grey
      line-height: 40px
      opacity: 0.8
      display: none
      color: #f66f09
    .section1
      display: flex
      flex-direction: column
      justify-content: space-around
      align-items: left
      padding-left: 91px
      text-align: left 
      height: 672px
      max-width: 1170px
      margin-left: 91px
      background-image: url(../assets/img/bg-1.jpg)
      background-repeat: no-repeat
      background-size: cover
    .section1 span
      flex: 1
      width: 449px
      height: 41
      color: rgb(255,255,255)
      font-family: 'Overpass', sans-serif
      font-size: 50px
      font-style: SemiBold
      margin-bottom: 25px
      margin-top: 138px
    .section1 p
      flex: 1
      width: 536px
      height: 122px
      color: rgb(255,255,255)
      font-family: 'Source Sans Pro', sans-serif
      font-size: 20px
      font-style: regular
      margin-bottom: 40px
    .section1 button
      flex: 1
      background-color: #ef6c00
      color: #fff
      height: 41px
      width: 288px
      margin-bottom: 140px
      margin-top: 40px
      border: 1px inherent #ef6c00
      border-radius: 5px
      transition: all ease .7s
      &:hover
        cursor: pointer
        background-color: #db9153
        color: #ef6c00
        transition: all ease .7s
    .section2 
      height: 1000px
      max-width: 1170px
      padding-left: 91px
    .section2 h1
      width: 1025px
      height: 76px
      font-family: 'Overpass', sans-serif
      font-size: 42px
      font-style: SemiBold
      text-align: center
      padding: 5px
    .sub-section1
      display: block
      height: 425px
      width: 1170px
      padding-top: 135px
      margin-bottom: 75px
    .container1
      display: flex
      flex-direction: row
      justify-content: space-between
      width: 1170px
      height: 285px
    .container1 img
      width: 296px
      height: 295px
    .container2
      display: block
      text-align: left
      height: 217px
      width: 750px
    .container2 h2
      font-family: 'Overpass', sans-serif
      font-size: 24px
      font-style: SemiBold
    .container2 p
      font-family: 'Source Sans Pro', sans-serif
      font-size: 14px
      font-style: Regular 
      height: 70px
      width: 750px
      color: #a6a5a5
    .container2 a
      text-decoration: none
      color: #ef6c00 
      font-family: 'Source Sans Pro', sans-serif
      font-size: 16px
      font-weight: bold
      transition: all ease 0.7s
      &:hover
        color: #f6ac6f
        transition: all ease 0.7s
    .sub-section2
      display: block
      height: 300px
      width: 1170px
      text-align: center
      align-items: center
    .title
      height: 80px
      width: 667px
      font-family: 'Sans Source Pro', sans-serif
      font-size: 42px
      font-weight: 600
      text-align: center
      align-items: center
      margin-left: 280px
      margin-bottom: 61px
    .container3
      display: flex
      flex-direction: row
      justify-content: space-around
      text-align: left
      align-items: center
      height: 358px
      width: 1170px
    .container4
      flex: 1 1 auto
      display: block
      width: 309px
      height: 274px
    .container4 img
      width: 98px
      height: 117px
    .container4 h2
      width: 293px
      height: 34px
      font-family: 'Overpass'
      font-size: 26px 
      font-style: SemiBold
    .container4 p
      width: 360px
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 16px
    .container5
      flex: 1 1 auto
      display: block
      width: 309px
      height: 274px
    .container5 img
      width: 98px
      height: 117px
    .container5 h2
      width: 293px
      height: 34px
      font-family: 'Overpass'
      font-size: 26px 
      font-style: SemiBold 
    .container5 p
      width: 360px
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 16px
    .container6
      flex: 1 1 auto
      display: block
      width: 309px
      height: 274px
    .container6 img
      width: 98px
      height: 117px
    .container6 h2
      width: 293px
      height: 34px
      font-family: 'Overpass'
      font-size: 26px 
      font-style: SemiBold
    .container6 p
      width: 360px
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 16px
    .section3
      display: block 
      height: 638px
      max-width: 1170px
      background-image: url(../assets/img/bg-2.jpg)
      background-repeat: no-repeat
      background-size: cover
      margin-left: 91px
      padding-top: 120px
      margin-bottom: 96px
    .section3 span
      font-family: 'Overpass', sans-serif
      font-size: 42px
      font-style: SemiBold
      color: #fff
      width: 730px
      margin-top: 130px
    .section3 .content
      display: flex
      text-align: center
      align-items: center
      flex-direction: row
      padding-top: 50px
      width: 1073px
      height: 374px
      justify-content: space-between
    .section3 .content span
      text-align: left
      font-size: 16px
      font-style: regular
      font-family: 'Source Sans Pro'
      color: #ced5e9
    .section3 .content p
      margin-bottom: 30px
      margin-left: 91px
      width: 555px 
    .section3 .content img 
      width: 466px
      height: 372px
      text-align: center
      align-items: center
    .section4
      height: 1390px
      max-width: 1170px
      display: block
      margin-left: 91px
    .section4 .User-form
      display: block
      max-width: 1170px
      height: 555px
      margin-bottom: 90px
    .section4 h1
      font-family: 'Overpass'
      font-size: 42px
      font-style: SemiBold
    .section4 h2
      font-family: 'Source Sans Pro'
      font-size: 18px
      font-style: Regular
    .section4 .user 
      display: flex
      flex-direction: row
      justify-content: space-around
      margin: 2em
      max-width: 330px
      min-height: 126px
      margin-top: 50px
      float: left
    .section4 .user_image
      border-radius: 50%
      width: 50px
      height: 50px
    .section4 .user-infos
      display: block
      text-align: left
      font-family: 'Source Sans Pro'
      font-size: 14px
      color: #4c4b4b
    .section4 .user-infos .user_name
      font-family: 'Overpass'
      font-weight: 600
      font-size: 22px
      width: 226px
      height: 50px
      margin-bottom: 3px
      color: #000
    .section4 .user-infos .user_position
      width: 277px
      height: 17px 
    .section4 .user-infos .user_email
      width: 277px
      height: 17px 
    .section4 .user-infos .user_telephone
      max-width: 120px
      max-height: 15px 
    .section4 button
      width: 290px
      height: 40px
      background-color: #fff
      border: 1px solid #ef6c00
      border-radius: 5px
      cursor: pointer
      transition: all ease .7s
      clear: left
      &:hover
        background-color: #ef6c00
        transition: all ease .7s
    .section4 button a
      color: #ef6c00
      text-decoration: none
      transition: all ease .7s
      &:hover
        color: #fff
        transition: all ease .7s
    .forms_form
      height: 690px
      max-width: 1170px
      margin-top: 200px
    .row1
      height: 60px
      width: 1170px
      margin-top: 20px
      display: grid
      grid-template-columns: 360px 360px 360px
      grid-template-rows:  1fr 1fr 1fr
      grid-template-areas: "column1 column2 column3"
    .column1
      grid-area: column1
      height: 45px
      margin-right: 10px 
    .column2
      grid-area: column2
      height: 45px
      margin-right: 10px
    .column3
      grid-area: column3
      height: 45px
    .form-control 
      height: 36px 
      width: 300px
    .row2
      height: 60px
      width: 1170px
      margin-top: 20px
      display: grid
      grid-template-columns: 555px 555px 
      grid-template-rows:  1fr 
      grid-template-areas: "column4 column5"
      text-align: left
    .row2 .form-control
      height: 40px 
      width: 470px
    .btn_signup
      width: 1170px
      height: 50px
      text-align: center
      margin-top: 140px
    .column4
      grid-area: column4
      width: 555px
      height: 45px
      margin-left: 20px
    .column5
      grid-area: column5
      width: 560px
      height: 45px
    .column5 .Upload 
      width: 98px
      height: 40px
    .column5 .form-control 
      width: 462px
      height: 40px
    .column5 span
      width: 283px
      margin-left: 10px
      font-family: 'Source Sans Pro'
      font-size: 12px
      font-weight: regular
      color: #8d8c8c


  @media screen and (max-width: 1024px)
    .scrollToTop
      position: fixed
      bottom: 90px
      right: 100px
      height: 40px
      border-radius: 50px
      width: 40px
      text-align: center
      background:  grey
      line-height: 40px
      opacity: 0.8
      display: none
      color: #f66f09
    .section1
      display: flex
      flex-direction: column
      justify-content: space-around
      align-items: left
      padding-left: 91px
      text-align: left 
      height: 672px
      max-width: 100%
      margin-left: 91px
      background-image: url(../assets/img/bg-1.jpg)
      background-repeat: no-repeat
      background-size: cover
    .section1 span
      flex: 1
      width: 449px
      height: 41
      color: rgb(255,255,255)
      font-family: 'Overpass', sans-serif
      font-size: 50px
      font-style: SemiBold
      margin-bottom: 25px
      margin-top: 138px
    .section1 p
      flex: 1
      width: 536px
      height: 122px
      color: rgb(255,255,255)
      font-family: 'Source Sans Pro', sans-serif
      font-size: 20px
      font-style: regular
      margin-bottom: 40px
    .section1 button
      flex: 1
      background-color: #ef6c00
      color: #fff
      height: 41px
      width: 288px
      margin-bottom: 140px
      margin-top: 40px
      border: 1px inherent #ef6c00
      border-radius: 5px
      transition: all ease .7s
      &:hover
        cursor: pointer
        background-color: #db9153
        color: #ef6c00
        transition: all ease .7s
    .section2 
      height: 1000px
      max-width: 100%
      padding-left: 91px
    .section2 h1
      width: 1020px
      height: 76px
      font-family: 'Overpass', sans-serif
      font-size: 42px
      font-style: SemiBold
      text-align: center
      padding: 5px
    .sub-section1
      display: block
      height: 425px
      width: 100%
      padding-top: 135px
      margin-bottom: 75px
    .container1
      display: flex
      flex-direction: row
      justify-content: space-between
      width: 100%
      height: 285px
    .container1 img
      width: 296px
      height: 295px
    .container2
      display: block
      text-align: left
      height: 217px
      width: 650px
    .container2 h2
      font-family: 'Overpass', sans-serif
      font-size: 24px
      font-style: SemiBold
    .container2 p
      font-family: 'Source Sans Pro', sans-serif
      font-size: 14px
      font-style: Regular 
      height: 100px
      width: 600px
      color: #a6a5a5
    .container2 a
      text-decoration: none
      color: #ef6c00 
      font-family: 'Source Sans Pro', sans-serif
      font-size: 16px
      font-weight: bold
      transition: all ease 0.7s
      &:hover
        color: #f6ac6f
        transition: all ease 0.7s
    .sub-section2
      display: block
      height: 300px
      width: 100%
      text-align: center
      align-items: center
    .title
      height: 80px
      width: 667px
      font-family: 'Sans Source Pro', sans-serif
      font-size: 42px
      font-weight: 600
      text-align: center
      align-items: center
      margin-left: 280px
      margin-bottom: 61px
    .container3
      display: flex
      flex-direction: row
      justify-content: space-around
      text-align: left
      align-items: center
      height: 358px
      width: 100%
    .container4
      flex: 1 1 auto
      display: block
      width: 300px
      height: 274px
    .container4 img
      width: 98px
      height: 117px
    .container4 h2
      width: 293px
      height: 34px
      font-family: 'Overpass'
      font-size: 26px 
      font-style: SemiBold
    .container4 p
      width: 300px
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 16px
    .container5
      flex: 1 1 auto
      display: block
      width: 300px
      height: 274px
    .container5 img
      width: 98px
      height: 117px
    .container5 h2
      width: 293px
      height: 34px
      font-family: 'Overpass'
      font-size: 26px 
      font-style: SemiBold 
    .container5 p
      width: 300px
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 16px
    .container6
      flex: 1 1 auto
      display: block
      width: 300px
      height: 274px
    .container6 img
      width: 98px
      height: 117px
    .container6 h2
      width: 293px
      height: 34px
      font-family: 'Overpass'
      font-size: 26px 
      font-style: SemiBold
    .container6 p
      width: 300px
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 16px
    .section3
      display: block 
      height: 638px
      max-width: 100%
      background-image: url(../assets/img/bg-2.jpg)
      background-repeat: no-repeat
      background-size: cover
      margin-left: 91px
      padding-top: 50px
      margin-bottom: 60px
    .section3 span
      font-family: 'Overpass', sans-serif
      font-size: 42px
      font-style: SemiBold
      color: #fff
      width: 730px
      margin-top: 120px
    .section3 .content
      display: flex
      text-align: center
      align-items: center
      flex-direction: row
      padding-top: 30px
      width: 100%
      height: 374px
      justify-content: space-between
    .section3 .content span
      text-align: left
      font-size: 16px
      font-style: regular
      font-family: 'Source Sans Pro'
      color: #ced5e9
    .section3 .content p
      margin-bottom: 30px
      margin-left: 91px
      width: 400px 
    .section3 .content img 
      width: 385px
      height: 372px
      text-align: center
      align-items: center
    .section4
      height: 1390px
      max-width: 100%
      display: block
      margin-left: 91px
    .section4 .User-form
      display: block
      max-width: 100%
      height: 555px
      margin-bottom: 90px
    .section4 h1
      font-family: 'Overpass'
      font-size: 42px
      font-style: SemiBold
    .section4 h2
      font-family: 'Source Sans Pro'
      font-size: 18px
      font-style: Regular
    .section4 .user 
      display: flex
      flex-direction: row
      justify-content: space-around
      margin: 2em
      max-width: 330px
      min-height: 126px
      margin-top: 50px
      float: left
    .section4 .user_image
      border-radius: 50%
      width: 50px
      height: 50px
    .section4 .user-infos
      display: block
      text-align: left
      font-family: 'Source Sans Pro'
      font-size: 14px
      color: #4c4b4b
    .section4 .user-infos .user_name
      font-family: 'Overpass'
      font-weight: 600
      font-size: 22px
      width: 226px
      height: 50px
      margin-bottom: 3px
      color: #000
    .section4 .user-infos .user_position
      width: 277px
      height: 17px 
    .section4 .user-infos .user_email
      width: 277px
      height: 17px 
    .section4 .user-infos .user_telephone
      max-width: 120px
      max-height: 15px 
    .section4 button
      width: 290px
      height: 40px
      background-color: #fff
      border: 1px solid #ef6c00
      border-radius: 5px
      cursor: pointer
      transition: all ease .7s
      clear: left
      &:hover
        background-color: #ef6c00
        transition: all ease .7s
    .section4 button a
      color: #ef6c00
      text-decoration: none
      transition: all ease .7s
      &:hover
        color: #fff
        transition: all ease .7s
    .forms_form
      height: 690px
      max-width: 100%
      margin-top: 200px
    .Sign-up-form
      width: 100%
      padding-top: 150px
    .row1
      height: 60px
      width: 100%
      margin-top: 20px
      display: grid
      grid-template-columns: 250px 250px 250px
      grid-template-rows:  1fr 1fr 1fr
      grid-template-areas: "column1 column2 column3"
    .column1
      grid-area: column1
      height: 45px
      margin-right: 10px 
    .column2
      grid-area: column2
      height: 45px
      margin-right: 10px
    .column3
      grid-area: column3
      height: 45px
    .form-control 
      height: 36px 
      width: 230px
    .row2
      height: 60px
      width: 100%
      margin-top: 20px
      display: grid
      grid-template-columns: 450px 350px 
      grid-template-rows:  1fr 
      grid-template-areas: "column4 column5"
      text-align: left
    .row2 .form-control
      height: 40px 
      width: 400px
    .btn_signup
      width: 100%
      height: 50px
      text-align: center
      margin-top: 140px
    .column4
      grid-area: column4
      width: 555px
      height: 45px
      margin-left: 20px
    .column5
      grid-area: column5
      width: 560px
      height: 45px
    .column5 .Upload 
      width: 98px
      height: 40px
    .column5 .form-control 
      width: 350px
      height: 40px
    .column5 span
      width: 283px
      margin-left: 100px
      font-family: 'Source Sans Pro'
      font-size: 12px
      font-weight: regular
      color: #8d8c8c




  @media screen and (max-width: 768px)
    body
      overflow-x: hidden
    .scrollToTop
      position: fixed
      bottom: 90px
      right: 30px
      height: 40px
      border-radius: 50px
      width: 40px
      text-align: center
      background:  grey
      line-height: 40px
      opacity: 0.8
      display: none
      color: #f66f09
    .section1
      display: flex
      flex-direction: column
      justify-content: space-around
      align-items: left
      text-align: left 
      height: 672px
      max-width: 100%
      margin-left: 20px
      background-image: url(../assets/img/bg-1.jpg)
      background-repeat: no-repeat
      background-size: cover
    .section1 span
      flex: 1
      width: 80%
      height: 41px
      color: rgb(255,255,255)
      font-family: 'Overpass', sans-serif
      font-size: 50px
      font-style: SemiBold
      margin-bottom: 25px
      margin-top: 18px
    .section1 p
      flex: 1
      width: 80%
      height: 122px
      color: rgb(255,255,255)
      font-family: 'Source Sans Pro', sans-serif
      font-size: 20px
      font-style: regular
      margin-bottom: 40px
    .section1 button
      flex: 1
      background-color: #ef6c00
      color: #fff
      height: 41px
      width: 288px
      margin-bottom: 50px
      margin-top: 40px
      border: 1px inherent #ef6c00
      border-radius: 5px
      transition: all ease .7s
      &:hover
        cursor: pointer
        background-color: #db9153
        color: #ef6c00
        transition: all ease .7s
    .section2 
      height: 1000px
      max-width: 100%
      padding-left: 20px
    .section2 h1
      width: 80%
      height: 50px
      font-family: 'Overpass', sans-serif
      font-size: 36px
      font-style: SemiBold
      text-align: center
      padding: 5px
    .sub-section1
      display: block
      height: 425px
      width: 100%
      padding-top: 15px
      margin-bottom: 30px
    .container1
      display: flex
      flex-direction: row
      justify-content: space-between
      width: 100%
      height: 285px
    .container1 img
      width: 90%
      height: 295px
    .container2
      display: block
      text-align: left
      height: 300px
      width: 100%
    .container2 h2
      font-family: 'Overpass', sans-serif
      font-size: 24px
      font-style: SemiBold
    .container2 p
      font-family: 'Source Sans Pro', sans-serif
      font-size: 14px
      font-style: Regular 
      height: 120px
      width: 100%
      color: #a6a5a5
    .container2 a
      text-decoration: none
      color: #ef6c00 
      font-family: 'Source Sans Pro', sans-serif
      font-size: 16px
      font-weight: bold
      transition: all ease 0.7s
      &:hover
        color: #f6ac6f
        transition: all ease 0.7s
    .sub-section2
      display: block
      height: 300px
      width: 100%
      text-align: center
      align-items: center
    .title
      height: 80px
      width: 80%
      font-family: 'Sans Source Pro', sans-serif
      font-size: 42px
      font-weight: 600
      text-align: center
      align-items: center
      margin-left: 50px
      margin-bottom: 61px
    .container3
      display: flex
      flex-direction: row
      justify-content: space-around
      text-align: left
      align-items: center
      height: 358px
      width: 100%
    .container4
      flex: 1 1 auto
      display: block
      width: 33%
      height: 274px
    .container4 img
      width: 98px
      height: 117px
    .container4 h2
      width: 100%
      height: 34px
      font-family: 'Overpass'
      font-size: 26px 
      font-style: SemiBold
    .container4 p
      width: 100%
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 16px
      margin-top: 30px
    .container5
      flex: 1 1 auto
      display: block
      width: 33%
      height: 274px
      margin-right: 10px
    .container5 img
      width: 98px
      height: 117px
    .container5 h2
      width: 100%
      height: 34px
      font-family: 'Overpass'
      font-size: 26px 
      font-style: SemiBold 
    .container5 p
      width: 100%
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 16px
      margin-top: 30px
    .container6
      flex: 1 1 auto
      display: block
      width: 33%
      height: 274px
    .container6 img
      width: 100%
      height: 117px
    .container6 h2
      width: 100%
      height: 30px
      font-family: 'Overpass'
      font-size: 26px 
      font-style: SemiBold
    .container6 p
      width: 100%
      height: 80px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 16px
      margin-top: 30px
    .section3
      display: block 
      height: 638px
      max-width: 100%
      background-image: url(../assets/img/bg-2.jpg)
      background-repeat: no-repeat
      background-size: cover
      margin-left: 20px
      padding-top: 10px
      margin-bottom: 96px
    .section3 span
      font-family: 'Overpass', sans-serif
      font-size: 42px
      font-style: SemiBold
      color: #fff
      width: 95%
      margin-top: 5px
    .section3 .content
      display: flex
      text-align: center
      align-items: center
      flex-direction: row
      padding-top: 50px
      width: 100%
      height: 374px
      justify-content: space-between
    .section3 .content span
      text-align: left
      font-size: 16px
      font-style: regular
      font-family: 'Source Sans Pro'
      color: #ced5e9
      height: 420px
    .section3 .content p
      height: 100px
      margin-bottom: 55px
      margin-left: 5px
      width: 100% 
    .section3 .content img 
      width: 50%
      height: 372px
      text-align: center
      align-items: center
    .section4
      height: 1390px
      max-width: 100%
      display: block
      margin-left: 20px
    .section4 .User-form
      display: block
      max-width: 100%
      height: 555px
      margin-bottom: 30px
    .section4 h1
      width: 100%
      height: 44px
      font-family: 'Overpass'
      font-size: 42px
      font-style: SemiBold
    .section4 h2
      width: 100%
      height: 18px
      font-family: 'Source Sans Pro'
      font-size: 18px
      font-style: Regular
    .section4 .user 
      display: flex
      flex-direction: column
      justify-content: space-between
      margin: 2em
      max-width: 100%
      height: 100px
      margin-top: 10px
      float: left
    .section4 .user_image
      border-radius: 50%
      width: 20%
      height: 50px
    .section4 .user-infos
      display: block
      text-align: left
      font-family: 'Source Sans Pro'
      font-size: 14px
      color: #4c4b4b
    .section4 .user-infos .user_name
      font-family: 'Overpass'
      font-weight: 600
      font-size: 22px
      width: 90%
      height: 50px
      color: #000
    .section4 .user-infos .user_position
      width: 277px
      height: 17px 
    .section4 .user-infos .user_email
      width: 277px
      height: 17px 
    .section4 .user-infos .user_telephone
      width: 60%
      height: 15px 
    .section4 button
      width: 40%
      height: 40px
      margin-top: 30px
      background-color: #fff
      border: 1px solid #ef6c00
      border-radius: 5px
      cursor: pointer
      transition: all ease .7s
      clear: left
      &:hover
        background-color: #ef6c00
        transition: all ease .7s
    .section4 button a
      color: #ef6c00
      text-decoration: none
      transition: all ease .7s
      &:hover
        color: #fff
        transition: all ease .7s
    .Sign-up-form
      width: 100%
      padding-top: 50px
    .forms_form
      height: 700px
      max-width: 100%
      margin-top: 70px
    .row1
      height: 60px
      width: 100%
      margin-top: 20px
      margin-right: none
      display: grid
      grid-template-columns: 250px 250px 200px
      grid-template-rows:  1fr 1fr 1fr
      grid-template-areas: "column1 column2 column3"
    .column1
      grid-area: column1
      height: 45px
    .column2
      grid-area: column2
      height: 45px
    .column3
      grid-area: column3
      height: 45px
    .form-control 
      height: 36px 
      width: 200px
    .row2
      height: 60px
      width: 100%
      margin-top: 20px
      display: grid
      grid-template-columns: 250px 350px 
      grid-template-rows:  1fr 
      grid-template-areas: "column4 column5"
      text-align: left
    .row2 .form-control
      height: 40px 
      width: 300px
    .btn_signup
      width: 100%
      height: 50px
      text-align: center
      margin-top: 30px
    .column4
      grid-area: column4
      height: 45px
    .column5
      grid-area: column5
      width: 376px
      height: 45px
      margin-left: 75px
      margin-top: -28px
    .column5 .Upload 
      width: 98px
      height: 40px
    .column5 .form-control 
      width: 250px
      height: 44px
    .column5 span
      width: 300px
      height: 12px
      font-family: 'Source Sans Pro'
      font-size: 12px
      font-weight: regular
      color: #8d8c8c
  

  @media screen and (max-width: 425px)
    body
      overflow-x: hidden
    .scrollToTop
      position: fixed
      bottom: 90px
      right: 200px
      height: 40px
      border-radius: 50px
      width: 40px
      text-align: center
      background:  grey
      line-height: 40px
      opacity: 0.8
      display: none
      color: #f66f09
    .section1
      display: flex
      flex-direction: column
      justify-content: space-around
      align-items: left
      margin-left: 10px
      text-align: left 
      height: 672px
      max-width: 100%
      
      background-image: url(../assets/img/bg-1.jpg)
      background-repeat: no-repeat
      background-size: cover
    .section1 span
      flex: 1
      width: 100%
      height: 41px
      color: rgb(255,255,255)
      font-family: 'Overpass', sans-serif
      font-size: 36px
      font-style: SemiBold
      margin-bottom: 10px
      margin-top: 5px
    .section1 p
      flex: 1
      width: 100%
      height: 122px
      color: rgb(255,255,255)
      font-family: 'Source Sans Pro', sans-serif
      font-size: 16px
      font-style: regular
      margin-bottom: 40px
      margin-top: 40px
    .section1 button
      flex: 1
      background-color: #ef6c00
      color: #fff
      height: 41px
      width: 288px
      margin-bottom: 140px
      margin-top: 40px
      border: 1px inherent #ef6c00
      border-radius: 5px
      transition: all ease .7s
      &:hover
        cursor: pointer
        background-color: #db9153
        color: #ef6c00
        transition: all ease .7s


    .section2 
      height: 1000px
      max-width: 100%
      margin-left: 10px
      

    .section2 h1
      width: 100%
      height: 42px
      font-family: 'Overpass', sans-serif
      font-size: 32px
      font-style: SemiBold
      text-align: center
      
    .sub-section1
      display: block
      height: 425px
      width: 100%
      padding-top: 15px
      margin-bottom: 20px
    .container1
      display: block
      width: 100%
      height: 285px
    .container1 img
      width: 100%
      height: 100%
      
    .container2
      display: block
      text-align: left
      height: 300px
      width: 100%

    .container2 h2
      font-family: 'Overpass', sans-serif
      font-size: 24px
      font-style: SemiBold
      
    .container2 p
      font-family: 'Source Sans Pro', sans-serif
      font-size: 14px
      font-style: Regular 
      height: 100px
      width: 100%
      color: #a6a5a5
    
    .container2 a
      text-decoration: none
      color: #ef6c00 
      font-family: 'Source Sans Pro', sans-serif
      font-size: 16px
      font-weight: bold
      transition: all ease 0.7s
      &:hover
        color: #f6ac6f
        transition: all ease 0.7s
    .sub-section2
      display: block
      height: 450px
      width: 100%
      text-align: center
      
    .title
      height: 50px
      width: 100%
      font-family: 'Sans Source Pro', sans-serif
      font-size: 30px
      margin-top: 200px
      text-align: left
      align-items: center
      margin-bottom: 10px
    .container3
      display: flex
      flex-direction: row
      justify-content: space-around
      text-align: left
      align-items: center
      height: 358px
      width: 100%
      
    .container4
      flex: 1 1 auto
      display: block
      width: 33%
      height: 274px
    .container4 img
      width: 98px
      height: 117px

    .container4 h2
      width: 100%
      height: 26px
      font-family: 'Overpass'
      font-size: 22px 
      font-style: SemiBold
     
    .container4 p
      width: 100%
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 14px
      margin-top: 30px
    
    .container5
      flex: 1 1 auto
      display: block
      width: 33%
      height: 274px
      margin-right: 10px
    .container5 img
      width: 98px
      height: 117px

    .container5 h2
      width: 100%
      height: 26px
      font-family: 'Overpass'
      font-size: 22px 
      font-style: SemiBold 
    .container5 p
      width: 100%
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 14px
      margin-top: 30px
    
    .container6
      flex: 1 1 auto
      display: block
      width: 33%
      height: 274px
    .container6 img
      width: 100%
      height: 117px

    .container6 h2
      width: 100%
      height: 26px
      font-family: 'Overpass'
      font-size: 22px 
      font-style: SemiBold

    .container6 p
      width: 100%
      
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 14px
      margin-top: 30px
    

    .section3
      display: block 
      height: 700px
      max-width: 100%
      background-image: url(../assets/img/bg-2.jpg)
      background-repeat: no-repeat
      background-size: cover
      margin-left: 20px
      padding-top: 10px
      margin-top: 100px
    .section3 span
      font-family: 'Overpass', sans-serif
      font-size: 34px
      font-style: SemiBold
      color: #fff
      width: 100%
      height: 75px
      margin-top: 5px
    .section3 .content
      display: flex
      text-align: center
      align-items: center
      flex-direction: row
      margin-top: 10px
      width: 100%
      justify-content: space-between
    .section3 .content span
      text-align: left
      font-size: 10px
      font-style: regular
      font-family: 'Source Sans Pro'
      color: #ced5e9
      height: 420px
    .section3 .content p
      height: 100px
      margin-bottom: 55px
      margin-left: 5px
      width: 100% 
    .section3 .content img 
      width: 50%
      height: 372px
      text-align: center
      align-items: center

    .section4
      height: 1900px
      width: 100%
      display: block
      margin-left: 20px
    .section4 .User-form
      display: block
      width: 100%
      height: 555px
      margin-bottom: 30px
    .section4 h1
      width: 100%
      height: 44px
      font-family: 'Overpass'
      font-size: 42px
      font-style: SemiBold
    .section4 h2
      width: 100%
      height: 18px
      font-family: 'Source Sans Pro'
      font-size: 18px
      font-style: Regular
    .section4 .user 
      display: flex
      flex-direction: column
      justify-content: space-between
      margin: 2em
      max-width: 100%
      height: 100px
      margin-top: 10px
      float: left
  
    .section4 .user_image
      border-radius: 50%
      width: 20%
      height: 50px
    .section4 .user-infos
      display: block
      text-align: left
      font-family: 'Source Sans Pro'
      font-size: 14px
      color: #4c4b4b
          
    .section4 .user-infos .user_name
      font-family: 'Overpass'
      font-weight: 600
      font-size: 22px
      width: 90%
      height: 50px
      color: #000
    .section4 .user-infos .user_position
      width: 277px
      height: 17px 

    .section4 .user-infos .user_email
      width: 277px
      height: 17px 
      
    .section4 .user-infos .user_telephone
      width: 60%
      height: 15px 
    .section4 button
      width: 40%
      height: 40px
      margin-top: 30px
      background-color: #fff
      border: 1px solid #ef6c00
      border-radius: 5px
      cursor: pointer
      transition: all ease .7s
      clear: left
      &:hover
        background-color: #ef6c00
        transition: all ease .7s
    .section4 button a
      color: #ef6c00
      text-decoration: none
      transition: all ease .7s
      &:hover
        color: #fff
        transition: all ease .7s

    .Sign-up-form
      width: 100%
      margin-top: 500px
      height: 1000 px
    .Sign-up-form h1
      font-size: 34px
    .Sign-up-form h2
      font-size: 16px
      width: 90%
      height: 30px
      text-align: right
    .forms_form
      height: 700px
      max-width: 100%
      margin-top: 50px
    .row1
      height: 60px
      width: 100%
      margin-top: 20px
      display: block
    .column1
      height: 50px
      margin-bottom: 20px
      text-align: left
    .column2
      height: 50px
      margin-bottom: 20px
      text-align: left
    .column3
      height: 50px
      text-align: left
    .form-control 
      height: 45px 
      width: 360px
    .row2
      height: 60px
      width: 100%
      margin-top: 150px
      display: block
    .row2 .form-control
      height: 45px 
      width: 360px
    .btn_signup
      width: 100%
      height: 50px
      text-align: center
      margin-top: 70px
    .column4
      height: 50px
      margin-bottom: 20px
      margin-left: -3px
      
    .column5
      margin-top: 10px
      width: 300px
      height: 45px
      margin-left: -10px
      text-align: left
      

    .column5 .Upload 
      width: 50px
      height: 40px
    .column5 .form-control 
      width: 250px
      height: 44px
    .column5 span
      width: 100px
      height: 12px
      font-family: 'Source Sans Pro'
      font-size: 12px
      font-weight: regular
      color: #8d8c8c



  @media screen and (max-width: 375px)
    body
      overflow-x: hidden
    .scrollToTop
      position: fixed
      bottom: 90px
      right: 230px
      height: 40px
      border-radius: 50px
      width: 40px
      text-align: center
      background:  grey
      line-height: 40px
      opacity: 0.8
      display: none
      color: #f66f09
    .section1
      display: flex
      flex-direction: column
      justify-content: space-around
      text-align: left
      height: 672px
      max-width: 100%
      background-image: url(../assets/img/bg-1.jpg)
      background-repeat: no-repeat
      background-size: cover
    .section1 span
      flex: 1
      width: 100%
      height: 30px
      color: rgb(255,255,255)
      font-family: 'Overpass', sans-serif
      font-size: 32px
      font-style: SemiBold
      margin-bottom: 10px
      margin-top: 5px
      text-align: left
      margin-left: -50px
    .section1 p
      flex: 1
      width: 100%
      height: 122px
      color: rgb(255,255,255)
      font-family: 'Source Sans Pro', sans-serif
      font-size: 16px
      font-style: regular
      margin-left: -50px
      margin-bottom: 40px
      margin-top: 40px
    .section1 button
      flex: 1
      background-color: #ef6c00
      color: #fff
      height: 41px
      width: 288px
      margin-bottom: 140px
      margin-top: 40px
      margin-left: -50px
      border: 1px inherent #ef6c00
      border-radius: 5px
      transition: all ease .7s
      &:hover
        cursor: pointer
        background-color: #db9153
        color: #ef6c00
        transition: all ease .7s


    .section2 
      height: 1000px
      max-width: 100%
      margin-left: 10px
      

    .section2 h1
      width: 100%
      height: 42px
      font-family: 'Overpass', sans-serif
      font-size: 32px
      font-style: SemiBold
      text-align: center
      
    .sub-section1
      display: block
      height: 425px
      width: 100%
      padding-top: 15px
      margin-bottom: 20px
    .container1
      display: block
      width: 100%
      height: 285px
    .container1 img
      width: 100%
      height: 100%
      
    .container2
      display: block
      text-align: left
      height: 300px
      width: 100%

    .container2 h2
      font-family: 'Overpass', sans-serif
      font-size: 24px
      font-style: SemiBold
      
    .container2 p
      font-family: 'Source Sans Pro', sans-serif
      font-size: 12px
      font-style: Regular 
      height: 100px
      width: 100%
      color: #a6a5a5
    
    .container2 a
      text-decoration: none
      color: #ef6c00 
      font-family: 'Source Sans Pro', sans-serif
      font-size: 16px
      font-weight: bold
      transition: all ease 0.7s
      &:hover
        color: #f6ac6f
        transition: all ease 0.7s
    .sub-section2
      display: block
      height: 450px
      width: 100%
      text-align: center
      
    .title
      height: 50px
      width: 100%
      font-family: 'Sans Source Pro', sans-serif
      font-size: 26px
      margin-top: 200px
      text-align: left
      align-items: center
      margin-left: -10px
      margin-bottom: 10px
    .container3
      display: flex
      flex-direction: row
      justify-content: space-around
      text-align: left
      align-items: center
      height: 358px
      width: 100%
      
    .container4
      flex: 1 1 auto
      display: block
      width: 33%
      height: 274px
    .container4 img
      width: 98px
      height: 117px

    .container4 h2
      width: 100%
      height: 20px
      font-family: 'Overpass'
      font-size: 18px 
      font-style: SemiBold
     
    .container4 p
      width: 100%
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 12px
      margin-top: 30px
    
    .container5
      flex: 1 1 auto
      display: block
      width: 33%
      height: 274px
      margin-right: 10px
    .container5 img
      width: 98px
      height: 117px

    .container5 h2
      width: 100%
      height: 20px
      font-family: 'Overpass'
      font-size: 18px 
      font-style: SemiBold 
    .container5 p
      width: 100%
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 12px
      margin-top: 30px
    
    .container6
      flex: 1 1 auto
      display: block
      width: 33%
      height: 274px
    .container6 img
      width: 100%
      height: 117px

    .container6 h2
      width: 100%
      height: 20px
      font-family: 'Overpass'
      font-size: 18px 
      font-style: SemiBold

    .container6 p
      width: 100%
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 12px
      margin-top: 30px
    .section3
      display: block 
      height: 700px
      max-width: 100%
      background-image: url(../assets/img/bg-2.jpg)
      background-repeat: no-repeat
      background-size: cover
      margin-left: 20px
      padding-top: 10px
      margin-top: 100px
    .section3 span
      font-family: 'Overpass', sans-serif
      font-size: 34px
      font-style: SemiBold
      color: #fff
      width: 100%
      height: 75px
      margin-top: 5px
    .section3 .content
      display: flex
      text-align: center
      align-items: center
      flex-direction: row
      margin-top: 10px
      width: 100%
      justify-content: space-between
    .section3 .content span
      text-align: left
      font-size: 10px
      font-style: regular
      font-family: 'Source Sans Pro'
      color: #ced5e9
      height: 420px
    .section3 .content p
      height: 100px
      margin-bottom: 55px
      margin-left: 5px
      width: 100% 
    .section3 .content img 
      width: 50%
      height: 372px
      text-align: center
      align-items: center

    .section4
      height: 1900px
      width: 100%
      display: block
      margin-left: 20px
    .section4 .User-form
      display: block
      width: 100%
      height: 555px
      margin-bottom: 30px
    .section4 h1
      width: 100%
      height: 44px
      font-family: 'Overpass'
      font-size: 42px
      font-style: SemiBold
    .section4 h2
      width: 100%
      height: 18px
      font-family: 'Source Sans Pro'
      font-size: 18px
      font-style: Regular
    .section4 .user 
      display: flex
      flex-direction: column
      justify-content: space-between
      margin: 2em
      max-width: 100%
      height: 100px
      margin-top: 10px
      float: left
  
    .section4 .user_image
      border-radius: 50%
      width: 20%
      height: 50px
    .section4 .user-infos
      display: block
      text-align: left
      font-family: 'Source Sans Pro'
      font-size: 14px
      color: #4c4b4b
          
    .section4 .user-infos .user_name
      font-family: 'Overpass'
      font-weight: 600
      font-size: 22px
      width: 90%
      height: 50px
      color: #000
    .section4 .user-infos .user_position
      width: 277px
      height: 17px 

    .section4 .user-infos .user_email
      width: 277px
      height: 17px 
      
    .section4 .user-infos .user_telephone
      width: 60%
      height: 15px 
    .section4 button
      width: 40%
      height: 40px
      margin-top: 30px
      background-color: #fff
      border: 1px solid #ef6c00
      border-radius: 5px
      cursor: pointer
      transition: all ease .7s
      clear: left
      &:hover
        background-color: #ef6c00
        transition: all ease .7s
    .section4 button a
      color: #ef6c00
      text-decoration: none
      transition: all ease .7s
      &:hover
        color: #fff
        transition: all ease .7s

    .Sign-up-form
      width: 100%
      margin-top: 500px
      height: 1000 px
    .Sign-up-form h1
      font-size: 34px
    .Sign-up-form h2
      font-size: 16px
      width: 90%
      height: 30px
      text-align: right
    .forms_form
      height: 700px
      max-width: 100%
      margin-top: 50px
    .row1
      height: 60px
      width: 100%
      margin-top: 20px
      display: block
    .column1
      height: 50px
      margin-bottom: 20px
      text-align: left
    .column2
      height: 50px
      margin-bottom: 20px
      text-align: left
    .column3
      height: 50px
      text-align: left
    .form-control 
      height: 45px 
      width: 360px
    .row2
      height: 60px
      width: 100%
      margin-top: 150px
      display: block
    .row2 .form-control
      height: 45px 
      width: 360px
    .btn_signup
      width: 100%
      height: 50px
      text-align: center
      margin-top: 70px
    .column4
      height: 50px
      margin-bottom: 20px
      margin-left: -3px
      
    .column5
      margin-top: 10px
      width: 300px
      height: 45px
      margin-left: -10px
      text-align: left
      

    .column5 .Upload 
      width: 50px
      height: 40px
    .column5 .form-control 
      width: 250px
      height: 44px
    .column5 span
      width: 100px
      height: 12px
      font-family: 'Source Sans Pro'
      font-size: 12px
      font-weight: regular
      color: #8d8c8c



  @media screen and (max-width: 320px)
    body
      overflow-x: hidden
    .scrollToTop
      position: fixed
      bottom: 90px
      right: 270px
      height: 40px
      border-radius: 50px
      width: 40px
      text-align: center
      background:  grey
      line-height: 40px
      opacity: 0.8
      display: none
      color: #f66f09
    .section1
      display: flex
      flex-direction: column
      justify-content: space-around
      text-align: left
      height: 672px
      max-width: 100%
      background-image: url(../assets/img/bg-1.jpg)
      background-repeat: no-repeat
      background-size: cover
    .section1 span
      flex: 1
      width: 100%
      height: 30px
      color: rgb(255,255,255)
      font-family: 'Overpass', sans-serif
      font-size: 28px
      font-style: SemiBold
      margin-bottom: 10px
      margin-top: 5px
      text-align: left
      margin-left: -50px
    .section1 p
      flex: 1
      width: 100%
      height: 122px
      color: rgb(255,255,255)
      font-family: 'Source Sans Pro', sans-serif
      font-size: 16px
      font-style: regular
      margin-left: -50px
      margin-bottom: 40px
      margin-top: 40px
    .section1 button
      flex: 1
      background-color: #ef6c00
      color: #fff
      height: 41px
      width: 220px
      margin-bottom: 140px
      margin-top: 40px
      margin-left: -50px
      border: 1px inherent #ef6c00
      border-radius: 5px
      transition: all ease .7s
      &:hover
        cursor: pointer
        background-color: #db9153
        color: #ef6c00
        transition: all ease .7s
    .section2 
      height: 1000px
      max-width: 100%
      margin-left: 10px
    .section2 h1
      width: 100%
      height: 40px
      font-family: 'Overpass', sans-serif
      font-size: 28px
      font-style: SemiBold
      text-align: center
    .sub-section1
      display: block
      height: 425px
      width: 100%
      padding-top: 15px
      margin-bottom: 20px
    .container1
      display: block
      width: 100%
      height: 285px
    .container1 img
      width: 100%
      height: 100%
    .container2
      display: block
      text-align: left
      height: 300px
      width: 100%
    .container2 h2
      font-family: 'Overpass', sans-serif
      font-size: 22px
      font-style: SemiBold
    .container2 p
      font-family: 'Source Sans Pro', sans-serif
      font-size: 10px
      font-style: Regular 
      height: 100px
      width: 100%
      color: #a6a5a5
    
    .container2 a
      text-decoration: none
      color: #ef6c00 
      font-family: 'Source Sans Pro', sans-serif
      font-size: 16px
      font-weight: bold
      transition: all ease 0.7s
      &:hover
        color: #f6ac6f
        transition: all ease 0.7s
    .sub-section2
      display: block
      height: 450px
      width: 100%
      text-align: center
      
    .title
      height: 50px
      width: 100%
      font-family: 'Sans Source Pro', sans-serif
      font-size: 24px
      margin-top: 200px
      text-align: left
      align-items: center
      margin-left: -10px
      margin-bottom: 10px
    .container3
      display: flex
      flex-direction: row
      justify-content: space-around
      text-align: left
      align-items: center
      height: 358px
      width: 100%
      
    .container4
      flex: 1 1 auto
      display: block
      width: 33%
      height: 274px
    .container4 img
      width: 90px
      height: 110px

    .container4 h2
      width: 100%
      height: 18px
      font-family: 'Overpass'
      font-size: 14px 
      font-style: SemiBold
     
    .container4 p
      width: 100%
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 12px
      margin-top: 30px
    
    .container5
      flex: 1 1 auto
      display: block
      width: 33%
      height: 274px
      margin-right: 10px
    .container5 img
      width: 90px
      height: 110px

    .container5 h2
      width: 100%
      height: 18px
      font-family: 'Overpass'
      font-size: 14px 
      font-style: SemiBold 
    .container5 p
      width: 100%
      height: 108px
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 12px
      margin-top: 30px
    
    .container6
      flex: 1 1 auto
      display: block
      width: 33%
      height: 274px
    .container6 img
      width: 90px
      height: 110px

    .container6 h2
      width: 100%
      height: 10px
      font-family: 'Overpass'
      font-size: 14px 
      font-style: SemiBold

    .container6 p
      width: 100%
      color: #4c4b4b
      font-family: 'Source Sans Pro'
      font-size: 12px
      margin-top: 30px
    .section3
      display: block 
      height: 700px
      max-width: 100%
      background-image: url(../assets/img/bg-2.jpg)
      background-repeat: no-repeat
      background-size: cover
      padding-top: 10px
      margin-top: 100px
    .section3 span
      font-family: 'Overpass', sans-serif
      font-size: 34px
      font-style: SemiBold
      color: #fff
      width: 100%
      height: 75px
      margin-top: 5px
    .section3 .content
      display: flex
      text-align: center
      align-items: center
      flex-direction: row
      margin-top: 10px
      width: 100%
      justify-content: space-between
    .section3 .content span
      text-align: left
      font-size: 10px
      font-style: regular
      font-family: 'Source Sans Pro'
      color: #ced5e9
      height: 420px
    .section3 .content p
      height: 100px
      margin-bottom: 55px
      width: 100% 
    .section3 .content img 
      width: 50%
      height: 372px
      text-align: center
      align-items: center

    .section4
      height: 1900px
      width: 100%
      display: block
      margin-left: 20px
    .section4 .User-form
      display: block
      width: 100%
      height: 555px
      margin-bottom: 30px
    .section4 h1
      width: 100%
      height: 44px
      font-family: 'Overpass'
      font-size: 32px
      font-style: SemiBold
    .section4 h2
      width: 100%
      height: 18px
      font-family: 'Source Sans Pro'
      font-size: 14px
      font-style: Regular
    .section4 .user 
      display: flex
      flex-direction: column
      justify-content: space-between
      margin: 2em
      max-width: 100%
      height: 100px
      margin-top: 10px
      float: left
  
    .section4 .user_image
      border-radius: 50%
      width: 20%
      height: 50px
    .section4 .user-infos
      display: block
      text-align: left
      font-family: 'Source Sans Pro'
      font-size: 14px
      color: #4c4b4b
    .section4 .user-infos .user_name
      font-family: 'Overpass'
      font-weight: 600
      font-size: 22px
      width: 90%
      height: 50px
      color: #000
    .section4 .user-infos .user_position
      width: 277px
      height: 17px 
    .section4 .user-infos .user_email
      width: 277px
      height: 17px 
    .section4 .user-infos .user_telephone
      width: 60%
      height: 15px 
    .section4 button
      width: 40%
      height: 40px
      margin-top: 30px
      background-color: #fff
      border: 1px solid #ef6c00
      border-radius: 5px
      cursor: pointer
      transition: all ease .7s
      clear: left
      &:hover
        background-color: #ef6c00
        transition: all ease .7s
    .section4 button a
      color: #ef6c00
      text-decoration: none
      transition: all ease .7s
      &:hover
        color: #fff
        transition: all ease .7s
    .Sign-up-form
      width: 100%
      margin-top: 500px
      height: 1000 px
    .Sign-up-form h1
      font-size: 28px
    .Sign-up-form h2
      font-size: 12px
      width: 90%
      height: 20px
      text-align: right
    .forms_form
      height: 700px
      max-width: 100%
      margin-top: 50px
    .row1
      height: 60px
      width: 100%
      margin-top: 20px
      display: block
    .column1
      height: 35px
      margin-bottom: 20px
      text-align: left
    .column2
      height: 35px
      margin-bottom: 20px
      text-align: left
    .column3
      height: 40px
      text-align: left
    .form-control 
      height: 50px 
      width: 280px
    .row2
      height: 60px
      width: 100%
      margin-top: 150px
      display: block
    .row2 .form-control
      height: 50px 
      width: 280px
    .btn_signup
      width: 100%
      height: 50px
      text-align: center
      margin-top: 70px
    .column4
      height: 50px
      margin-bottom: 20px
      margin-left: -3px
    .column5
      margin-top: 10px
      width: 300px
      height: 45px
      margin-left: -10px
      text-align: left
    .column5 .Upload 
      width: 50px
      height: 40px
    .column5 .form-control 
      width: 250px
      height: 44px
    .column5 span
      width: 100px
      height: 12px
      font-family: 'Source Sans Pro'
      font-size: 12px
      font-weight: regular
      color: #8d8c8c


 
  
    
          
</style>