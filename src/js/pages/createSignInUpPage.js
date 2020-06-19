function createSignInUpPage() {
  return `<section class="inner-section__start">
    <a href="#/main" class="click-enter"></a>
      <div class="start-enter">
        <div class="start-enter__inner">
          <nav class="start-enter__nav">
            <ul class="start-enter__nav-links">
              <li class="sign sign__in animation active"><a class="control control-in">Sign in</a></li>
              <li class="sign sign__up animation inactive"><a class="control control-up">Sign up</a></li>
            </ul>
          </nav>
          <div>
            <form class="form form__sign-in" action="" method="post" name="form" data-in>
  <input required autocomplete="disabled" class="form__styling sign-in__login" type="e-mail" name="login" placeholder="Login"/>
<input required autocomplete="disabled" class="form__styling sign-in__pass" type="password" name="password-in" placeholder="Password"/>
              <div class="error-block"></div>
              <button class="button">Sign in</button>
            </form>
            <form class="form form__sign-up" action="" method="post" name="form" data-up>
   <input required autocomplete="disabled" class="form__styling sign-up__login" type="e-mail" name="email" placeholder="Email"/>
<input required autocomplete="disabled" class="form__styling sign-up__pass" type="text" name="password-up" placeholder="Password"/>
              <div class="error-block-up"></div>
              <p class="title-block">Choose your icon</p>
              <div class="icons">
                <div><img data-id="1" class="icons__item" src="assets/img/1.svg" alt="1"></div>
                <div><img data-id="2" class="icons__item" src="assets/img/2.svg" alt="2"></div>
                <div><img data-id="3" class="icons__item" src="assets/img/3.svg" alt="3"></div>
                <div><img data-id="4" class="icons__item" src="assets/img/4.svg" alt="4"></div>
                <div><img data-id="5" class="icons__item" src="assets/img/5.svg" alt="5"></div>
                <div><img data-id="6" class="icons__item" src="assets/img/6.svg" alt="6"></div>
              </div>
              <button class="button">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </section>`;
}

export default createSignInUpPage;
