class Footer extends HTMLElement {

  constructor() {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&display=swap');

      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css');

      * {
        font-family: 'Amaranth', sans-serif;
        box-sizing: border-box;
      }

      .text-white {
          color: #fff !important;
      }
      .bg-success {
          background-color: #28a745 !important;
      }
      footer {
          padding-top: 3rem;
          padding-bottom: 3rem;
      }
      article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
          display: block;
      }

      .container {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
      }
      .container, .container-lg, .container-md, .container-sm, .container-xl {
          max-width: 1140px;
      }

      .float-right {
          float: right !important;
      }
      footer p {
          margin-bottom: .25rem;
      }
      p {
          margin-top: 0;
          margin-bottom: 1rem;
      }

      .list-unstyled a , .float-right a{
      float:right;
      overflow:auto;
      padding:2px 10px 2px 10px;
      margin-bottom:10px;
      margin-right:10px;
      text-align:center;
      text-decoration:none;
      border-radius: 5px;
      border:none 1px solid;
      background:none;
      color:#fff;
      }

      .list-unstyled a:hover , .float-right a:hover{
      border:none 1px solid;
      background:#fff;
      color:#000;
      }
      </style>
    
      <footer class="bg-success text-white">
        <div class="container">
            <p class="float-right">
                <a href="#"><i class='fa fa-chevron-circle-up fa-sm'></i> Back to top</a>
            </p>
            <p>Copyright &#169; 2020. TheSportsDB</p>
        </div>
      </footer>
    `
  }
}

customElements.define('footer-custom', Footer)
